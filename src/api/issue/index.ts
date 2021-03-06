import express from "express";
// import { upload } from "../../modules/upload";

const upload = require("../../modules/upload");
const router = express.Router();

// router.post("", require("./issuePOST"));
router.post(
  "",
  upload.fields([
    { name: "img1", maxCount: 1 },
    { name: "img2", maxCount: 1 },
    { name: "img3", maxCount: 1 },
    { name: "img4", maxCount: 1 },
    { name: "img5", maxCount: 1 },
  ]),
  require("./issuePOST")
);

router.get("/date", require("./issueDateGET"));
router.get("/:issueId", require("./issueDetailGET"));
router.get("", require("./issueGET"));
router.post("/:issueId/comment", require("./issueCommentPOST"));

module.exports = router;
