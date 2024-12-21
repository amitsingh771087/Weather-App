import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import {geoApiOptions , GEO_API_URL} from '../../api'

const Search = ({onSearchChange})=>{

    const [search , setSearch] = useState(null)

    const loadOptions= async (inputValue)=>{
        
            try {
                const response = await fetch(`${GEO_API_URL}/cities?minPopulation = 1000000&namePrefix=${inputValue}`, geoApiOptions);
                const result = await response.json();
                return {
                    options: result.data.map((city) => ({
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} , ${city.countryCode}`, 
                    })),
                };
                
            } catch (error) {
                console.error(error);
                throw error;
            }
        
    }






    const handleOnChange = (searchData)=>{
        setSearch(searchData);
        onSearchChange(searchData);

    }

    return <AsyncPaginate 
                placeholder = "Search for City"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}

    
        />
}

export default Search;