import React from 'react'
import AlgoritmRSA from '../components/asymmetric_cryptography/AlgoritmRSA'
import Styles from '../styles/page/AsymmetricCryptography.module.css'

const AsymmetricCryptography = () => {
    return (
        <div>
            <div className={Styles.header}>
                <h2>Asymmetric Cryptography</h2>
            </div>
            <p className={Styles.headline}>Asymmetric cryptography utilizes the <span>RSA algorithm</span>, which involves a key pair, a public key for encrypting messages and a corresponding private key for decryption, to secure digital communication</p>
            <AlgoritmRSA />
        </div>
    )
}

export default AsymmetricCryptography