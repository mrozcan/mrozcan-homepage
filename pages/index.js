import { Box, Stack, Text, Heading, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../public/logo512.png";

export default function Home() {
  return (
    <Flex justify={'center'} align={'center'} minH={'100vh'}>
      <Stack>
        <Box>
          <Image src={Logo} alt="logo" />
        </Box>
        <Heading>
          <Text textAlign={'center'}>Under Construction!</Text>
        </Heading>
      </Stack>
    </Flex>
  );
}
