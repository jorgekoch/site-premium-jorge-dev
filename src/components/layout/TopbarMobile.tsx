import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { siteConfig } from "../../config/site";
import { navigationItems } from "../../config/navigation";
import { media } from "../../styles/breakpoints";
import logoCompacta from "../../assets/logo-compacta.png";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 10, 14, 0.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  width: min(100% - 2rem, ${({ theme }) => theme.layout.contentMaxWidth});
  height: ${({ theme }) => theme.layout.mobileTopbarHeight};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media ${media.laptop} {
    height: 78px;
  }
`;

const Brand = styled(NavLink)`
  display: flex;
  align-items: center;
  min-width: 0;
  flex-shrink: 0;
`;

const BrandLogo = styled.img`
  display: block;
  height: 50px;
  width: auto;
  object-fit: contain;

  @media ${media.tablet} {
    height: 38px;
  }

  @media ${media.laptop} {
    height: 46px;
  }
`;

const DesktopNav = styled.nav`
  display: none;

  @media ${media.laptop} {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    flex: 1;
  }
`;

const DesktopNavItem = styled(NavLink)`
  padding: 0.75rem 0.95rem;
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.textSoft};
  border: 1px solid transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.border};
  }

  &.active {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }
`;

const DesktopCta = styled(NavLink)`
  display: none;

  @media ${media.laptop} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 0.85rem 1.15rem;
    border-radius: ${({ theme }) => theme.radius.pill};
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.accent}
    );
    color: ${({ theme }) => theme.colors.primaryContrast};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    white-space: nowrap;
    box-shadow: ${({ theme }) => theme.shadow.glow};
    transition:
      transform ${({ theme }) => theme.transitions.default},
      filter ${({ theme }) => theme.transitions.default};

    &:hover {
      transform: translateY(-1px);
      filter: brightness(1.05);
    }
  }
`;

const MobileActions = styled.div`
  display: flex;

  @media ${media.laptop} {
    display: none;
  }
`;

const MenuButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const Overlay = styled.button<{ $open: boolean }>`
  position: fixed;
  inset: ${({ theme }) => theme.layout.mobileTopbarHeight} 0 0 0;
  z-index: 98;
  border: 0;
  background: rgba(0, 0, 0, 0.42);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity ${({ theme }) => theme.transitions.default};

  @media ${media.laptop} {
    display: none;
  }
`;

const MenuPanel = styled.div<{ $open: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.layout.mobileTopbarHeight};
  left: 0;
  right: 0;
  z-index: 99;
  background: rgba(10, 10, 14, 0.98);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  display: grid;
  gap: 0.75rem;

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-10px)")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition:
    opacity ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default};

  @media ${media.laptop} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: grid;
  gap: 0.55rem;
`;

const MobileNavItem = styled(NavLink)`
  padding: 0.95rem 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.textSoft};
  border: 1px solid transparent;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.border};
  }

  &.active {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }
`;

const BottomText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.7;
  margin-top: 0.25rem;
`;

const MobileCta = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.9rem 1.2rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.accent}
  );
  color: ${({ theme }) => theme.colors.primaryContrast};
  font-weight: 700;
  box-shadow: ${({ theme }) => theme.shadow.glow};
`;

type HamburgerIconProps = {
  open: boolean;
};

function HamburgerIcon({ open }: HamburgerIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function TopbarMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previous || "";

    return () => {
      document.body.style.overflow = previous || "";
    };
  }, [open]);

  function handleToggle() {
    setOpen((prev) => !prev);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Header>
        <Inner>
          <Brand to="/">
            <BrandLogo src={logoCompacta} alt="Jorge Koch Dev" />
          </Brand>

          <DesktopNav>
            {navigationItems.map((item) => (
              <DesktopNavItem key={item.path} to={item.path} end={item.path === "/"}>
                {item.label}
              </DesktopNavItem>
            ))}
          </DesktopNav>

          <DesktopCta to={siteConfig.cta.primaryTo}>
            {siteConfig.cta.primaryLabel}
          </DesktopCta>

          <MobileActions>
            <MenuButton
              type="button"
              onClick={handleToggle}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              <HamburgerIcon open={open} />
            </MenuButton>
          </MobileActions>
        </Inner>
      </Header>

      <Overlay
        type="button"
        aria-label="Fechar menu"
        $open={open}
        onClick={handleClose}
      />

      <MenuPanel $open={open}>
        <MobileNav>
          {navigationItems.map((item) => (
            <MobileNavItem
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={handleClose}
            >
              {item.label}
            </MobileNavItem>
          ))}
        </MobileNav>

        <BottomText>{siteConfig.footer.note}</BottomText>

        <MobileCta to={siteConfig.cta.primaryTo} onClick={handleClose}>
          {siteConfig.cta.primaryLabel}
        </MobileCta>
      </MenuPanel>
    </>
  );
}