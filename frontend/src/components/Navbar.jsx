import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import brand from "../assets/brand.png"

const Navbar = () => {
    return (
        <Box w={'100vw'}>
            <Flex justifyContent={'space-between'} alignItems={'center'} mx={'auto'} w={'80%'} p={'20px'}>
                <Box>
                    <Image src={brand} />
                </Box>
                <Box display={'flex'} gap={'30px'} textColor={'#6C87AE'} fontSize={'18px'}>
                    <Text>Home</Text>
                    <Text>About</Text>
                    <Text>Method</Text>
                    <Text>Contact Us</Text>
                    <Text>Items</Text>
                </Box>
                <Box>
                    <Button bgColor='#3A8EF6' w={'165px'} h={'55px'} color={'white'} rounded={'100px'} colorScheme="teal">Buy Now</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar