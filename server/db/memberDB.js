const mongoose = require('mongoose');
const Member = require('../models/member');

export const getMembers = async () => await Member.find({}).sort({seq:1});

export const getMember = async (id) => await Member.findById(id);

export const addMember = (seq,
                          name, 
                          intro, 
                          section, 
                          imgUrl) => {
    let newMember = new Member({
        seq: seq,
        name: name,
        intro: intro,
        section: section,
        imgUrl: imgUrl
    });
    return newMember.save();
}