import './login.css'
import { useTranslation } from "react-i18next";


function Login() {


  const { t, i18n } = useTranslation();


const toggleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value === "0" ? "en" : "fa";
    i18n.changeLanguage(lang);
};



    return (
        <div>

            <div className="wrapper" >

                <div className="form">
                    <form action="">
                        <label htmlFor="Login">{t("login")}</label>
                        <input type="text" name="name" id="name" placeholder={t("loginPlaceholder")} />
                        <input type="submit" value={t("loginBtn")} />
                    </form>
                </div>

                <div className="pic">
                    <img src="src/assets/loginpic.jpg" alt="" />

                </div>
            </div>
           <div>
                <label htmlFor="language">{t("lan")}</label>
                <select  id="language" onChange={toggleLanguage} defaultValue={i18n.language}>
                    <option value="0">{t("lanEn")}</option>
                    <option value="1">{t("lanFa")}</option>
                </select>
            </div>
            {/* <button type="button"  onClick={toggleLanguage}> Change Language </button> */}

        </div>
    )
}

export default Login
