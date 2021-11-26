const db = require("./connection");
const { User, Project, Vehicle } = require("../models");

db.once("open", async () => {
  
  await Vehicle.deleteMany();
  const vehicle = await Vehicle.create({
    type: "Car",
    year: 1999,
    make: "Volkswagen",
    model: "Beetle",
  });

  await Project.deleteMany();
  await Project.insertMany([
    {
      name: "Devins first project car",
      description: "Some test info to check my backend",
      budget: 10000,
      timeSpent: 40,
      vehicle: vehicle,
    }
  ]);

  console.log("projects seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
