const Career = require('../models/career');

exports.getAllCareers = async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addCareer = async (req, res) => {
  try {
    const career = await Career.create(req.body);
    res.status(201).json(career);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
