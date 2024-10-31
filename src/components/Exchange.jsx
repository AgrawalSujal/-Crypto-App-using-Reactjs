import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../App.jsx";
import { Container, Heading, HStack, VStack, Image } from "@chakra-ui/react"; // Import Image
import Loader from "./Loader.jsx";
import ErrorComponent from "./ErrorComponent.jsx";

const Exchange = () => {
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        // setExchange(data);
        setExchange(Array.isArray(data) ? data : []);
        console.log(data);
      } catch (error) {
        setError(true);
        console.error("Error fetching exchanges:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExchange();
  }, []);
  if (error)
    return (
      <ErrorComponent message={"Error occured while fetching exchanges❗"} />
    );
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {exchange.map((i) => (
            <ExchangeCard
              key={i.id} // Ensure i.id is unique
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
            />
          ))}
        </HStack>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    // Add return statement here
    <a href={url} target={"blank"} rel="noopener noreferrer" className="">
      <VStack
        w={"52"}
        shadow={"52"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        bgColor={"colorPalette.200"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"Exchange"}
        />
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>
        <Heading size={"md"}>{name}</Heading>
      </VStack>
    </a>
  );
};

export default Exchange;
