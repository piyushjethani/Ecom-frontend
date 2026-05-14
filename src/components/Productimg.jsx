// import React, { useState } from 'react'
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'
// // import ImageUpload from './ImageUpload'


// const Productimg = ({ images }) => {
//   const [mainImg , setMainImg] = useState(images[0].url)
//   return (
//     <div className='flex gap-5 w-max'>
//       <div className='gap-5 flex flex-col'>
//         {
//           images.map((img)=>{
//             return <img onClick={()=>setMainImg(img.url)} className='w-20 h-20 object-cover cursor-pointer' src={img.url} alt="" />
//           })
//         }
//       </div>
//       <Zoom>
//       <img src={mainImg} alt="" className='w-[500] border shadow-lg' />
//       </Zoom>
//     </div>
//   )
// }

// export default Productimg


import React, { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Productimg = ({ images }) => {
  const [mainImg, setMainImg] = useState("");

  useEffect(() => {
    if (images && images.length > 0) {
      // adjust this based on your API structure
      setMainImg(images[0]?.url || images[0]);
    }
  }, [images]);

  return (
    <div className="flex gap-5 w-max">

      {/* Thumbnails */}
      <div className="gap-5 flex flex-col">
        {images?.map((img, index) => {
          const imgUrl = img?.url || img; // handle both cases

          return (
            <img
              key={index}
              onClick={() => setMainImg(imgUrl)}
              className={`w-20 h-20 object-cover cursor-pointer border rounded ${
                mainImg === imgUrl ? "border-blue-500" : "border-gray-300"
              }`}
              src={imgUrl}
              alt=""
            />
          );
        })}
      </div>

      {/* Main Image */}
      <Zoom>
        {mainImg ? (
          <img
            src={mainImg}
            alt=""
            className="w-[500px] h-[500px] object-cover border shadow-lg rounded"
          />
        ) : (
          <div className="w-[500px] h-[500px] flex items-center justify-center border">
            Loading...
          </div>
        )}
      </Zoom>
    </div>
  );
};

export default Productimg;