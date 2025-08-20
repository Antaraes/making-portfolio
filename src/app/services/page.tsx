import Footer from "@/components/Footer";
import IntegratedHorizontalScroll from "@/components/Home/HorizontalScroll";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <IntegratedHorizontalScroll />
      <Footer />
    </>
  );
};

export default page;
