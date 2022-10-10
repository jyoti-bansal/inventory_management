const router=require('express').Router();
const Cart=require("../models/Cart");

//Create cart

router.post("/",async(req,res)=>{
    const newCart=new Cart(req.body);

    try{
        const savedCart=await newCart.save();
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err);
    }
})

//update cart
router.put('/:id',async(req,res)=>{
    try{
        const updatedCart=await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new:true}
        );
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json(err);
    }
});

//get cart
router.get('/find/:id',async(req,res)=>{
    try{
        const cart=await Cart.findById(req.params.id);
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err);
    }
})

//get all cart
router.get("/",async(req,res)=>{
    const qNew=req.query.new;
    const qCategory=req.query.qCategory;
    try{
        let carts;

        if(qNew){
            carts=await Cart.find().sort({createdAt:-1}).limit(1);
        }else if(qCategory){
            carts=await Cart.find({
                categories:{
                    $in:[qCategory], 
                },
            });
        }else{
            carts=await Cart.find();
        }
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;