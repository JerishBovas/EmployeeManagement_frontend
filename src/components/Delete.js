import React, {useEffect} from 'react';
import axios from 'axios';

export default function Delete({stateChanger, id}) {

    useEffect(() => {
        let isYes = window.confirm("Do you really want to delete this Employee?")

        if(isYes){
            axios.delete(`http://20.48.250.4:9090/api/v1/employees/${id}`)
            stateChanger("home")
        }else{
            stateChanger("list")
        }
    }, [])
    return (
        <div>
            
        </div>
    )
}
