import React, { useState } from 'react'
import { Container, Wrapper } from './style'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useProductsContext } from '../../../context/Products';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export const PopularFoods = () => {
  const [value, setValue] = useState(0);
  const [state, dispatch] = useProductsContext()
  console.log(state, 'state')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Wrapper>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Burger" {...a11yProps(1)} />
              <Tab label="Pizza" {...a11yProps(2)} />
              <Tab label="Bread" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {
              state?.data?.map((product, index) => (
                <div key={product?.id || index}>
                  <p>{product?.title}</p>
                  <p>{product?.price}</p>
                  <button onClick={() => dispatch({type: 'ADD_TO_WISHLIST', payload: {product: product}})}>wishlist</button>
                  <button onClick={() => dispatch({type: 'ADD_TO_CART', payload: {product: product}})}>Add to cart</button>
                </div>
              ))
            }
          </TabPanel>
          <TabPanel value={value} index={1}>
            {
              state?.data?.filter((product) => product?.category?.toLowerCase() === 'burger').map((product, index) => (
                <div key={product?.id || index}>
                  <p>{product?.title}</p>
                  <p>{product?.price}</p>
                </div>
              ))
            }
          </TabPanel>
          <TabPanel value={value} index={2}>
            Pizza
          </TabPanel>
          <TabPanel value={value} index={2}>
            Bread
          </TabPanel>
        </Box>
      </Wrapper>
    </Container>
  )
}
