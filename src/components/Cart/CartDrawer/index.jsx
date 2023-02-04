import { Drawer } from 'antd';
import React from 'react'
import { useCartDrawer } from '../../../context/CartDrawer';

export const CartDrawer = () => {
  const [openCartDrawer, setOpenCartDrawer] = useCartDrawer()
  
  const onClose = () => {
    setOpenCartDrawer(false);
  };

  return (
    <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={openCartDrawer}>
        CartDrawer
    </Drawer>
  )
}
