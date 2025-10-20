import './login.css'
import { useTranslation } from "react-i18next";
import { useState } from 'react';

function Login() {

  const { i18n: {changeLanguage, language} } = useTranslation();
 const [currentLanguage, setCurrentLanguage] = useState(language)
 const handleChangeLanguage = () => {
   const newLanguage = currentLanguage === "en" ? "fa" : "en";
   setCurrentLanguage(newLanguage);
   changeLanguage(newLanguage);
 }

    return (
        <div>

            <div className="wrapper" >

                <div className="form">
                    <form action="">
                        <label htmlFor="Login">Login</label>
                        <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                        <input type="submit" value="LOGIN" />
                    </form>
                </div>

                <div className="pic">
                    <img src="src/assets/loginpic.jpg" alt="" />

                </div>
            </div>

            <button type="button"  onClick={handleChangeLanguage}> Change Language </button>

        </div>
    )
}

export default Login
