const express = require("express");
const { protect } = require('../middleware/authMiddleware');
const {
  makeTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

router.post("/", protect, makeTransaction);
router.get("/", protect, getTransaction);
router.put("/:id", protect, updateTransaction);
router.delete("/:id", protect, deleteTransaction);

module.exports = router;
