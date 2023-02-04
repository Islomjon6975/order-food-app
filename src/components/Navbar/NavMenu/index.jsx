import { Drawer } from 'antd';
import React from 'react'
import { useNavMenuContext} from '../../../context/NavMenu';

export const NavMenu = () => {
  const [openNavMenu, setOpenNavMenu] = useNavMenuContext()

  const onClose = () => {
    setOpenNavMenu(false);
  };

  return (
    <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={openNavMenu}>
        NavLInk
    </Drawer>
  )
}
