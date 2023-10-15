import React from 'react'
import NodeRSA from 'node-rsa'

import Styles from '../../styles/components/asymmetric_cryptography/GeneratingKey.module.css'

const GeneratingKey = ({ setPrivateKey, setPublicKey, publicKey,
    privateKey }) => {
    const rsa = new NodeRSA({ b: 512 });

    const generateKeyPair = () => {
        const KeyPublic = rsa.exportKey('public');
        const KeyPrivate = rsa.exportKey('private');
        setPublicKey(KeyPublic.replace(/-----BEGIN PUBLIC KEY-----/, '').replace(/-----END PUBLIC KEY-----/, ''));
        setPrivateKey(KeyPrivate.replace(/-----BEGIN RSA PRIVATE KEY-----/, '').replace(/-----END RSA PRIVATE KEY-----/, ''));
    }

    return (
        <div className={Styles.generatingKey}>
            <button onClick={generateKeyPair} className={`${Styles.btnGenerate} btn`}>Generate Key</button>

            <div className={Styles.key}>
                <div>
                    <label htmlFor='publicKey'>Public Key</label>
                    <textarea
                        id='publicKey'
                        type="text"
                        readOnly
                        value={publicKey}
                    />
                </div>
                <div>
                    <label htmlFor='privateKey'>Private Key</label>
                    <textarea
                        id='privateKey'
                        type="text"
                        readOnly
                        value={privateKey}
                    />
                </div>
            </div>
        </div>
    )
}

export default GeneratingKey