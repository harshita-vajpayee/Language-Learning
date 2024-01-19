console.log("hello")

const { render } = require("ejs")
const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require('dotenv').config()


const User = require("./model/user_schema")
mongoose.set("strictQuery", false);
const dburi = process.env.SOURCE;

//mongo connection
mongoose.connect(dburi)
    .then(() => {
        console.log("db connected")
        app.listen(5000, () => {
            console.log("Backend")
        })
    })
    .catch((err) => {
        console.log(err)
    })

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//paths
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, "./views"))

// LINKING PAGES
let documentId = '';

// home
app.get("/", (req, res) => {
    console.log("Success")
    res.sendFile("./views/pmd_login.html", { root: __dirname })
})

//signup
app.get("/signup", (req, res) => {
    console.log("Success")
    res.sendFile("./views/pmd_signup.html", { root: __dirname })
})


app.post("/signup", async(req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });

        if (existingUser) {
            // Email already registered, send alert message
            alert("User Already Exists");
            //return res.status(400).json({ error: "User Already Exists" });
        }
        console.log(req.body.username);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        await newUser.save()
            .then((result) => {
                console.log(result);
                documentId = newUser._id;
                console.log(documentId);
                res.status(201).render("dashboard", { checkUser: newUser });
                req.userId = newUser._id;
            }).catch((err) => {
                console.log(err)
            })

    } catch (error) {
        res.status(400).send(error)
    }
})

//login
app.post("/login", async(req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        console.log(`${username} and ${password}`)

        const checkUser = await User.findOne({ username: username })
        if (checkUser.password === password) {
            console.log("Login Successfull")
            documentId = checkUser._id;
            console.log(documentId);
            res.status(201).render("dashboard", { checkUser })
                //quiz page
            req.userId = checkUser._id;

        } else {
            res.send("Incorrect password")
        }
    } catch (error) {
        res.status(400).send("Invalid username")
    }

})

//logout
app.get("/logout", function(req, res) {
    res.clearCookie('nToken');
    console.log("logged out")
    res.redirect("/");
});
//different language learning dashboard
app.get("/english", async function(req, res) {
    const user = await User.findById(documentId);
    res.status(201).render("english", { checkUser: user });
})
app.get("/hindi", async function(req, res) {
    const user = await User.findById(documentId);
    res.status(201).render("hindi", { checkUser: user });
})
app.get("/french", async function(req, res) {
        const user = await User.findById(documentId);
        res.status(201).render("french", { checkUser: user });
    })
    //dashboard page
app.get("/dashboard", function(req, res) {
        res.sendFile("./views/dashboard.html", { root: __dirname })
    })
    //english placards
app.get("/placard", function(req, res) {
        res.sendFile("./views/placard.html", { root: __dirname })
    })
    //english pronounciation
app.get("/pronounciation", function(req, res) {
    res.sendFile("./views/pronounciation.html", { root: __dirname })
})

//english quizes
app.get("/quiz1", async function(req, res) {
    console.log(documentId);
    const user = await User.findById(documentId);
    //console.log("you", user.username)
    res.status(201).render("quiz1instruction", { user: user });
})

app.get("/quizone", async function(req, res) {
    const user = await User.findById(documentId);
    res.status(201).render("quiz1", { user: user });
})
app.get("/quiz2", async function(req, res) {
    console.log(documentId);
    const user = await User.findById(documentId);
    res.status(201).render("quiz2instruction", { user: user });
})

app.get("/quizsecond", async function(req, res) {
        const user = await User.findById(documentId);
        res.status(201).render("quiz2", { user: user });
    })
    //hindi placard
app.get("/hplacard", function(req, res) {
        res.sendFile("./views/hplacard.html", { root: __dirname })
    })
    //hindi pronounciation
app.get("/hpronounciation", function(req, res) {
        res.sendFile("./views/hpronounciation.html", { root: __dirname })
    })
    //hindi quizes
app.get("/hquiz1", async function(req, res) {
    console.log(documentId);
    const user = await User.findById(documentId);
    //console.log("you", user.username)
    res.status(201).render("hquiz1instruction", { user: user });
})

app.get("/hquizone", async function(req, res) {
    const user = await User.findById(documentId);
    res.status(201).render("hquiz1", { user: user });
})
app.get("/hquiz2", async function(req, res) {
    console.log(documentId);
    const user = await User.findById(documentId);
    res.status(201).render("hquiz2instruction", { user: user });
})

app.get("/hquizsecond", function(req, res) {
        res.status(201).render("hquiz2", { user: user });
    })
    // french placard
app.get("/fplacard", function(req, res) {
        res.sendFile("./views/fplacard.html", { root: __dirname })
    })
    // french prounounciation
app.get("/fpronounciation", function(req, res) {
    res.sendFile("./views/fpronounciation.html", { root: __dirname })
})

//notification
app.get("/notification", function(req, res) {
    res.sendFile("./views/notification.html", { root: __dirname })
})

app.post('/end-quiz', async(req, res) => {
    try {
        console.log("here")
        const correct = req.body.quiz1;
        const total = req.body.total;
        console.log(correct);
        // Update the user's quiz score
        const updatedUser = await User.findByIdAndUpdate(documentId, { quiz1: correct });
        updatedUser.quiz1 = correct;
        await updatedUser.save();
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log(updatedUser);
        return res.status(200).json({ message: 'User score updated successfully of Quiz1' });
    } catch (error) {
        console.error('Error updating user score:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/end-quiz2', async(req, res) => {
    try {
        console.log("here")
        const correct = req.body.quiz2;
        const total = req.body.total;
        console.log(correct);
        // Update the user's quiz score
        const updatedUser = await User.findByIdAndUpdate(documentId, { quiz2: correct });
        updatedUser.quiz2 = correct;
        await updatedUser.save();
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log(updatedUser);
        return res.status(200).json({ message: 'User score updated successfully of Quiz2' });
    } catch (error) {
        console.error('Error updating user score:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/end-hquiz', async(req, res) => {
    try {
        console.log("here")
        const correct = req.body.hquiz1;
        const total = req.body.total;
        console.log(correct);
        // Update the user's quiz score
        const updatedUser = await User.findByIdAndUpdate(documentId, { hquiz1: correct });
        updatedUser.hquiz1 = correct;
        await updatedUser.save();
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log(updatedUser);
        return res.status(200).json({ message: 'User score updated successfully of Quiz1' });
    } catch (error) {
        console.error('Error updating user score:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// In your app.js or server file

app.get('/get-data', async(req, res) => {
    try {
        // Fetch data from MongoDB
        const user = await User.findById(documentId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});