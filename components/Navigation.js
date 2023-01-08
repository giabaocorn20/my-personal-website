import {
    Button,
    Flex,
    Box,
    useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import DarkModeSwitch from '../components/DarkModeSwitch'
import { motion } from "framer-motion"

const Navigation = () => {
    const router = useRouter()

    return (
        <Flex
            justify="center"
            flexDirection="row"
            minWidth="356px"
            width="100%"
            bgColor={useColorModeValue("rgb(248, 250, 252)", "gray.900")}
            as="nav"
            px={4}
            py={2}
            pos="sticky"
            zIndex={10}
            top={0}
        >
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .7 }}
            >
                <Box maxWidth="1200px">
                <NextLink href="/" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            p={[1, 2, 4]}
                            fontWeight={router.pathname === '/' ? "bold" : "normal"}
                            color={router.pathname === '/' ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff")}
                            aria-label="Home"
                        >
                            Home
                        </Button>
                    </NextLink>
                    
                    <NextLink href="/blog" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            p={[1, 2, 4]}
                            fontWeight={router.pathname.includes('/blog') ? "bold" : "normal"}
                            color={router.pathname.includes('/blog') ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff")}
                            aria-label="Blog"
                        >
                            Blog
                        </Button> 
                    </NextLink>
                    <NextLink href="/CV" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            p={[1, 2, 4]}
                            fontWeight={router.pathname.includes('/cv') ? "bold" : "normal"}
                            color={router.pathname.includes('/cv') ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff")}
                            aria-label="Blog"
                        >
                            CV
                        </Button> 
                    </NextLink>
                    <NextLink href="/projects" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            p={[1, 2, 4]}
                            fontWeight={router.pathname === '/projects' ? "bold" : "normal"}
                            color={router.pathname === '/projects' ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff")}
                            aria-label="Projects"
                        >
                            Projects
                        </Button>
                    </NextLink>
                
                    
                </Box>
            </motion.div>
        </Flex>
    )
}

export default Navigation