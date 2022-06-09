const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
	cloud_name:CLOUD_NAME ,
	api_key:  CLOUD_SECRET,
	api_secret: SECRET_KEY, 
	secure: true,
});

module.exports = cloudinary;
