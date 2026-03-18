import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const sharedStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 48px;
  padding: 0.9rem 1.2rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid transparent;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  transition:
    transform ${({ theme }) => theme.transitions.default},
    background ${({ theme }) => theme.transitions.default},
    border-color ${({ theme }) => theme.transitions.default},
    color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-1px);
  }
`;

const primaryStyles = css`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryContrast};
  box-shadow: ${({ theme }) => theme.shadow.glow};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const ghostStyles = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border-color: ${({ theme }) => theme.colors.border};

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledButton = styled.button`
  ${sharedStyles}
  ${({ variant = "primary" }) =>
    variant === "ghost" ? ghostStyles : primaryStyles}
`;

const StyledLink = styled(Link)`
  ${sharedStyles}
  ${({ variant = "primary" }) =>
    variant === "ghost" ? ghostStyles : primaryStyles}
`;

const StyledAnchor = styled.a`
  ${sharedStyles}
  ${({ variant = "primary" }) =>
    variant === "ghost" ? ghostStyles : primaryStyles}
`;

export function Button({ to, href, children, ...props }) {
  if (to) {
    return (
      <StyledLink to={to} {...props}>
        {children}
      </StyledLink>
    );
  }

  if (href) {
    return (
      <StyledAnchor href={href} {...props}>
        {children}
      </StyledAnchor>
    );
  }

  return <StyledButton {...props}>{children}</StyledButton>;
}