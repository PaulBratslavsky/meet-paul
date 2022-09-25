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
  showText(messages.bio, "green");
  addSpace();
  messages.resume();
  messages.links();
  addSpace();

}

start();
