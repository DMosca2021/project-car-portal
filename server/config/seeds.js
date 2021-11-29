const db = require("./connection");
const { User, Project, Vehicle } = require("../models");

db.once("open", async () => {
  await Vehicle.deleteMany();
  const vehicle = await Vehicle.create([
    {
      type: "Car",
      year: 1999,
      make: "Volkswagen",
      model: "Beetle",
    },
    {
      type: "Motorcycle",
      year: 1979,
      make: "BMW",
      model: "r100rs",
    },
    {
      type: "Boat",
      year: 1931,
      make: "Hacker Boat Company",
      model: "Lockpat II",
    },
    {
      type: "Truck",
      year: 1969,
      make: "Volkswagen",
      model: "Beetle",
    }
  ]);

  console.log("vehicles Seeded");

  await Project.deleteMany();
  const projects = await Project.insertMany([
    {
      name: "Devins first project car",
      description: "Some test info to check my backend",
      budget: 10000,
      timeSpent: 40,
      vehicle: vehicle[0],
    },
    {
      name: "Devins second project car",
      description: "Some test info to check my backend",
      budget: 11000,
      timeSpent: 40,
      vehicle: vehicle[1],
    },
    {
      name: "Devins third project car",
      description: "Some test info to check my backend",
      budget: 12000,
      timeSpent: 40,
      vehicle: vehicle[2],
    },
    {
      name: "Devins fourth project car",
      description: "Some test info to check my backend",
      budget: 13000,
      timeSpent: 40,
      vehicle: vehicle[3],
    },
  ]);

  console.log("projects seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
    project: projects,
  });

  console.log("users seeded");

  process.exit();
});
