import {
    insertBooking,
    getBookTable,
} from "../models/BookTableModel.js";

// create Booking
export const createBooking=(req,res)=>{
    const data = req.body;
    insertBooking(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const showBookTable=(req,res)=>{
    getBookTable((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};