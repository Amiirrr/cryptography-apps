import React from 'react'
import { useState } from 'react';
import GenerateKey from './GeneratingKey';
import Encryption from './Encryption';
import Decryption from './Decryption';

const AlgoritmRSA = () => {
    const [message, setMessage] = useState("");
    const [encryptedMessage, setEncryptedMessage] = useState("");
    const [decryptedMessage, setDecryptedMessage] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [publicKey, setPublicKey] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const [inputPublicKey, setInputPublicKey] = useState("")
    const [inputPrivateKey, setInputPrivateKey] = useState("")
    const [inputEncryptedMessage, setInputEncryptedMessage] = useState("")



    const handleClear = () => {
        setEncryptedMessage("");
        setDecryptedMessage("");
        setMessage("");
        setErrorMessage("")
        setInputPublicKey("")
        setInputPublicKey("")
        setInputPrivateKey("")
        setInputEncryptedMessage("")

    }
    return (
        <div>
            <GenerateKey
                setPublicKey={setPublicKey} setPrivateKey={setPrivateKey}
                publicKey={publicKey}
                privateKey={privateKey}
            />
            <div className='flex'>
                <Encryption
                    publicKey={publicKey}
                    message={message}
                    setMessage={setMessage}
                    encryptedMessage={encryptedMessage}
                    setEncryptedMessage={setEncryptedMessage}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    inputPublicKey={inputPublicKey}
                    setInputPublicKey={setInputPublicKey}
                />
                <Decryption
                    privateKey={privateKey}
                    encryptedMessage={encryptedMessage}
                    decryptedMessage={decryptedMessage}
                    setDecryptedMessage={setDecryptedMessage}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    inputPrivateKey={inputPrivateKey}
                    setInputPrivateKey={setInputPrivateKey}
                    inputEncryptedMessage={inputEncryptedMessage}
                    setInputEncryptedMessage={setInputEncryptedMessage}
                />
            </div>
            <button
                className={`btn btn-clear`}
                onClick={handleClear}>Clear</button>

        </div>
    )
}


export default AlgoritmRSA;