import { Link } from "react-router-dom"
export const Header = () => {

    return (

        <>

            <div style={{ display: "flex", gap: "15px" }}>

                <Link to="/">Anasayfa</Link>
                <Link to="/login">Log In</Link>
                <Link to="/users">Users</Link>

            </div>
        </>
    )
}