import React from "react";
import Product1 from "@/components/Product/Product1";
import Ceramic from "@/components/Product/Ceramic-wall";
import PageJSON_LD from "@/components/Schema/PageJSON_LD";
import { Col, Container, Row } from "react-bootstrap";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";

const Breadcrumb = () => (
  <nav className="container" aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/" className="text-gray-700">Home</a></li>
      <li className="breadcrumb-item"><a href="/products" className="text-gray-700">Products</a></li>
      <li className="breadcrumb-item active" aria-current="page">Wall-Ceramic</li>
    </ol>
  </nav>
);

const page = () => {
  return (
    <>
      <Breadcrumb />
      <Container>
        <Row className="my-3">
          <h1 className="hidden"> Our Luxury Tiles</h1>
          <Col lg={12} xl={12} className="">
            <p className="font-ivarRegular xl:text-[100px] md:text-[78px]  md:leading-[110px] text-[47px] leading-[57px] uppercase lg:text-start md:text-center xs:text-center mb-0">
              Ceramic
              <span className=" lg:inline hidden ms-3 font-handestonie xl:text-[130px] text-[100px] xl:leading-[172px] leading-[138px] text-black-rock-Orange  capitalize">
                Body
              </span>
            </p>
            <p className=" mb-0 text-center lg:hidden font-handestonie md:text-[120px] md:leading-[115px] text-70 leading-[70px] text-black-rock-Orange capitalize">
            Body
            </p>
          </Col>
        </Row>
      </Container>
      {/* <div className="container">Ceramic</div>
      <div className="container"><a href="/products/ceramicandporcelien/200X300MM" className="text-gray-700">200 by 300 MM</a></div> */}
      <Ceramic />
    </>
  );
};

export default page;

export const metadata = {
  title:
    "Explore Glossy, Matte, and High-Glossy Tiles at Blackrock",
  description: `Browse Blackrock Porcelano’s wide selection of tiles, including Glossy, Matt, and High Glossy finishes. Perfect for floors, walls, kitchens, and bathrooms, combining style and durability.`,
  alternates: {
    canonical: `${NEXT_PUBLIC_WEB_URL}/product`,
  },
};
