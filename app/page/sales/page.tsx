import { memo } from "react";
import Sales from "../../components/sales/layout";
import HLayout from "../../components/header/HLayout";

function Home() {
  return (
    <>
      <HLayout>
        <Sales />
      </HLayout>
    </>
  );
}

export default memo(Home);
