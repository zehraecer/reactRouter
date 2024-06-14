import { useContext, useState } from "react"
import { userContext } from "../App"
import { LoginSummary } from "./loginSummary"
import { TextField, Box, Button } from "@mui/material"

export const Login = () => {
    const { formRef, form, setForm, loginRef, summaryRef } = useContext(userContext)
    // const [isSubmited, setIsSubmited] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const formObj = Object.fromEntries(formData.entries());
        setForm([formObj])
        loginRef.current.style.display = "none"
        summaryRef.current.style.display = "block"
        // setIsSubmited(true)

    }

    return (
        <>
            <div className="formSection" ref={loginRef}>

                <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} ref={formRef} onSubmit={handleSubmit} >

                    <div className="formElements">
                        <div className="leftForm">

                            <TextField id="outlined-basic" name="name" label="name surname" variant="outlined" />
                            <TextField id="outlined-basic" name="email" label="email" variant="outlined" />

                        </div>

                        <div className="rightForm">

                            <TextField id="outlined-basic" name="number" label="number" variant="outlined" />
                            <TextField id="outlined-basic" name="password" label="password" variant="outlined" />

                        </div>

                    </div>


                    <div className="buttonForm">

                        <Button type="submit" variant="contained" color="primary">Gönder</Button>
                    </div>


                </form>

            </div>

            {/* <div>
                {isSubmited && <LoginSummary />}

            </div> */}

        </>
    )
}