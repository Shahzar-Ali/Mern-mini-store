import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../Store/Product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    
    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      isClosable: true,
    });

    if (success) {
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  return (
    <Container maxW={"container.sm"} py={12}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder="Enter product name"
                name="name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                variant="filled"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Enter price"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                variant="filled"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Image URL</FormLabel>
              <Input
                placeholder="Enter image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                variant="filled"
              />
            </FormControl>

            <Button
              colorScheme="orange"
              onClick={handleAddProduct}
              w="full"
              size="lg"
              mt={4}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
