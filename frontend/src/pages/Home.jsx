import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import martImage from '../assets/toko.jpg'
import doc from '../assets/dokumen.png'
import visual from '../assets/Visual.png'
import product1 from '../assets/product1.png'

const Home = () => {
    return (
        <>
            <Box bgColor={'#F2F7FF'} w={'100vw'} h={'100vh'}>
                <Navbar />
                {/* home */}
                <Box display={'flex'} w={'80%'} mx={"auto"} justifyContent={'center'} alignItems={'center'} mt={'8rem'} gap={'7rem'}>
                    <Box>
                        <Text color={'#00BFA5'} fontSize={'32px'}>Group 1</Text>
                        <Text fontSize={'52px'} fontWeight={'bold'} mt={'10px'}>SEARCH TOP SELLER ITEMS</Text>
                        <Text color={'#6C87AE'} w={'520px'} fontSize={'22px'} mt={'14px'}>Supplier recommendation in sales using Item based collaborative filtering method</Text>
                        <Button bgColor='#3A8EF6' color={'white'} colorfScheme="teal" mt={'30px'} w={'185px'} h={'55px'} fontSize={'18px'} rounded={'100px'} >GET STARTED</Button>
                    </Box>
                    <Box>
                        <Image src={martImage} border={'4px solid #3A8EF6'} rounded={'80%'} w={'520px'} h={'450px'} />
                    </Box>
                </Box>
                <Flex color={'white'} mx={'auto'} w={'920px'} gap={'35px'} justifyContent={'center'} alignItems={'center'} mt={'210px'}>
                    <Box bg={'#1678F2'} p={'16px'} rounded={'12px'} shadow={'lg'}>
                        <Text fontWeight={'semibold'} fontSize={'23px'}>14 hour service</Text>
                        <Text fontSize={'18px'}>lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </Box>
                    <Box bg={'#1678F2'} p={'16px'} rounded={'12px'} shadow={'lg'}>
                        <Text fontWeight={'semibold'} fontSize={'23px'}>15 years of experience</Text>
                        <Text fontSize={'18px'}>lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </Box>
                    <Box bg={'#1678F2'} p={'16px'} rounded={'12px'} shadow={'lg'}>
                        <Text fontWeight={'semibold'} fontSize={'23px'}>High quality items</Text>
                        <Text fontSize={'18px'}>lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </Box>
                </Flex>
            </Box>
            {/* about */}
            <Box w={'100vw'} h={'100vh'}>
                <Box display={'flex'} w={'90%'} mx={"auto"} justifyContent={'center'} alignItems={'center'} pt={'16rem'} gap={'8rem'}>
                    <Box>
                        <Image src={doc} w={'526px'} border={'4px solid #3A8EF6'} rounded={'30px'} h={'371.55px'} />
                    </Box>
                    <Box w={'580px'}>
                        <Text color={'#00BFA5'} fontSize={'28px'}>About Arkamart</Text>
                        <Text fontSize={'32px'} fontWeight={'bold'} mt={'10px'}>BUDGET SHOPPING SOLUTION AT AFFORDABLE PRICES</Text>
                        <Text color={'#6C87AE'} fontSize={'22px'} mt={'10px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
                        </Text>
                        <Button bgColor='#3A8EF6' w={'185px'} h={'55px'} color={'white'} colorScheme="teal" mt={'13px'} rounded={'100px'}>Contact Us</Button>
                    </Box>
                </Box>
            </Box>
            {/* method */}
            <Box w={'100vw'} h={'80vh'} bgColor={'#F2F7FF'}>
                <Box display={'flex'} w={'80%'} mx={"auto"} justifyContent={'center'} alignItems={'center'} gap={'7rem'} pt={'7rem'}>
                    <Box>
                        <Text color={'#00BFA5'} fontSize={'28px'}>Method</Text>
                        <Text fontSize={'32px'} fontWeight={'bold'} mt={'10px'} w={'456px'}>COLLABORATIVE FILTERING ALGORITHM BY ITEM</Text>
                        <Text color={'#6C87AE'} w={'456px'} fontSize={'22px'} mt={'10px'}>Collaborative filtering by item is a collaborative filtering technique that uses similarities between items to recommend items to users.
                        </Text>
                        <Button bgColor='#3A8EF6' w={'185px'} h={'55px'} color={'white'} colorScheme="teal" mt={'30px'} rounded={'100px'}>Read More</Button>
                    </Box>
                    <Box>
                        <Image src={visual} w={'633.5px'} rounded={'30px'} h={'541.71px'} />
                    </Box>
                </Box>
            </Box>
            <Box w={'100vw'} h={'auto'} bgColor={'#F2F7FF'}>
                <Box display={'flex'} w={'80%'} mx={"auto"} justifyContent={'space-between'} alignItems={'center'} flexDir={'column'}>
                    <Flex w={'80%'} mx={'auto'} justifyContent={'space-between'}>
                        <Text fontWeight={'semibold'} fontSize={'32px'}>Top Seller</Text>
                        <Text fontWeight={'semibold'} fontSize={'32px'}>view all</Text>
                    </Flex>
                    <Flex w={'80%'} mx={'auto'} mt={'30px'} gap={'68px'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
                        <Box w={'346px'} h={'464px'} rounded={'24px'} display={'flex'} justifyContent={'center'} flexDir={'column'} bgColor={'#FFFFFF'} padding={'28px'}>
                            <Image src={product1} w={'230px'} h={'180px'} mx={'auto'} />
                            <Text textAlign={'left'} fontWeight={'bold'} fontSize={'22px'} mt={'20px'}>Groceries</Text>
                            <Text textAlign={'left'} fontSize={'22px'} color={'#6C87AE'}>Various kinds of rice brands with affordable prices and quality</Text>
                            <Button bgColor='#3A8EF6' w={'full'} h={'56px'} color={'white'} colorScheme="teal" mt={'13px'} mx={'auto'} rounded={'100px'}>Book Now</Button>
                        </Box>
                        <Box w={'346px'} h={'464px'} rounded={'24px'} display={'flex'} justifyContent={'center'} flexDir={'column'} bgColor={'#FFFFFF'} padding={'28px'}>
                            <Image src={product1} w={'230px'} h={'180px'} mx={'auto'} />
                            <Text textAlign={'left'} fontWeight={'bold'} fontSize={'22px'} mt={'20px'}>Groceries</Text>
                            <Text textAlign={'left'} fontSize={'22px'} color={'#6C87AE'}>Various kinds of rice brands with affordable prices and quality</Text>
                            <Button bgColor='#3A8EF6' w={'full'} h={'56px'} color={'white'} colorScheme="teal" mt={'13px'} mx={'auto'} rounded={'100px'}>Book Now</Button>
                        </Box>
                        <Box w={'346px'} h={'464px'} rounded={'24px'} display={'flex'} justifyContent={'center'} flexDir={'column'} bgColor={'#FFFFFF'} padding={'28px'}>
                            <Image src={product1} w={'230px'} h={'180px'} mx={'auto'} />
                            <Text textAlign={'left'} fontWeight={'bold'} fontSize={'22px'} mt={'20px'}>Groceries</Text>
                            <Text textAlign={'left'} fontSize={'22px'} color={'#6C87AE'}>Various kinds of rice brands with affordable prices and quality</Text>
                            <Button bgColor='#3A8EF6' w={'full'} h={'56px'} color={'white'} colorScheme="teal" mt={'13px'} mx={'auto'} rounded={'100px'}>Book Now</Button>
                        </Box>
                        <Box w={'346px'} h={'464px'} rounded={'24px'} display={'flex'} justifyContent={'center'} flexDir={'column'} bgColor={'#FFFFFF'} padding={'28px'}>
                            <Image src={product1} w={'230px'} h={'180px'} mx={'auto'} />
                            <Text textAlign={'left'} fontWeight={'bold'} fontSize={'22px'} mt={'20px'}>Groceries</Text>
                            <Text textAlign={'left'} fontSize={'22px'} color={'#6C87AE'}>Various kinds of rice brands with affordable prices and quality</Text>
                            <Button bgColor='#3A8EF6' w={'full'} h={'56px'} color={'white'} colorScheme="teal" mt={'13px'} mx={'auto'} rounded={'100px'}>Book Now</Button>
                        </Box>
                        <Box w={'346px'} h={'464px'} rounded={'24px'} display={'flex'} justifyContent={'center'} flexDir={'column'} bgColor={'#FFFFFF'} padding={'28px'}>
                            <Image src={product1} w={'230px'} h={'180px'} mx={'auto'} />
                            <Text textAlign={'left'} fontWeight={'bold'} fontSize={'22px'} mt={'20px'}>Groceries</Text>
                            <Text textAlign={'left'} fontSize={'22px'} color={'#6C87AE'}>Various kinds of rice brands with affordable prices and quality</Text>
                            <Button bgColor='#3A8EF6' w={'full'} h={'56px'} color={'white'} colorScheme="teal" mt={'13px'} mx={'auto'} rounded={'100px'}>Book Now</Button>
                        </Box>
                        <Box w={'346px'} h={'464px'} rounded={'24px'} display={'flex'} justifyContent={'center'} flexDir={'column'} bgColor={'#FFFFFF'} padding={'28px'}>
                            <Image src={product1} w={'230px'} h={'180px'} mx={'auto'} />
                            <Text textAlign={'left'} fontWeight={'bold'} fontSize={'22px'} mt={'20px'}>Groceries</Text>
                            <Text textAlign={'left'} fontSize={'22px'} color={'#6C87AE'}>Various kinds of rice brands with affordable prices and quality</Text>
                            <Button bgColor='#3A8EF6' w={'full'} h={'56px'} color={'white'} colorScheme="teal" mt={'13px'} mx={'auto'} rounded={'100px'}>Book Now</Button>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box w={'100vw'} h={'80vh'} bgColor={'#F2F7FF'}>
                <Box display={'flex'} w={'80%'} mx={"auto"} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} pt={'12rem'}>
                    <Text fontSize={'32px'} fontWeight={'bold'} mt={'10px'} w={'676px'} textAlign={'center'}>What our great customers say about ARKAMART</Text>
                    <Text color={'#6C87AE'} fontSize={'22px'} mt={'10px'} w={'676px'} textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
                </Box>
            </Box>
        </>
    )
}

export default Home