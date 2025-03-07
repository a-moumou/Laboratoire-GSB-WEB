import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "/src/context/ShopContext";
import Title from '/src/components/Title';
import SVGcheck from '/src/assets/svg/check-svgrepo-com.svg'
import styles from "./bill.module.css"


const BillPage = () => {
    const navigate = useNavigate()
    const { delivery_fee } = useContext(ShopContext)
    const [ userCommand, setUserCommand  ] = useState(null)

    const getCommandUserFromBDD = async () => {
        const response = await axios.get(`http://localhost:3000/api/commands/users/2`)
        setUserCommand(response.data.sort((a,b) => 
            new Date(b.created_at).getDate() - new Date(a.created_at).getDate()
    ))
    }

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token"))
        if(!token){
            navigate("/")
        }else{
            getCommandUserFromBDD()
            console.log(userCommand)
        }
    },[])

    return (
                <>
                    <div className='text-2xl'>
                        <Title text1={'MY'} text2={'ORDERS'} />
                    </div>
                    <table className={styles.tables}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>total</th>
                                <th>Delivered</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userCommand && userCommand.length > 0 && userCommand.map((item, index)=> {
                                    const date = new Date(item.created_at)
                                    const day = date.getDate().toString().length < 2 ? "0" + date.getDate() : date.getDate()
                                    const month = date.getMonth() + 1
                                    const year = date.getFullYear()
                                    return (
                                        <tr key={index}
                                            style={{ backgroundColor: index % 2 == 0 ? "#cccccc" : null} }
                                            onClick={()=> navigate(`/orders/${item.id}`)}
                                        >
                                            <td>Command &nbsp;&nbsp; {index + 1 }</td>
                                            <td>{ delivery_fee +" "+ item.total}</td>
                                            <td>{item.delivery_id && (<img src={SVGcheck} width={30} height={30} />)}</td>
                                            <td>{`${day}/${month}/${year}`}</td>
                                        </tr>
                                    )
                            })
                            }
                        </tbody>
                    </table>
                </>
    );
}
 
export default BillPage;