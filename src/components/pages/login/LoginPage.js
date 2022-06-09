import React from 'react';
import logo from '../../../assets/images/logo.png'
import './loginPage.css'

const LoginPage = () => {
    return (
        <div className="form container-fluid vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="img-fluid">
                <img src={logo} alt="Point me Logo" />
            </div>
            <h5 className="text-center mb-4">Connectez-vous pour gérer vos employés</h5>
            <div className="shadow form-container">
                <form action="" className="px-sm-4 py-4 px-2">
                    <input type="email" name="" id="" placeholder="Email" required />
                    <input type="password" name="" id="" placeholder="Mot de passe" required />
                    <div className="forgetten-password text-end">
                        <span><a href="#">Mot de passe oublié ?</a></span>
                    </div>
                    <button type="submit">Connexion</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;