import { DashboardBaseContainer } from "@/components/styled/container";
import { ReactNode } from "react";
import styled from "styled-components";
import { PageLayout } from "../PageLayout";
import NavigationBar from "./NavigationBar";

interface Props {
  children: ReactNode;
  background?: string;
}

const DashboardRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin-bottom: calc(var(--spacing-24) - var(--layout-static-page-header-content-bottom-padding));

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 0;
  }
`;

export function DashboardLayout({ children, background }: Props) {
  return (
    <PageLayout background={background || "var(--color-white)"}>
      <DashboardRow>
        <NavigationBar />
        <DashboardBaseContainer>{children}</DashboardBaseContainer>
      </DashboardRow>
    </PageLayout>
  );
}
export default DashboardLayout;
