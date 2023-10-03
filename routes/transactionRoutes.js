const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactioncontroller");

//router object
const router = express.Router();

//routes
//add transaction POST MEthod
router.post("/add-transaction", addTransaction);
//Edit transaction POST MEthod
router.post("/edit-transaction", editTransaction);
//Delete transaction POST MEthod
router.post("/delete-transaction", deleteTransaction);

//get transactions
router.post("/get-transaction", getAllTransaction);

module.exports = router;