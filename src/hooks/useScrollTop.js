import React from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollTop = () => {
    const location=useLocation()
    React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [location.pathname])
}
