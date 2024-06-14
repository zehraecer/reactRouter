import { useContext } from "react"
import { userContext } from "../App"
import { Link } from "react-router-dom"



export const LoginSummary = () => {
    const { form, summaryRef, setForm } = useContext(userContext)


    return (
        <>

            <div ref={summaryRef} className="loginSummary">


                {form.map((user, index) => (
                    <div className="summaryLogin" key={index}>

                        <div>

                            <h5> {user.name}</h5>
                            <h5>{user.email} </h5>
                        </div>

                        <div>
                            <h5>{user.number} </h5>
                            <h5>{user.password} </h5>

                        </div>

                        <div>
                            <Link to="/users">Onayla</Link>

                        </div>

                    </div>

                ))}
            </div>
        </>
    )
}