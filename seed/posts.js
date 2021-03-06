const db = require("../db/connection");
const Post = require("../models/post");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const posts = [
    {
      title: "Home Loan Account",
      imgURL:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2FoMZBVWU.png",
      content:
        "Wolf raw denim mustache, forage bespoke sriracha adipisicing marfa portland dolore food truck. Taxidermy hashtag ullamco ut single-origin coffee, magna tbh selvage id PBR&B excepteur tempor. Drinking vinegar gochujang labore mixtape put a bird on it man bun semiotics. Squid eiusmod commodo elit man bun cillum in before they sold out tousled. Tote bag selvage pop-up hot chicken cornhole kale chips farm-to-table four dollar toast la croix dolore bespoke. Echo park semiotics umami, whatever kombucha anim tousled brunch crucifix man braid.",
      author: "Diamond Bergnaum",
    },
    {
      title: "Hacking TCP Lake",
      imgURL: "https://pgcpsmess.files.wordpress.com/2014/04/red-fox.jpg",
      content:
        "Kale chips laboris offal freegan ramps nisi, sriracha flexitarian. Cloud bread ullamco irure, sriracha succulents four dollar toast ut iPhone sartorial deep v. Squid sunt cray whatever hoodie irure chartreuse drinking vinegar chicharrones ea narwhal. Cliche hell of banjo tempor 90's artisan wayfarers, whatever pitchfork elit four dollar toast lo-fi. Veniam cliche craft beer hashtag four loko street art meditation scenester vaporware eu anim.",
      author: "Talon Senger",
    },
    {
      title: "Synthesizing Steel",
      imgURL: "http://lorempixel.com/640/480/animals",
      content:
        "Polaroid distillery microdosing voluptate 90's pork belly adipisicing portland incididunt exercitation. Humblebrag tofu artisan unicorn fanny pack in. Edison bulb quinoa tofu helvetica non. Ullamco cillum 90's, ennui kitsch pork belly cliche officia.",
      author: "Maryse Gleichner",
    },
  ];

  await Post.insertMany(posts);
  console.log("you got seeds");
};
const run = async () => {
  await main();
  db.close();
};

run();
