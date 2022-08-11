import { Router } from "express";
import { addCustomer, allCustomers , findCostumer,findCostumerByName, updateCustomer} from "../services/customer.service.js";
const router = Router()

router.get('/', async (req,res) => {

    try{
        let result = await allCustomers()

        res.json({
            message:"All customers",
            customers: result.rows
        })
    }catch(err){
        res.json({
            message: "Error"
        })
    }
})


router.get('/search', async (req,res) => {

    try{
        const name = req.query.name
        let result = await findCostumerByName(name)

        res.json({
            message:"Founded customer",
            customer: result.rows
        })
    }catch(err){
        res.json({
            message: err
        })
    }
})
router.get('/:id', async (req,res) => {

    try{
        const id = req.params.id
        let result = await findCostumer(id)

        res.json({
            message:"Founded customer",
            customer: result.rows
        })
    }catch(err){
        res.json({
            message: "Error for server"
        })
    }
})


router.patch('/:id', async (req,res) => {

    try{
        const id = req.params.id
        const {city} = req.body
        await updateCustomer(city,id)

        res.json({
            message:"City changed",
        })

    }catch(err){
        res.json({
            message: "Error for server"
        })
    }

})

router.post('/', async (req,res) => {

    try{
        const {ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone} = req.body

        await addCustomer(ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone)

        res.json({
            message:"Customer added",
        })

    }catch(err){
        res.json({
            message: "Error for server"
        })
    }

})






export default router
