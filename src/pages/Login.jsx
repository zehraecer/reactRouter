import { useContext, useState } from "react"
import { userContext } from "../App"
import { LoginSummary } from "./loginSummary"

export const Login = () => {
    const { formRef, form, setForm, loginRef, summaryRef } = useContext(userContext)
    // const [isSubmited, setIsSubmited] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(formRef.current)
        const formObj = Object.fromEntries(formData.entries());
        setForm([...form, formObj])
        loginRef.current.style.display = "none"
        summaryRef.current.style.display = "block"
        // setIsSubmited(true)


    }

    return (
        <>
            <div className="formSection" ref={loginRef}>

                <form style={{ display: "flex", flexDirection: "column" }} ref={formRef} onSubmit={handleSubmit} >

                    <input type="text" placeholder="name surname" name="name" />
                    <input type="email" placeholder="email" name="email" id="" />
                    <input type="number" placeholder="number" name="number" />
                    <input type="password" placeholder="password" name="password" id="" />

                    <button type="submit" >Gönder</button>

                </form>
            </div>

            {/* <div>
                {isSubmited && <LoginSummary />}

            </div> */}

        </>
    )
}