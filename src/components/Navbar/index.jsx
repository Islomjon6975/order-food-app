import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Container, Icons, Logo, Nav, Wrapper } from './style'
import logo from '../../assets/images/res-logo.png'
import { navbar } from '../../utils/navbar'
import { FoodsPage } from '../../pages/FoodsPage'
import { Badge } from '@mui/material'
import Stack from '@mui/material/Stack';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '../../hook/useMediaQuery'
import { NavMenu } from './NavMenu'
import { useNavMenuContext } from '../../context/NavMenu'
import { CartDrawer } from '../Cart/CartDrawer'
import {useCartDrawer } from '../../context/CartDrawer'
import { useProductsContext } from '../../context/Products'

export const Navbar = () => {
  const navigate = useNavigate()
  let isPageWide = useMediaQuery('(max-width: 884px)')
  const [openNavMenu, setOpenNavMenu] = useNavMenuContext()
  const [openCartDrawer, setOpenCartDrawer] = useCartDrawer()
  const [state] = useProductsContext()

  return (
    <Container>
      <Nav>
        <Nav.Column>
          <Nav.Column.Wrapper>
            <Nav.Column.Wrapper.Box>
              <Logo src={logo} alt='logo' loading='lazy' onClick={() => navigate('/home')} />
              <Nav.Column.Title>Tasty Treat</Nav.Column.Title>
            </Nav.Column.Wrapper.Box>
          </Nav.Column.Wrapper>
        </Nav.Column>
        { !isPageWide &&
          <Nav.Column>
              <Nav.Column.Ul>
                {
                  navbar?.map((navlink ) => !navlink?.hidden && (
                    <NavLink key={navlink?.id} to={navlink?.path} 
                      style={({isActive}) => {
                        return {color: isActive ? 'crimson' : '#212245', fontWeight: isActive ? '700' : '600', fontSize: '20px'}
                      }}
                    >{navlink?.title}</NavLink>
                    ))
                }
              </Nav.Column.Ul>
          </Nav.Column>
        }
        <Nav.Column>
          <Icons>
            <Stack spacing={2} direction="row">
              <Badge badgeContent={state?.cartItems?.length} color="secondary">
                <ShoppingBasketIcon onClick={() => setOpenCartDrawer(!openCartDrawer)} color="action" />
              </Badge>
              <PersonOutlineIcon onClick={() => navigate('/login')} color="action" />
              {
                isPageWide && <MenuIcon onClick={() => setOpenNavMenu(!openNavMenu)} color="action" />
              }
              
            </Stack>
          </Icons>
        </Nav.Column>
      </Nav>
      <Wrapper>
        <CartDrawer />
        <NavMenu />
      </Wrapper>
        <Outlet />
        <FoodsPage />
    </Container>
  )
}

export default Navbar