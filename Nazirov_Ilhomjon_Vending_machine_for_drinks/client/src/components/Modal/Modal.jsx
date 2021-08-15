import React from 'react'
import './Modal.css'

// Functional Component which rendering modal
const Modal = ({title, message, setIsOpen}) => {
    return (
        <React.Fragment>
                <div className='modal'>
                    <div className='modal-body'>
                        <h1>{title}</h1>
                        <p>{message}</p>
                        <button className='btn' onClick={() => setIsOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Modal