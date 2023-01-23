import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

function Header({ onSearch }) {



    return (
        <div className="w-full flex justify-center bg-green-400 my-5 py-2">
            <div className="flex space-x-3 items-center">
                <label htmlFor="search"><FaSearch size={20} className="" /></label>
                <input type="text" name='search' className='w-60 px-2' onChange={(e) => onSearch(e.target.value)} />
            </div>
        </div>
    )
}

export default Header
