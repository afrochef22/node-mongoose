const mongoose = require("mongoose");
const Campsite = require("./models/campsite");

const url = "mongodb://localhost:27017/nucampsite";
const connect = mongoose.connect(url, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

connect.then(() => {
	console.log("Connnected correctly to server");

	Campsite.create({
		name: "React Lake Campground",
		description: "test",
	})
		.then((campsite) => {
			console.log(campsite);
			return Campsite.find();
		})
		.then((campsite) => {
			console.log(campsite);
			return Campsite.deleteMany();
		})
		.then(() => {
			return mongoose.connection.close();
		})
		.catch((err) => {
			console.log(err);
			mongoose.connection.close;
		});
});
