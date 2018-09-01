const mongoose = require('mongoose');
const Tech = require('../models/tech');

export const getTeches = async () => await Tech.find({}).sort({seq:1});

export const getTech = async (id) => await Tech.findById(id);

export const addTech = (seq,
                        name, 
                        url, 
                        foundation, 
                        imgUrl, 
                        type, 
                        desc) => {
    let newTech = new Tech({
        seq: seq,
        name: name,
        url: url,
        foundation: foundation,
        imgUrl: imgUrl,
        type: type,
        desc: desc
    });
    return newTech.save();
}