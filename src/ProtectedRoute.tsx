<<<<<<< HEAD
/* eslint-disable prettier/prettier */
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({
  isLoggedIn,
  children,
}: {
  isLoggedIn: boolean
  children: any
}) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />
  } else {
    return children
  }
}

export default ProtectedRoute
=======
/* eslint-disable prettier/prettier */
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({
  isLoggedIn,
  children,
}: {
  isLoggedIn: boolean
  children: any
}) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />
  } else {
    return children
  }
}

export default ProtectedRoute
>>>>>>> f5caa89ee2da2e1f70c3298f1c68c44c2323ae77
