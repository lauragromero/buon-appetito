import React from 'react';

const Search =(props)=>{
 const handleValueInput=(event)=>{
     props.handleValueInput(event.target.value)
 }

return(
        <form>
            <input onChange={handleValueInput} className="form__search" type="text" name="search" value={props.valueInput} placeholder="Buscar receta..."/>
        </form>
    )

}


export default Search;