<<<<<<< HEAD
/* eslint-disable prettier/prettier */
import { Modal } from "antd"
import React from "react"

interface ModalProps {
  open: boolean
  footer: any
  title: any
  closable: boolean
  maskClosable?: any
  handleCancel?: () => void
  children?: any
  width: any
}

export const ModalComponent: React.FC<ModalProps> = ({
  closable,
  footer,
  handleCancel,
  maskClosable,
  open,
  title,
  children,
  width,
}) => {
  return (
    <Modal
      open={open}
      footer={footer}
      title={title}
      width={width}
      closable={closable}
      onCancel={handleCancel}
      maskClosable={maskClosable}
      centered
      className="dark:bg-[#0E0D0D!important]"
    >
      {children}
    </Modal>
  )
}
=======
/* eslint-disable prettier/prettier */
import { Modal } from "antd"
import React from "react"

interface ModalProps {
  open: boolean
  footer: any
  title: any
  closable: boolean
  maskClosable?: any
  handleCancel?: () => void
  children?: any
  width: any
}

export const ModalComponent: React.FC<ModalProps> = ({
  closable,
  footer,
  handleCancel,
  maskClosable,
  open,
  title,
  children,
  width,
}) => {
  return (
    <Modal
      open={open}
      footer={footer}
      title={title}
      width={width}
      closable={closable}
      onCancel={handleCancel}
      maskClosable={maskClosable}
      centered
      className="dark:bg-[#0E0D0D!important]"
    >
      {children}
    </Modal>
  )
}
>>>>>>> f5caa89ee2da2e1f70c3298f1c68c44c2323ae77
