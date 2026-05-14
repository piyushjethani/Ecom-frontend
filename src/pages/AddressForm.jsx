// import { addAddress, deleteAddress, setSelectedAddress } from '@/redux/productSlice'

// // import { div } from 'framer-motion/client'
// import React from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { useState } from 'react'
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Button } from '@/components/ui/button'
// import axios from 'axios'
// import {toast} from 'sonner'
// import { Separator } from 'radix-ui'
// import { useNavigate } from 'react-router-dom'
// import { option } from 'framer-motion/client'

// const AddressForm = () => {

//     const [formdata , setFormData] = useState({
//         fullName:"",
//         phone:"",
//         email:"",
//         address:"",
//         city:"",
//         state:"",
//         zip:"",
//         country:"",
//     })

//     const {cart,address,selectedAddress}  = useSelector((store)=>store.product)
//     const [showForm,setShowForm] = useState(address?.length>0 ? false : true)
//     const disPatch = useDispatch()
//     const navigate = useNavigate()

//     const handleChange = (e) =>{
//         setFormData({...formdata,[e.target.name]:e.target.value})
//         setShowForm(false)
//     }

//     const handleSave = ()=>{
//         disPatch(addAddress(formdata))
//     }

//      const subtotal = cart.totalPrice
//      const shipping = subtotal > 50 ? 0 :10;
//      const tax = parseFloat((subtotal * 0.05).toFixed(2))
//      const total = subtotal + shipping + tax ;
//    const handlePayment = async()=>{
//     const accessToken = localStorage.getItem("accessToken")
//     try{
//      const {data} = await axios.post(`${import.meta.env.VITE_URL}/api/v1/orders/create-order`,{
//         product:cart?.items?.map(items=>({
//             productId : items.productId._id,
//             quality:items.quality
//         })),
//         tax,
//         shipping,
//         amount:total,
//         currency:"INR"
//      },{
//         headers:{
//             Authorization:`Bearer ${accessToken}`
//         }
//      })

//      if(data.success) return toast.error("something went wrong")

//         console.log("razorpay data :",data);
//         const options = {
//        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//   amount: data.order.amount,
//   currency: data.order.currency,
//   order_id: data.order.id,
//   name: "EShop",
// description: "Order Payment",
// handler: async function (response) {
//     try{
//      const verifyres = await axios.post(`${import.meta.env.VITE_URL}/api/v1/orders/verify-payment`,
//         response,{
//             headers :{Authorization : `Bearer ${accessToken}`}
//         }
//         if (verifyRes.data.success) {
//   toast.success("✅ Payment Successfull!")
//   dispatch(setCart({ items: [], totalPrice: 0 }))
//   navigate("/order-success")
//         } else {
//             toast.error("payment verification failed")
//         }
//      )
//     } catch(error){
//       toast.error("Error verifing payment ")
//     }
// },
// modal:{
//     ondismiss:async function (){
//         // handle user closing the popup
//         await axios.post(`${import.meta.env.VITE_URL}/api/v1/orders/verify-payment`,{
//             razorpay_order_id:data.order.id,
//             paymentFailed:true
//         },{
//             headers:{Authorization:`Bearer ${accessToken}`}
//         }),
//         toast.error("payment cancelled or failed")
//     }
//     },
//     prefill:{
//         name:formData.fullname,
//         email:formdata.email,
//         contact:formdata.phone
//     },
//     theme:{color:"#bfdbfe"}
// };
// const rgp = new window.Razorpay(options)
// // list for payment faileur
// rzp.on("payment .failed",async function(response){
//     await axios.post(`${import.meta.env.VITE_URL}/api/v1/orders/verify-payment`,{
//          razorpay_order_id:data.order.id,
//             paymentFailed:true
//     },{
//         headers:{Authorization:`Bearer ${accessToken}`}
//     })
//     toast.error("payment failed. Please try again")

//  })
//  rzp.open()
//     } catch(error){
//         console.log(error)
//         toast.error("Something went wrong while processing payment")

//     }
//    }

//   return (
//     <div className='max-w-7xl mx-auto grid place-items-center p-10'>
//         <div className='grid grid-col-2 items-start gap-20 mt-10 max-w-7xl mx-auto'>
//             <div className='space-y-4 p-6 bg-white'>
//                 {
//                     showForm ? (
//                     <>
//                     <div>
//                         <Label htmlFor="fullName">Full Name</Label>
//                         <Input 
//                         id="fullName"
//                         name="fullName"
//                         required
//                         placeholder="Jhon Doe"
//                         value={formdata.fullName}
//                         onChange={handleChange}  />
                    
//                     </div>
//                      <div>
//                         <Label htmlFor="phone">Phone</Label>
//                         <Input 
//                         id="phone"
//                         name="phone"
//                         required
//                         placeholder="+91 56789-90900"
//                         value={formdata.phone}
//                         onChange={handleChange}  />
                    
//                     </div>
//                      <div>
//                         <Label htmlFor="email">Email</Label>
//                         <Input 
//                         id="email"
//                         name="email"
//                         required
//                         placeholder="johnj2254@gmail.com"
//                         value={formdata.email}
//                         onChange={handleChange}  />
                    
//                     </div>
//                      <div>
//                         <Label htmlFor="address">Address</Label>
//                         <Input 
//                         id="address"
//                         name="address"
//                         required
//                         placeholder="`123 Street, Area"
//                         value={formdata.address}
//                         onChange={handleChange}  />
                    
//                     </div>
//                     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                          <div>
//                         <Label htmlFor="city">City</Label>
//                         <Input 
//                         id="city"
//                         name="city"
//                         required
//                         placeholder="Jaipur"
//                         value={formdata.city}
//                         onChange={handleChange}  />
                    
//                     </div>
//                     <div>
//                         <Label htmlFor="state">State</Label>
//                         <Input 
//                         id="state"
//                         name="state"
//                         required
//                         placeholder="Rajasthan"
//                         value={formdata.state}
//                         onChange={handleChange}  />
                    
//                     </div>

//                     </div>

//                       <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                          <div>
//                         <Label htmlFor="zip">zip Code</Label>
//                         <Input 
//                         id="zip"
//                         name="zip"
//                         required
//                         placeholder="543232"
//                         value={formdata.zip}
//                         onChange={handleChange}  />
                    
//                     </div>
//                     <div>
//                         <Label htmlFor="country">Country</Label>
//                         <Input 
//                         id="country"
//                         name="country"
//                         required
//                         placeholder="India"
//                         value={formdata.country}
//                         onChange={handleChange}  />
                    
//                     </div>

//                     </div>
//                     <Button onClick={handleSave} className='w-full'>Save & Continue</Button>

                    
//                     </>
//                     ):(
//                         <div className='space-y-4'>
//                             <h2 className='text-lg font-semibold' > Saved Address</h2>
//                             {
//                                 addresses.map((addr,index)=>{
//                                     return <div 
//                                     key={index} 
//                                     onClick={()=>disPatch(setSelectedAddress(index))}
//                                      className={`border p-4 rounded-md cursor-pointer relative ${selectedAddress === index ? "border-blue-600 bg-blue-50":"border-gray-300"}`}>
//                                         <p className='font-medium'>{addr.fullName}</p>
//                                         <p>{addr.phone}</p>
//                                         <p>{addr.email}</p>
//                                         <p>{addr.address},{addr.city},{addr.state},{addr.zip},{addr.country},</p>
//                                         <button onClick={(e)=>disPatch(deleteAddress(index))} className='absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm'>Delete</button>
//                                     </div>
//                                 })
//                             }

//                         <Button variant='outline' className='w-full' onClick={()=> setShowForm(true)} > + Add New Address</Button>
//                         <Button onClick={handlePayment} disabled={selectedAddress===null} className='w-full bg-blue-600'>Proceed To Checkout</Button>
//                         </div>
//                     )
//                 }

//                  {/* right side order summary */}

//                  <Card className="w-[400px]">
//                     <CardHeader>
//                     <CardTitle>Order Summary </CardTitle>
//                         </CardHeader>
//                         <CardContent className='space-y-4'>
//                             <div className='flex justify-between'>
//                                 <span>Subtotal({cart.items.length}) items</span>
//                                 <span>₹{subtotal.toLocaleString("en-IN")}</span>
//                             </div>
                                 
//                              <div className='flex justify-between'>
//                                 <span>Shipping</span>
//                                 <span>₹{shipping}</span>
//                             </div>
//                                                         <div className='flex justify-between'>
//                                 <span>Tax</span>
//                                 <span>₹{subtotal.toLocaleString("en-IN")}</span>
//                             </div>
                                  
//                             <Separator/>
//                                                      <div className='flex justify-between font-bold text-lg'>
//                                 <span>Total</span>
//                                 <span>₹{total}</span>
//                             </div>
//                             <div className='text-sm test-muted-doreground pt-4'>
//                                 <p>* Free shipping on order over 299</p>
//                                 <p>* 30-days return policy</p>
//                                 <p>* Secure checkout with SSL encryption</p>
                                
//                             </div>
//                         </CardContent>
//                         </Card>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default AddressForm




import {
  addAddress,
  deleteAddress,
  setSelectedAddress,
  setCart,
} from "@/redux/productSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const [formdata, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const { cart, addresses, selectedAddress } = useSelector(
    (store) => store.product
  );

  const [showForm, setShowForm] = useState(
    addresses?.length > 0 ? false : true
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // 🔹 Save address with validation
  const handleSave = () => {
    // ✅ Validate all fields are filled
    if (
      !formdata.fullName ||
      !formdata.phone ||
      !formdata.email ||
      !formdata.address ||
      !formdata.city ||
      !formdata.state ||
      !formdata.zip ||
      !formdata.country
    ) {
      toast.error("❌ Please fill in all fields");
      return;
    }

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formdata.email)) {
      toast.error("❌ Please enter a valid email address");
      return;
    }

    // ✅ Validate phone (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formdata.phone.replace(/\D/g, ""))) {
      toast.error("❌ Please enter a valid 10-digit phone number");
      return;
    }

    // ✅ Validate zip code (5-10 digits)
    if (!/^[0-9]{5,10}$/.test(formdata.zip)) {
      toast.error("❌ Please enter a valid zip code");
      return;
    }

    dispatch(addAddress(formdata));
    const newAddressIndex = addresses?.length ?? 0;
    dispatch(setSelectedAddress(newAddressIndex));
    toast.success("✅ Address saved successfully!");
    setShowForm(false);

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    });
  };

  // 🔹 Price calculation
  const subtotal = cart?.totalPrice || 0;
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = parseFloat((subtotal * 0.05).toFixed(2));
  const total = subtotal + shipping + tax;

  // 🔥 PAYMENT FUNCTION
  const handlePayment = async () => {
    if (selectedAddress === null || selectedAddress === undefined) {
      toast.error("Please select an address before checkout");
      return;
    }

    if (!cart?.items?.length) {
      toast.error("Your cart is empty");
      return;
    }

    const accessToken = localStorage.getItem("accessToken");

    try {
      // 🧾 Create order
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/api/v1/orders/create-order`,
        {
          products: cart?.items?.map((item) => ({
            productid: item.productId._id,
            quantity: item.quantity,
          })),
          tax,
          shipping,
          amount: total,
          currency: "INR",
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!data.success) {
        return toast.error("Something went wrong");
      }

      // 💳 Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        order_id: data.order.id,
        name: "EShop",
        description: "Order Payment",

        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              `${import.meta.env.VITE_URL}/api/v1/orders/verify-payment`,
              response,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );

            if (verifyRes.data.success) {
              toast.success("✅ Payment Successful!");
              dispatch(setCart({ items: [], totalPrice: 0 }));
              navigate("/order-success");
            } else {
              toast.error("Payment verification failed");
            }
          } catch (error) {
            toast.error("Error verifying payment");
          }
        },

        modal: {
          ondismiss: async function () {
            await axios.post(
              `${import.meta.env.VITE_URL}/api/v1/orders/verify-payment`,
              {
                razorpay_order_id: data.order.id,
                paymentFailed: true,
              },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            toast.error("Payment cancelled");
          },
        },

        prefill: {
          name: formdata.fullName,
          email: formdata.email,
          contact: formdata.phone,
        },

        theme: { color: "#3b82f6" }, // blue theme
      };

      const rzp = new window.Razorpay(options);

      // ❌ Payment failed listener
      rzp.on("payment.failed", async function () {
        await axios.post(
          `${import.meta.env.VITE_URL}/api/v1/orders/verify-payment`,
          {
            razorpay_order_id: data.order.id,
            paymentFailed: true,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        toast.error("Payment failed. Try again.");
      });

      rzp.open();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong during payment");
    }
  };

  return (
    <div className="max-w-7xl mx-auto grid place-items-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-4 p-6 bg-white rounded-xl shadow">

          {showForm ? (
            <>
              <Label>Full Name</Label>
              <Input name="fullName" value={formdata.fullName} onChange={handleChange} />

              <Label>Phone</Label>
              <Input name="phone" value={formdata.phone} onChange={handleChange} />

              <Label>Email</Label>
              <Input name="email" value={formdata.email} onChange={handleChange} />

              <Label>Address</Label>
              <Input name="address" value={formdata.address} onChange={handleChange} />

              <Label>City</Label>
              <Input name="city" value={formdata.city} onChange={handleChange} />

              <Label>State</Label>
              <Input name="state" value={formdata.state} onChange={handleChange} />

              <Label>Zip</Label>
              <Input name="zip" value={formdata.zip} onChange={handleChange} />

              <Label>Country</Label>
              <Input name="country" value={formdata.country} onChange={handleChange} />

              <Button onClick={handleSave} className="w-full">
                Save & Continue
              </Button>
            </>
          ) : (
            <div className="space-y-4">
              <h2 className="font-semibold">Saved Address</h2>

              {addresses?.map((addr, index) => (
                <div
                  key={index}
                  onClick={() => dispatch(setSelectedAddress(index))}
                  className={`border p-3 rounded cursor-pointer ${
                    selectedAddress === index
                      ? "border-blue-500 bg-blue-50"
                      : ""
                  }`}
                >
                  <p>{addr.fullName}</p>
                  <p>{addr.phone}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteAddress(index));
                    }}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              ))}

              <Button onClick={() => setShowForm(true)}>+ Add New</Button>

              <Button
                onClick={handlePayment}
                disabled={selectedAddress === null || !cart?.items?.length}
                className="w-full bg-blue-600"
              >
                Proceed to Payment
              </Button>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 bg-white rounded-xl shadow space-y-4">
          <h2 className="font-bold text-lg">Order Summary</h2>

          <div className="flex justify-between">
            <span>Subtotal ({cart?.items?.length || 0} items)</span>
            <span>₹{subtotal?.toLocaleString("en-IN") || "0"}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹{shipping?.toLocaleString("en-IN") || "0"}</span>
          </div>

          <div className="flex justify-between">
            <span>Tax (5%)</span>
            <span>₹{tax?.toLocaleString("en-IN") || "0"}</span>
          </div>

          <Separator />

          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{total?.toLocaleString("en-IN") || "0"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;