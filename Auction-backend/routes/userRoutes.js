import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
import clientController from '../controllers/clientController.js';
import biddingController from '../controllers/biddingController.js';

// Public Routes
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)
router.post('/register/client', clientController.clientRegistration)
router.post('/login/client', clientController.clientLogin)
router.post('/bid_add', biddingController.bidRegistration)
router.post('/bid_update', biddingController.bid_update)
router.post('/get_all_bid', biddingController.get_all_bid)
router.post('/get_all_bid_seller', biddingController.get_all_bid_seller)
router.post('/updateStatus', biddingController.updateStatus)










export default router