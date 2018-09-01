const mongoose = require('mongoose');
const Timeline = require('../models/timeline');

export const getTimelines = async () => await Timeline.find({}).sort({seq:1});

export const addTimeline = (seq,
                            title, 
                            subtitle, 
                            content, 
                            cDate) => {
    let newTimeline = new Timeline({
        seq: seq,
        title: title,
        subtitle: subtitle,
        content: content,
        cDate: cDate
    });
    return newTimeline.save();
}