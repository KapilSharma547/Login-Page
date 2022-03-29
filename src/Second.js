import React from "react";
import { useEffect, useState } from "react";
import './login.css';


const Second = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function Good() {

            let kapil = await fetch('https://reqres.in/api/users?page=2')
            // .then((results) => {
            //     console.log(results);
            //     results.json().then((resp) => {
            //         console.log(resp.data)
            //         setData(resp.data)
            //     })
            // }
            // )
            let result = await kapil.json();
            setData(result.data)
            console.log(result.data)

        }
        Good()
    }, [])

    return (
        <>
            <table border='2' style={{float:'right'}}>
                <tbody >
                    <tr >
                        <td >ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Image </td>
                    </tr>

                    {
                        data.map((cur, i) => {

                            let { id, avatar, email, first_name, last_name } = cur;
                            return (
                                <tr key={i}>
                                    <td> {id} </td>
                                    <td> {first_name} </td>
                                    <td> {last_name} </td>
                                    <td> {email} </td>
                                    <td><img src={avatar} alt={first_name} /> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>

    )


}

export default Second;