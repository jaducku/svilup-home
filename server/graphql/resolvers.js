import { getTeches, getTech, addTech } from "../db/techDB";
import { getMembers, getMember, addMember } from "../db/memberDB";
import { getTimelines, addTimeline } from "../db/timelineDB";

const mongoose = require('mongoose');

const resolvers = {
    Query:{
        teches: async () => await getTeches(),
        tech: async (_,{id}) => await getTech(id),
        members: async () => await getMembers(),
        member: async (_,{id}) => await getMember(id),
        timelines: async () => await getTimelines(),
    },
    Mutation:{
        addTech : async (_,{seq, name, url, foundation, imgUrl, type, desc}) => await addTech(seq, name, url, foundation, imgUrl, type, desc),
        addMember : async (_,{seq, name, intro, section, imgUrl}) => await addMember(seq,name,intro,section,imgUrl),
        addTimeline : async (_,{seq, title, subtitle, content, cDate}) => await addTimeline(seq, title,subtitle,content,cDate)
    }
};

export default resolvers;