import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { TopbarMobile } from "./TopbarMobile";
import { media } from "../../styles/breakpoints";

const Shell = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const Main = styled.main`
  min-height: 100vh;

  @media ${media.laptop} {
    margin-left: ${({ theme }) => theme.layout.sidebarWidth};
  }
`;

export function PageShell({ children }) {
  return (
    <Shell>
      <Sidebar />
      <TopbarMobile />
      <Main>{children}</Main>
    </Shell>
  );
}