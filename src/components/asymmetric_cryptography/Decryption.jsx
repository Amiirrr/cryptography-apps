import React from 'react'
import NodeRSA from 'node-rsa';

import Styles from '../../styles/components/asymmetric_cryptography/EncyprionDecryption.module.css'

const Decryption = ({ decryptedMessage, setDecryptedMessage, errorMessage
    , setErrorMessage, inputPrivateKey, setInputPrivateKey, inputEncryptedMessage, setInputEncryptedMessage }) => {


    const decryptMessage = () => {
        try {
            const key = new NodeRSA();
            key.importKey(inputPrivateKey, 'pkcs1-private-pem');
            const decryptedMessage = key.decrypt(inputEncryptedMessage, 'utf8');
            setDecryptedMessage(decryptedMessage);
            setErrorMessage('');
        } catch (error) {
            setDecryptedMessage('');
            setErrorMessage('Error: Invalid private key or decryption failed. Please check your private key and the encrypted message.');
        }
    }
    return (
        <div className={Styles.layout}>
            <p>Descryption Your Massage</p>
            <div>
                <label htmlFor='chipper'>Input Chipper Text: </label>
                <input
                    id='chipper'
                    type="text"
                    value={inputEncryptedMessage}
                    onChange={(e) => {
                        setInputEncryptedMessage(e.target.value)
                    }}
                />
            </div>
            <div>
                <label htmlFor='InputPrivateKey'>Input Private Key: </label>
                <input
                    id='InputPrivateKey'
                    type="text"
                    value={inputPrivateKey}
                    onChange={(e) => {
                        setInputPrivateKey(e.target.value);
                    }}
                />
            </div>
            <button
                className={`btn`}
                onClick={decryptMessage}>
                Description Message
            </button>
            {errorMessage && <div>{errorMessage}</div>}
            <textarea
                id='decryptedMessage'
                type="text"
                readOnly
                value={decryptedMessage}
            />

        </div>
    )
}

export default Decryption