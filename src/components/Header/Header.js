
// // updated code 

// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Bar,
//   Brand,
//   BrandRow,
//   BrandWordmark,
//   Nav,
//   NavList,
//   NavItem,
//   NavButton,
//   Burger,
//   MobileMenu,
// } from "./HeaderElements";
// import Logo from "../Logo/Logo";
// import { animateScroll as scroll } from "react-scroll";

// const NAV_LINKS = [
//   { key: "projects", label: "Projects", hash: "#projects" },
//   { key: "about", label: "About", hash: "#about" },
//   { key: "skills", label: "Skills", hash: "#skills" },
//   { key: "contact", label: "Contact", hash: "#contact" },
// ];

// export function Header({ solid: forceSolid = false }) {
//   const [open, setOpen] = useState(false);
//   const [isSolid, setIsSolid] = useState(forceSolid);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const onHome = useMemo(() => location.hash === "" || location.hash === "#/", [location.hash]);

//   useEffect(() => {
//     if (forceSolid) return setIsSolid(true);
//     const onScroll = () => setIsSolid(window.scrollY > 10);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [forceSolid]);

//   const goHomeAnd = (fn) => {
//     if (onHome) {
//       fn?.();
//     } else {
//       // go to home, then scroll after paint
//       navigate("/#/");
//       setTimeout(() => fn?.(), 0);
//     }
//     setOpen(false);
//   };

//   const handleBrandClick = () => {
//     // Home logo click: go to top
//     if (onHome) scroll.scrollToTop({ duration: 400 });
//     else navigate("/#/");
//     setOpen(false);
//   };

//   const handleNavClick = (hash) => {
//     const id = (hash || "").replace("#", "");
//     goHomeAnd(() => {
//       const el = document.getElementById(id);
//       if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//     });
//   };

//   return (
//     <Bar data-solid={isSolid}>
//       <Brand onClick={handleBrandClick} aria-label="Go to home">
//         <BrandRow>
//           <Logo size={28} />
//           <BrandWordmark>Filmon&nbsp;Haile</BrandWordmark>
//         </BrandRow>
//       </Brand>

//       <Nav>
//         <NavList>
//           {NAV_LINKS.map((l) => (
//             <NavItem key={l.key}>
//               <NavButton onClick={() => handleNavClick(l.hash)}>{l.label}</NavButton>
//             </NavItem>
//           ))}
//         </NavList>
//       </Nav>

//       <Burger aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
//         <span />
//         <span />
//         <span />
//       </Burger>

//       <MobileMenu data-open={open}>
//         {NAV_LINKS.map((l) => (
//           <NavButton key={l.key} onClick={() => handleNavClick(l.hash)}>{l.label}</NavButton>
//         ))}
//       </MobileMenu>
//     </Bar>
//   );
// }

// export default Header;



import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src="/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="blog">
            Blog
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
