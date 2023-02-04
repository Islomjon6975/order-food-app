import React, { createContext, useContext, useState } from 'react'

const NavMenuContext = createContext();
export const useNavMenuContext = () => useContext(NavMenuContext)


export const NavMenuContextProvider = ({children}) => {
  const [openNavMenu, setOpenNavMenu] = useState(false);

  return (
    <NavMenuContext.Provider value={[openNavMenu, setOpenNavMenu]}>{children}</NavMenuContext.Provider>
  )
}


export default NavMenuContextProvider