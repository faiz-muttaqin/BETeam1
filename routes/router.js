const express = require("express");
const { dirname } = require("path");
const route = express.Router();
const userController = require("../controllers/userController");
const path = require("path");

// route.get("/", (req, res) => {
//   res.send("Akses /api-docs untuk cek API yang tersedia");
// });

//userView
// route.get("/", userController.reactView);
// route.get("/signup", userController.reactView);
// route.get("/login", userController.reactView);
// route.get("/game", userController.reactView);
// route.get("/user-profile", userController.reactView);
// route.get("/admin", userController.reactView);
route.get("/login", (req, res) => {res.sendFile(path.join(__dirname, "../public/login.html"));});
route.get("/signup", (req, res) => {res.sendFile(path.join(__dirname, "../public/signup.html"));});
route.get("/game", (req, res) => {res.sendFile(path.join(__dirname, "../public/game.html"));});
route.get("/contact", (req, res) => {res.sendFile(path.join(__dirname, "../public/about.html"));});
route.get("/about", (req, res) => {res.sendFile(path.join(__dirname, "../public/about.html"));});
route.get("/blog", (req, res) => {res.sendFile(path.join(__dirname, "../public/about.html"));});
route.get("/game/matching-images", (req, res) => {res.sendFile(path.join(__dirname, "../public/game/matching-images.html"));});
route.get("/game/rpsbot.html", (req, res) => {res.sendFile(path.join(__dirname, "../public/rpsbot.html"));});
route.get("/game/tictactoe", (req, res) => {res.sendFile(path.join(__dirname, "../public/game/tictactoe.html"));});
// route.get("/game/admin", (req, res) => {res.sendFile(path.join(__dirname, "../public/admin.html"));});
route.get("/user-edit", (req, res) => {res.sendFile(path.join(__dirname, "../public/user-edit.html"));});
route.get("/user-profile", (req, res) => {res.sendFile(path.join(__dirname, "../public/user-profile.html"));});
route.get("/user-profile/editprofile", (req, res) => {res.sendFile(path.join(__dirname, "../public/user-profile.html"));});
route.get("/user-profile/history", (req, res) => {res.sendFile(path.join(__dirname, "../public/user-profile.html"));});
route.get("/user-profile/summary", (req, res) => {res.sendFile(path.join(__dirname, "../public/user-profile.html"));});

console.log(path.join(__dirname, "../public/login.html"))
// API User
route.post("/api/user", userController.register); // create new user
route.get("/api/user", userController.getUser); // get all user
route.get("/api/user/:id", userController.getUserById); //get User by Id
route.put("/api/user/:id", userController.updateUser); //Update User by Id
route.delete("/api/user/:id", userController.deleteUser); // delete User by Id

route.post("/api/login", userController.login); // Post user data & Verify

route.post("/api/history", userController.createHistory); // Create gameplay history
route.get("/api/history/:user_id", userController.getHistory); // get user gameplay history by id

module.exports = route;
