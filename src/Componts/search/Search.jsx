import React, { useEffect, useState } from 'react'

const Search = ({props}) => {
    const [search, setSearch] = useState('')


    const handelchange = (e) => {
        setSearch(e.target.value)
    }

   

    return (
        <div className='d-flex justify-content-end m-5'>
            <input type="text" className='me-2'
                value={search}
                onChange={(e)=>{handelchange(e)}}
            />
            <button >Search</button>
        </div>
    )
}

export default Search