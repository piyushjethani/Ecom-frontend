import FilterSidebar from '@/components/FilterSidebar'
import React from 'react'
import { useState,useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
// import { Skeleton } from './ui/skeleton'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import axios from 'axios'
import {toast} from 'sonner'
import { useDispatch } from "react-redux";
import { setProducts } from '@/redux/productSlice'


const Products = () => {
    const [allProducts,setAllProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [priceRange,setPriceRange] = useState([0,999999]);
    const [search,setSearch] = useState("");
    const [category,setCategory] = useState("All");
    const [brand,setBrand] = useState("All");
    const [sortOrder,setSortOrder] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const dispatch = useDispatch();
     

    const getAllProducts = async()=>{
        try{
            setLoading(true)
        
          const res = await axios.get(`http://localhost:6100/api/v1/product/getallproducts`);
          if(res.data.success){
            setAllProducts(res.data.products)
            setFilteredProducts(res.data.products)
            dispatch(setProducts(res.data.products))
          }
          
        } catch (error){
                console.log(error);
                  toast.error(error.response.data.message || "Failed to fetch products")
        }
        finally{
            setLoading(false)
          }
        }

          
  useEffect(() => {
    if (!allProducts || allProducts.length === 0) {
      setFilteredProducts([]);
      return;
    }

    let filtered = [...allProducts];

    if (search.trim() !== "") {
      const lowerCaseSearch = search.toLowerCase();
      filtered = filtered.filter((p) =>
        p.productName?.toLowerCase().includes(lowerCaseSearch)
      );
    }

    if (category !== "All") {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (brand !== "All") {
      filtered = filtered.filter((p) => p.brand === brand);
    }

    filtered = filtered.filter(
      (p) =>
        Number(p.productPrice) >= priceRange[0] &&
        Number(p.productPrice) <= priceRange[1]
    );

    if (sortOrder === "lowToHigh") {
      filtered.sort((a, b) => Number(a.productPrice) - Number(b.productPrice));
    } else if (sortOrder === "highToLow") {
      filtered.sort((a, b) => Number(b.productPrice) - Number(a.productPrice));
    }

    setFilteredProducts(filtered);
  }, [search, category, brand, priceRange, sortOrder, allProducts]);

    useEffect(()=>{
      getAllProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);
    

    


  return (
    <div className='pt-20 pb-10'>
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-7'>
            {/* sidebar */}
            <FilterSidebar 
            allProducts={allProducts} 
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            search={search}
            category={category}
            brand={brand}
            setSearch={setSearch}
            setCategory={setCategory}
            setBrand={setBrand}
             /> 
            {/* main product sectio */}
            <div className='flex flex-col flex-1'>
                <div className='flex justify-end mb-4'>
                 <Select onValueChange={(value) => setSortOrder(value)}>
      <SelectTrigger className="w-[200px] ">
        <SelectValue placeholder="Sort by Price" />
      </SelectTrigger >
      <SelectContent>
        <SelectGroup>
          
          <SelectItem value="lowToHigh"> Price:Low to High </SelectItem>
          <SelectItem value="highToLow">Price:High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7'>
                    {
                        filteredProducts.map((product)=>{
                           return <ProductCard key={product._id} product={product} loading={loading} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products



