import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import founder from "../assets/founder.jpg";
// import { avatarSrc } from "../assets/eewhn.crypto.jpg";
// const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";
// const avatarSrc = "";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Welcome to <b> AgCrypto</b>, your go-to crypto companion! We empower
            users worldwide to navigate the exciting world of cryptocurrency
            with ease. Our user-friendly platform offers real-time data, secure
            transactions, and insightful resources, helping you stay informed
            and confident in your investments. Join us in shaping the future of
            finance!
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={founder} />
          <Text>
            <b>Our Founder</b>
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
