import { Drawer } from 'antd';
import React from 'react'
import { useCartDrawer } from '../../../context/CartDrawer';
import { useProductsContext } from '../../../context/Products';

export const CartDrawer = () => {
  const [openCartDrawer, setOpenCartDrawer] = useCartDrawer()
  const [state, dispatch] = useProductsContext()
  console.log(state, 'state')
  
  const onClose = () => {
    setOpenCartDrawer(false);
  };

  // Create our number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  console.log(formatter.format(2500)); /* $2,500.00 */

  return (
    <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={openCartDrawer}>
        {
          state?.cartItems?.map((product) => (
            <div key={product?.id}>
              {product?.title} 
              {
              formatter.format(product?.price)
              }
            </div>
          ))
        }
        <h1>Total: {formatter.format(state?.cartItems?.reduce((sum, current) => sum + current.price, 0))}</h1>
    </Drawer>
  )
}
