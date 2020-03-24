import React from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Image from "../../../../common/src/components/Image"
import Container from "../../../../common/src/components/UI/Container"
import NavbarWrapper, { MenuWrapper, Button } from "./navbar.style"

import logoImage from "../../../../common/src/assets/image/charity/logo.svg"
import heartImage from "../../../../common/src/assets/image/charity/heart-red.png"

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image src={logoImage} alt="Kobe Fomento Social" />
        </Link>
        <MenuWrapper>
          <AnchorLink
            className="smooth_scroll"
            href="#socialFundraising"
            offset={81}
          >
            Plantando Esperança
          </AnchorLink>
          <AnchorLink className="smooth_scroll" href="#feature" offset={81}>
            <Button>
              <span className="text">Participar</span>
              <Image src={heartImage} alt="Charity Landing" />
            </Button>
          </AnchorLink>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  )
}

export default Navbar
