
import React, {  useState } from 'react'

const Search = ({setResult}) => {
    const [search, setSearch] = useState('')
    setResult =search
    
    const handelchange = (e) => {
        setSearch(e);
        
    }

   

    return (
        <div className='d-flex justify-content-end m-5'>
            <input type="text" className='me-2'
                value={search}
                onChange={(e)=>handelchange(e.target.value)}
            />
            <button >Search</button>
        </div>
    )
}

export default Search 