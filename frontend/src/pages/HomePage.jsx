import { Container, SimpleGrid, Text, VStack, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../Store/Product";
import ProductCard from "../components/ItemCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadProducts = async () => {
			setLoading(true);
			setError(null); 
			try {
				await fetchProducts();
			} catch (err) {
				setError("Failed to fetch products.");
			} finally {
				setLoading(false);
			}
		};

		loadProducts();
	}, [fetchProducts]);

	return (
		<Container maxW='container.xl' py={12}>
			<VStack spacing={8}>
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, #ffb03b,#ff677d)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Current Products
				</Text>

				{loading ? (
					<Spinner />
				) : error ? (
					<Alert status='error'>
						<AlertIcon />
						{error}
					</Alert>
				) : (
					<>
						<SimpleGrid
							columns={{
								base: 1,
								md: 2,
								lg: 3,
							}}
							spacing={10}
							w={"full"}
						>
							{products.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
						</SimpleGrid>

						{products.length === 0 && (
							<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
								No products found{" "}
								<Link to={"/create"}>
									<Text as='span' color='orange.500' _hover={{ textDecoration: "underline" }}>
										Create a product
									</Text>
								</Link>
							</Text>
						)}
					</>
				)}
			</VStack>
		</Container>
	);
};

export default HomePage;
