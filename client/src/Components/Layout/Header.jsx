import React, { useState } from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { productData } from '../../static/data'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { BiMenuAltLeft } from 'react-icons/bi'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState(null)
  const [active, setActive] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData && productData.filter((product) => product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  };

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden lg:flex lg:h-[50px] lg:my-[20px] items-center justify-between">

          <div className="">
            <Link to='/'>
              <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="" />
            </Link>

          </div>

          {/* search box */}

          <div className="w-[50%] relative">
            <input type="text"
              placeholder='Search Product'
              value={searchTerm}
              onChange={handleSearchChange}
              className='h-[40px] w-full px-2 border-[#ebf12e] border-[2px] rounded-md'
            />
            <AiOutlineSearch size={30} className='absolute right-2 top-1.5 cursor-pointer' />

            {searchData && searchData.length !== 0 ?
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {
                  searchData && searchData.map((i, index) => {
                    const d = i.name;
                    const Product_name = d.replace(/\s+/g, "-")
                    return (
                      <Link to={`/product/${Product_name}`}>
                        <div className="w-full flex items-start py-3">
                          <img src={i.image_Url[0].url} alt=""
                            className='w-[40px] h-[40px] mr-[10px]' />
                          <h1>{i.name} </h1>
                        </div>
                      </Link>
                    )
                  })
                }
              </div>
              :
              null
            }
          </div>

          <div className={`${styles.button}`}>
            <Link to='/seller' > 
            <h1 className='text-[#ebf12e] flex items-center '>
            Become Seller <IoIosArrowForward className='ml-1'/>
            </h1>
            </Link>

          </div>
        </div>
      </div>

<div className={`${active === true ? 'shadow-sm fixed top-0 left-0' : null} hidden lg:flex items-center justify-between w-full bg-[#bec408] h-[70px]`} 
>
  <div className={`${styles.section} ${styles.normalFlex} relative justify-between`}>

    {/* Categories */}
    
    <div className="">
      <div className="relative h-[60px] mt-[10px] w-[250px] 1000px:block">
        <BiMenuAltLeft 
        size={30} className='absolute top-3 left-2'/>
        <button className='h-[100%] w-full flex justify-between items-center pl-10 bg-white font-Poppins font-[500] text-lg select-none rounded-t-md'>
All Categories
        </button>
        <IoIosArrowDown size={20} className='absolute right-2 top-4 cursor-pointer'/>
      </div>
    </div>
  </div>

</div>
    </>
  )
}

export default Header;