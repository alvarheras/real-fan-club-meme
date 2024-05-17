import { Box, Button, Flex, Heading, Image, Link, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FaInstagram, FaTelegramPlane, FaGlobe, FaTwitter } from "react-icons/fa";

const Index = () => {
  const textSize = useBreakpointValue({ base: 'md', md: 'xl' });
  const headingSize = useBreakpointValue({ base: 'xl', md: '2xl' });

  return (
    <Box height="100vh" width="100vw" padding="0">
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
        padding={0}
        bgImage="url('https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--859d7ffa-751b-4ca5-a636-4d83642b2c32/_330838956259.app.png?preferwebp=true')"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        position="relative"
        width="full"
      >
        <Box position="absolute" top="0" right="0" bottom="0" left="0" bg="blackAlpha.800" zIndex="0" />
        <VStack spacing={8} zIndex={1} width="full" px={4}>
          <Image src="/real.png" boxSize={{ base: "150px", sm: "200px", md: "250px" }} alt="Big Rob Coin Logo" />
          <Heading as="h1" size={headingSize} textAlign="center" my={4} color="white" mx="auto" maxW="90%">
            $REAL | Real Madrid FC
          </Heading>
          <Text fontSize={textSize} textAlign="center" mb={4} fontWeight="bold" color="white" mx="auto" maxW="90%">
            $REAL Madrid memecoin on the solana blockchain. Best coin in best blockchain! Memecoin not affiliated with the club in any way!
          </Text>
          <Flex direction={{ base: 'column', sm: 'row' }} gap={{ base: 3, sm: 4 }} align="center">
            <Link href="https://twitter.com/realmadridonsol" isExternal>
              <Button leftIcon={<FaTwitter />} variant="outline" colorScheme="white" color="white" borderColor="white">
                Follow us on X
              </Button>
            </Link>
            <Link href=" https://t.me/RealMadridSolanaPortal" isExternal>
              <Button leftIcon={<FaTelegramPlane />} variant="outline" colorScheme="white" color="white" borderColor="white">
                Join Telegram
              </Button>
            </Link>
            <Link href="https://dexscreener.com/solana/2zqimwtryrkwkjzfmwmwou3uwyujzgsaosdvxchcyacl" isExternal>
              <Button leftIcon={<FaGlobe />} variant="outline" colorScheme="white" color="white" borderColor="white">
                View in Dexscreen
              </Button>
            </Link>
          </Flex>
          <Text fontSize="sm" textAlign="center" color="white" mt={4} mx="auto" maxW="90%">
            Disclaimer: Cryptocurrencies are a highly volatile investment. Do your own research before investing.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
