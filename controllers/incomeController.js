import Income from "../models/Income.js";
import Expense from "../models/Expense.js";

export const addIncome = async (req, res) => {
    try {
        const income = await Income.create({ ...req.body, user: req.user._id });
        res.status(201).json(income);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getIncomes = async (req, res) => {
    const incomes = await Income.find({ user: req.user._id }).sort({ date: -1 });
    res.json(incomes);
};

export const getSummary = async (req, res) => {
    const incomes = await Income.find({ user: req.user._id });
    const expenses = await Expense.find({ user: req.user._id });

    const totalIncome = incomes.reduce((acc, i) => acc + i.amount, 0);
    const totalExpense = expenses.reduce((acc, e) => acc + e.amount, 0);

    res.json({
        totalIncome,
        totalExpense,
        balance: totalIncome - totalExpense
    });
};
