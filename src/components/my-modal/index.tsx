
import React from 'react'
import { forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal'


interface MyProps extends ModalProps {
    content: string
}

interface MyRef {
    alertMsg(): void
}

// const CustomModal: React.FC<MyProps> = (props) =>{

//     // 属性透传
//     const { content, ...resProps} = props
//     return (
//         <Modal {...resProps}>
//            <p>{content}</p>
//         </Modal>
//     )
// }


const CustomModal = forwardRef<MyRef, MyProps>((props, ref) =>{

    // 暴露向外的一些方法
    useImperativeHandle(ref, ()=>({
       alertMsg:()=>{
           alert('这是自定义modal')
       } 
    }))

    // 属性透传
    const { content, ...resProps} = props
    return (
        <Modal {...resProps}>
           <p>{content}</p>
        </Modal>
    )
})

export default CustomModal