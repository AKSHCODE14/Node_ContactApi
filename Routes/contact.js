import express from "express";

import {
    getAllContact,
    newContact,
    updateContactById,
    deleteContactById,
    getContactById,
    getContactByUserId
} from "../Controllers/contact.js";

import { isAthenticated } from "../Middlewares/Auth.js";

const router = express.Router();



// new contact
// @api dsc :- creating contact
// @api method :- post
// @api endPoint :- /api/contact/new
router.post("/new",isAthenticated, newContact);

router.get("/",getAllContact);

router.put("/:id",isAthenticated,updateContactById);

router.delete("/:id",isAthenticated,deleteContactById);

router.get("/:id",getContactById);

router.get("/userid/:id",getContactByUserId);


export default router;