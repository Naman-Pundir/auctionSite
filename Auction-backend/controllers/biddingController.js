import biddingModel from '../models/bidding.js'

class biddingController {
  static bidRegistration = async (req, res) => {
    const { name, client_email, price, time, info } = req.body
          console.log(time);
          var currDate = new Date();
          var timeLeft = Math.abs(time - currDate.getTime())/36e5;
          console.log(timeLeft);  
          try {
          
            const doc = new biddingModel({
              item_name: name,
              seller_email: client_email,
              start_price: price,
              end_time:time,
              item_info:info,
              current_bid:"0",
              status:"Unsold"
              
            })
            await doc.save()
            res.status(201).send({ "status": "success", "message": "Register Success" })
          } catch (error) {
            console.log(error)
            res.send({ "status": "failed", "message": "Unable to Register" })
          }
       
   
  }

  static bid_update = async (req, res) => {
    try {
      const { bid_id,current_bid, client_email } = req.body
      if (bid_id ) {
        const bid = await biddingModel.findOne({ _id: bid_id })
        if (bid != null) {
            await biddingModel.findByIdAndUpdate(bid_id, { $set: { current_bid: current_bid, client_email: client_email} })
            res.send({ "status": "success", "message": " bid_update" })

        }}
        
    } catch (error) {
      console.log(error)
      res.send({ "status": "failed", "message": "Unable to bid" })
    }
  }

  static updateStatus = async (req,res) => {
    try {
      const { bid_id } = req.body
      if (bid_id ) {
        const bid = await biddingModel.findOne({ _id: bid_id })
        if (bid != null) {
            console.log(bid.current_bid);
            if(bid.current_bid == "0"){
              await biddingModel.findByIdAndUpdate(bid_id, { $set: { status: "Unsold and Timeout"} })
            }else{
              await biddingModel.findByIdAndUpdate(bid_id, { $set: { status: "Sold"} })
            }
            res.send({ "status": "success", "message": "status_update" })

        }}
        
    } catch (error) {
      console.log(error)
      res.send({ "status": "failed", "message": "Unable to Update" })
    }
  }

  static get_all_bid = async (req,res) => {
    try {
          const all_bid=await biddingModel.find({})
          res.send({"bids" : all_bid})
        
    } catch (error) {
      console.log(error)
      res.send({ "status": "failed", "message": "Unable to bid" ,})
    }
  }

  static get_all_bid_seller = async (req,res) => {
    const {email} = req.body
    try {
          const all_bid_seller=await biddingModel.find({seller_email: email})
          res.send({"bids" : all_bid_seller})
        
    } catch (error) {
      console.log(error)
      res.send({ "status": "failed", "message": "Unable to bid" ,})
    }
  }

}

export default biddingController