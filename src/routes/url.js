require("dotenv").config();
const { Logger } = require("@lo-agency/logger");
const validUrl = require("valid-url");
const express = require("express");
const router = express.Router();
const { getData, insertData } = require("../database/queryBuilder");
const helper = require("../utils/helper");

const TABLENAME = "urls";

router.post("/shorten", (req, res) => {
  const { longUrl } = req.body;

  // API base url endpoint
  const baseUrl = req.protocol + "://" + req.hostname + ":" + 3000;

  //check base url
  if (!validUrl.isUri(baseUrl)) {
    res.status(401).json({ message: "Invalid base URL" });
    return;
  }

  //create unique url code
  const urlCode = helper.generateID((Math.random() * 1000000000000).toFixed(0));

  // check long url
  if (!validUrl.isUri(longUrl)) {
    Logger.warn("Invalid longUrl");
    res.status(401).json({ message: "Invalid longUrl" });
    return;
  }
  try {
    let url = getData(TABLENAME, "longUrl", longUrl);
    if (url.length === 0) {
      const shortUrl = baseUrl + "/" + urlCode;
      const newRecord = {
        urlCode,
        shortUrl,
        longUrl,
        createdAt: Date.now().toString(),
      };
      res
        .status(200)
        .json(
          getData(
            TABLENAME,
            "id",
            insertData(TABLENAME, newRecord, Object.keys(newRecord))
              .lastInsertRowid
          )
        );
      return;
    }
    res.status(200).json(url);
  } catch (err) {
    Logger.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
