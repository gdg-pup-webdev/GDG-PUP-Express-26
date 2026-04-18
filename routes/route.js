import { Router } from "express";
import fs from "fs";
import render from "../render.js";
import path from "path";
import { validateCreate, validateUpdate } from "../middlewares/validateTask.js";

const router = Router();

// Fix __dirname for ES modules

// Path to our JSON storage file

// Helper: read todos from file
function readTodo() {}

// Helper: write todos to file
function writeTodo(todos) {}

// ROUTES

// Index Route

router.get("/", (req, res) => {});

// Crud Operations (Static Routes)

router.get("/todos", (req, res) => {});

router.post("/todos", (req, res) => {});

// Dynamic Routes

router.patch("/todos/:id", (req, res) => {});

router.delete("/todos/:id", (req, res) => {});

export default router;
