const dotenv = require("dotenv"),
  { Logger } = require("@lo-agency/logger"),
  validUrl = require("valid-url"),
  express = require("express"),
  router = express.Router(),
  { getData, insertData } = require("../database/queryBuilder"),
  helper = require("../utils/helper")
;

dotenv.config();

const TABLE_NAME = "urls";

router.post("/shorten", (req, res) => {
  const { longUrl } = req.body;

  // check long url
  if (!validUrl.isUri(longUrl)) {
    Logger.warn("Invalid longUrl");
    res.status(401).json({ message: "Invalid longUrl" });
    return;
  }


  // API base url endpoint
  const baseUrl = req.protocol + "://" + req.hostname;

  //check base url
  if (!validUrl.isUri(baseUrl)) {
    res.status(401).json({ message: "Invalid base URL" });
    return;
  }

  //create unique url code
  const urlCode = helper.generateID((Math.random() * 1000000000000).toFixed(0));

  try {
    let url = getData(TABLE_NAME, "longUrl", longUrl);
    if (url.length === 0) {
      const shortUrl = `${baseUrl}/${urlCode}`;
      const newRecord = {
        urlCode,
        shortUrl,
        longUrl,
        createdAt: new Date().toString()
      };
      res
        .status(201)
        .json(
          getData(
            TABLE_NAME,
            "id",
            insertData(TABLE_NAME, newRecord, Object.keys(newRecord))
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