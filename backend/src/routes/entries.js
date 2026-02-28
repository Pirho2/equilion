const express = require("express");
const { PrismaClient } = require("@prisma/client");
const auth = require("../middleware/auth");

const prisma = new PrismaClient();
const router = express.Router();

router.use(auth);

router.post("/", async (req, res) => {
  const { mood, note, emotions } = req.body;

  const entry = await prisma.dailyEntry.create({
    data: {
      mood,
      note,
      userId: req.user.id,
      emotions: {
        connect: emotions?.map(id => ({ id })) || []
      }
    }
  });

  res.json(entry);
});

router.get("/me", async (req, res) => {
  const entries = await prisma.dailyEntry.findMany({
    where: { userId: req.user.id },
    include: { emotions: true },
    orderBy: { date: "desc" }
  });

  res.json(entries);
});

router.delete("/:id", async (req, res) => {
  await prisma.dailyEntry.delete({
    where: { id: req.params.id, userId: req.user.id }
  });

  res.json({ ok: true });
});

module.exports = router;