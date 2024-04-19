// Complete the Index page component for Big Rob Memecoin
import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaInstagram, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" justify="center" minHeight="100vh" padding={4}>
        <VStack spacing={8}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW1lY29pbiUyMGxvZ298ZW58MHx8fHwxNzEzNDkyMzExfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Big Rob Coin Logo" />
          <Heading as="h1" size="2xl" textAlign="center">
            Big Rob Coin
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Join the revolution of meme investing with Big Rob Coin. The future of fun finance!
          </Text>
          <Button rightIcon={<FaRocket />} colorScheme="purple" size="lg">
            Buy Big Rob Coin
          </Button>
          <Link href="https://instagram.com/localcardshop_" isExternal color="blue.500">
            <Button leftIcon={<FaInstagram />} variant="outline" colorScheme="blue">
              Follow us on Instagram
            </Button>
          </Link>
          <Text fontSize="sm" textAlign="center" color="gray.600">
            Disclaimer: Cryptocurrencies are a highly volatile investment. Do your own research before investing.
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
