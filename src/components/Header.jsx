import { Link } from "react-router-dom"
export const Header = () => {

    return (

        <>

            <div className="header">


                <div className="headerLeft">
                    <h1>Zehra Ecer</h1>

                </div>

                <div className="headerRight">


                    <Link to="/">Anasayfa</Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/users">Users</Link>
                </div>


            </div>
        </>
    )
}