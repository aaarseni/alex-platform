import react from 'react'
import './Modal.css'

export default function Modal(props) {
    return (
        <div className="modal-wrapper">
            <div className="modal-body">
                {props.children}
            </div>
        </div>
    )
}