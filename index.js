#!/usr/bin/env node
const cliHeader = require("./utils/cliHeader");
const showHeading = require("./utils/showHeading");
const msg = require("./messages");
const showText = require("./utils/showText");
const addSpace = require("./utils/addSpace");

async function start() {
  const messages = await msg();

  cliHeader();
  showHeading(messages.welcome, "green");
  addSpace();
  showHeading('===================================================', "green");

  showHeading('===================================================', "green");
  showHeading('RECENT POSTS:', "green");
  messages.recentPosts();
  showHeading('===================================================', "green");

  addSpace();

}

start();
