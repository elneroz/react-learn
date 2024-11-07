import "./login.css"

export const Login = () => {

    const handleSubmit = ()=>{
        return console.log("Se intento logear")
    }
    return(
        <>
            <div className="login-container">
                <div className="login-info">
                    <span className="social-name">Monokode</span>
                    <p className="social-desc">Monokode te ayuda con a comunicarte con tus amigos y familiares</p>
                </div>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input  className="login-form-obj" type="text" placeholder="Correo Electronico" />
                        <input className="login-form-obj" type="password" placeholder="Contreaseña"/>
                        <button className="login-form-obj login-form-button">Inision seciar</button>
                    </form>
                    <span className="login-forgot-password "><a href="#">¿Olvidaste tu contraseña?</a></span>
                    
                </div>
            </div>
            <footer>
                <ul>
                    <li>lorem</li>
                    <li>ipsum</li>
                    <li>dolor</li>
                    <li>amet</li>
                    <li>consectetur</li>
                    <li>adipisicing</li>
                    <li>elit</li>
                    <li>Minima</li>
                    <li>aspernatur</li>
                    <li>error</li>
                </ul>
            </footer>
        </>
    )
}