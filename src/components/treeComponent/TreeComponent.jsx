import React, { useState } from 'react';
import Tree from 'react-animated-tree';
import s from './TreeComponent.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const TreeComponent = ({ content, img }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={s.tree_component}>
            <Tree content={content} />

            <button onClick={openModal}><img src={img} alt="" /></button>
            <div className={s.modal}>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <img src={img} alt="" />
                    <button className={s.modal_close_btn} onClick={closeModal}>X</button>
                </Modal>
            </div>
        </div>

    );
};

export default TreeComponent;