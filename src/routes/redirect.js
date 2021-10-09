require("dotenv").config();
const { Logger } = require("@lo-agency/logger");
const express = require("express");
const { getData } = require("../database/queryBuilder");
const router = express.Router();

const TABLE_NAME = "urls";

router.get("/:urlCode", (req, res) => {
  try {
    let url = getData(TABLE_NAME, "urlCode", req.params.urlCode);

    if (url.length === 0) {
      Logger.info(`There is no URL with the urlcode: : ${req.params.urlCode}`);
      res.status(401).json({
        message: `There is no URL with the urlcode:  ${req.params.urlCode}`,
      });
      return;
    }
    res.redirect(url[0].longUrl);
  } catch (err) {
    Logger.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
