import { Box, Stack, Text, Heading, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../public/logo512.png";

export default function Home() {
  return (
    <Flex justify={'center'} align={'center'} minH={'100vh'}>
      <Stack bg='rgba(255,255,255,0.35)' p={7} rounded="lg">
        <Box ml={6} mr={6}>
          <Image src={Logo} alt="logo" />
        </Box>
        <Heading>
          <Text textAlign={'center'} m={3}>Under Construction!</Text>
        </Heading>
      </Stack>
    </Flex>
  );
}
