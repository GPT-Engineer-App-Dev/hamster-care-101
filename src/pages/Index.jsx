import { Box, VStack, Heading, Text, Image, SimpleGrid, GridItem } from '@chakra-ui/react';
import { FaHeart, FaHome, FaUtensils, FaStethoscope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Hamster Care Guide</Heading>
        <Text fontSize="xl">Everything you need to know about taking care of your furry friend!</Text>
        <SimpleGrid columns={2} spacing={10}>
          <GridItem>
            <VStack>
              <FaUtensils size="3em" />
              <Heading as="h2" size="lg">Feeding</Heading>
              <Text>Learn about the best diet to keep your hamster healthy and happy.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <FaHome size="3em" />
              <Heading as="h2" size="lg">Housing</Heading>
              <Text>Discover the ideal living arrangements for your hamster's comfort.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <FaStethoscope size="3em" />
              <Heading as="h2" size="lg">Health</Heading>
              <Text>Important health care tips and common issues to watch for.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <FaHeart size="3em" />
              <Heading as="h2" size="lg">Daily Care</Heading>
              <Text>Essential daily routines to ensure your hamster thrives.</Text>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Index;