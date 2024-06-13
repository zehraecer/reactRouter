import { useContext } from "react"
import { userContext } from "../App"

export const Users = () => {
    const { form, summaryRef } = useContext(userContext)


    return (
        <>
            <h4>ben kullanıcılar sayfasıyım</h4>
            <div>
                {form.map((user, index) => {
                    return (
                        <span key={index}>kullanıcılar: {user.name}</span>
                    )
                })}
            </div>
        </>
    )
}