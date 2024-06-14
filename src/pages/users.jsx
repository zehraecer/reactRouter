import { useContext } from "react"
import { userContext } from "../App"

export const Users = () => {
    const { form } = useContext(userContext)

    console.log(form);
    return (
        <>
            <h4>KULLANICILAR</h4>
            <div >
                {form.map((user, index) => {
                    return (

                        <div key={index} style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center" }}>


                            <span > <span style={{ fontWeight: "bold" }}>Adı ve Soyadı:</span>  {user.name} </span>
                            <span >   <span style={{ fontWeight: "bold" }}>eposta:</span>  {user.email}</span>

                        </div>
                    )
                })}
            </div>
        </>
    )
}