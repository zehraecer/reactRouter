import { useContext } from "react"
import { userContext } from "../App"
import { Link } from "react-router-dom"



export const LoginSummary = () => {
    const { form, summaryRef } = useContext(userContext)


    return (
        <>

            <div ref={summaryRef} className="loginSummary">

                {form.map((user, index) => (
                    <div key={index}>

                        <h5>Ad-Soyad: {user.name}</h5>
                        <h5>E-posta :{user.email} </h5>
                        <h5>Number :{user.number} </h5>
                        <h5>Password :{user.password} </h5>

                        <Link to="/users">Onayla</Link>
                    </div>

                ))}
            </div>
        </>
    )
}