import React, { useState, useEffect } from 'react';
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import realLogo from '../../images/real.png'; 

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon src={realLogo} alt="Real Logo" />
                            $REAL on SOL
                        </NavLogo>
                        <HamburgerIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </HamburgerIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks as="a" href='https://dexscreener.com/solana/8s1w3Lrjh2w73V9nCCEnh2NUgMqV1cV451c74UDsc5kc' target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                    Dexscreen
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks as="a" href='https://dexscreener.com/solana/8s1w3Lrjh2w73V9nCCEnh2NUgMqV1cV451c74UDsc5kc' target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                    Dextools
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks as="a" href='https://twitter.com/realmadridonsol' target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                    Twitter
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks as="a" href='https://t.me/RealMadridSolanaPortal' target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                    Telegram
                                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink as="a" href='https://raydium.io/swap/?inputMint=sol&outputMint=8s1w3Lrjh2w73V9nCCEnh2NUgMqV1cV451c74UDsc5kc' target="_blank" rel="noopener noreferrer">
                                        <Button primary>BUY NOW</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink as="a" href='/sign-up' target="_blank" rel="noopener noreferrer">
                                        <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>    
        </>
    );
}

export default Navbar;
