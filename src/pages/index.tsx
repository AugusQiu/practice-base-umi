import React, { useState, useRef } from 'react';
import { Modal, Button } from 'antd';
import CustomModal from '@/components/my-modal'

export default function MyModal(){
  const modalRef = useRef(null)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    // (modalRef.current! as any)?.alertMsg();
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {/* <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
      <CustomModal
        title="Basic Modal" 
        content="haha" 
        visible={isModalVisible}
        onOk={handleOk} 
        onCancel={handleCancel}
        ref={modalRef}
      />
    </div>
  );
};