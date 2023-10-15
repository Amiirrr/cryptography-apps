import React from 'react'
import NodeRSA from 'node-rsa';

import Styles from '../../styles/components/asymmetric_cryptography/EncyprionDecryption.module.css'

const Encryption = ({ message, setMessage, setEncryptedMessage, encryptedMessage, errorMessage, setErrorMessage, inputPublicKey, setInputPublicKey
}) => {
    const encryptMessage = () => {
        try {
            const key = new NodeRSA();
            key.importKey(inputPublicKey, 'pkcs8-public-pem');
            setEncryptedMessage(key.encrypt(message, 'base64'));
            setErrorMessage('');
        } catch (error) {
            setEncryptedMessage('');
            setErrorMessage('Error: Invalid public key. Please enter a valid public key.');
        }
    }

    return (
        <div className={Styles.layout}>
            <p>Encyption Your Massage</p>
            <div>
                <label htmlFor='inputMassage'>Input Message: </label>
                <input
                    id='inputMassage'
                    type="text"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                />
            </div>
            <div>
                <label htmlFor='inputPublicKey'>Input Public Key: </label>
                <input
                    id='inputPublicKey'
                    type="text"
                    value={inputPublicKey}
                    onChange={(e) => {
                        setInputPublicKey(e.target.value);
                    }}
                />
            </div>
            <button
                className={`btn`}
                onClick={encryptMessage}>
                Encrypt Message
            </button>
            {errorMessage && <div>{errorMessage}</div>}
            <textarea
                id='encryptedMessage'
                type="text"
                readOnly
                value={encryptedMessage}
            />


        </div>
    )
}

export default Encryption