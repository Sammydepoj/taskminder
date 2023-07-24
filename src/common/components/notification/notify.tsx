/* eslint-disable prettier/prettier */
import { TypeOptions, toast } from "react-toastify"

const Notify = (type: TypeOptions, message: any) => {
  toast(message, {
    type,
    position: "bottom-left",
  })
}

export default Notify
