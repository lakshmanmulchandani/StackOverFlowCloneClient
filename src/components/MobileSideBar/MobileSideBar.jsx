import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import {ReactComponent as Hamburger} from "../../assets/icons8-menu.svg";

import {ReactComponent as Stack} from "../../assets/LogoMd.svg";
import {ReactComponent as GlobalIcon} from "../../assets/Globe.svg";
import logo from "../../assets/logo.png";

import "./MobileSideBar.styles.scss";

const SidebarUI = ({isOpen, ...rest}) => {
  const classes = ["Sidebar", isOpen ? "is-open" : ""];

  return <div aria-hidden={!isOpen} className={classes.join(" ")} {...rest} />;
};

SidebarUI.Overlay = (props) => <div className='SidebarOverlay' {...props} />;

SidebarUI.Content = ({width = "13rem", isRight = false, ...rest}) => {
  const classes = ["SidebarContent", isRight ? "is-right" : ""];
  const style = {
    width,
    height: "100%",
    top: 0,
    right: isRight ? `-${width}` : "auto",
    left: !isRight ? `-${width}` : "auto",
  };

  return <div className={classes.join(" ")} style={style} {...rest} />;
};

const MobileSideBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    console.log(windowSize.innerWidth);
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;

    return {innerWidth, innerHeight};
  }

  function openSidebar(isOp = true) {
    setIsOpen(isOp);
  }

  const {hasOverlay, isRight} = props;

  return (
    <SidebarUI isOpen={isOpen}>
      <Hamburger onClick={openSidebar} className='ham' />

      <SidebarUI.Content isRight={isRight} onClick={() => openSidebar(false)}>
        <div className='content-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='content-inner'>
          <div className='side-bar-tabs'>
            <Link exact activeClassName='active' className='home-link' to='/'>
              <p>Home</p>
            </Link>

            <div className='public-tabs'>
              <p className='title fc-light'>PUBLIC</p>
              <div
                activeClassName='active'
                className='icon-link'
                to='/questions'>
                <p>
                  <GlobalIcon className='icon' />
                  Questions
                </p>
              </div>
              <Link activeClassName='active' className='link' to='/tags'>
                <p>Tags</p>
              </Link>
              <Link activeClassName='active' className='link' to='/users'>
                <p>Users</p>
              </Link>
              <Link activeClassName='active' className='link' to='/Community'>
                <p>Community</p>
              </Link>
            </div>
          </div>
        </div>
      </SidebarUI.Content>
      {hasOverlay ? (
        <SidebarUI.Overlay onClick={() => openSidebar(false)} />
      ) : (
        false
      )}
    </SidebarUI>
  );
};

export default MobileSideBar;
