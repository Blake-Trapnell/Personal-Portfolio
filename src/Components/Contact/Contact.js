import React from "react"
import './Contact.css'

export default function Contact() {
    return (
        <div className="Contact_Outer">

            <img className="Contact_Profile_image" src="https://lh3.googleusercontent.com/E5Jg8TCTj1q_E-BphvPqVrRdKcpTOanwRprj6gBRbf9tfkcun21Wm16qq2wNzAHUovMfLK8Mw6aFztT4EUa1Su5Srjo0XRQb4SoWIhhEd8EICGa0E1q6XRdOlY4sNfDvwMD6wOCKewTFp5eMo2K758JGtsGF_B7LwgUbfw4Io0FMSV_iWqwOjvg7j6aIlqinJ_ef9BLQEyrBhM-DCe54OKdWp-M4SKEGsRkDUNUDn_E0DUMgV5BatJGrj-mSZ7ZArraxStEcaoNgzVBMy-z5Jd2r7nHmj0NHZMdMBscdWx4gpRWb1WVWM2yBd0lRMVaTSudq2nS4O5lM9mxmAT-_4PkgAvw0BLNte6shFwGFTK3MKqWDumflpSrDNbswaxCCY8l_SqayLVHUqO1AmpLzNZF6UqSlcc2Ej9HDykQHOo3MFxUCo2jPQEn_9m6DVbrH_tDF5dPbGilmgtjMJGEdezPquKJYFZO6HZps9tUPtxV945Lpyt8sGOv_UeDLk6P5XZrGvtgQEzfp0Px7U-HHDTYNitWLafc_boLTDC9OBH7AFD16kgSg-uYCh-PwiX1z1rpVXeD1QhNm_4KI5QhnI1embTJD9_7K0xyy0LDtRCD36ou-14cLTOC4jkrnzz6pASn-d2OtxR3sbChgM4NyiXVjWZqQlbyf7dK2D0X7YZrTT8UGKzHiNA=w757-h1009-no" alt="" />
            <div className="Contact_Links_Container">
                <h3 style={{textShadow: "0 0 10px rgb(72, 255, 0)"}} className="Contact_Links">Email: <p>
                    BlakeTrapnell.Dev@Gmail.com
                </p>
                </h3>
                <a href="https://github.com/Blake-Trapnell" >
                    <h3 style={{textShadow: "0 0 10px rgb(255, 145, 0)"}} className="Contact_Links">GitProfile: <p>
                        https://github.com/Blake-Trapnell
                </p>
                    </h3>
                </a>
                <a href="LinkedIn Profile: https://www.linkedin.com/in/blake-trapnell-0b526495/">
                    <h3 className="Contact_Links">LinkedIn Profile: https://www.linkedin.com/in/blake-trapnell-0b526495/</h3>
                </a>

            </div>
        </div>
    )
}