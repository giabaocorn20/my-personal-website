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
    const router = useRouter();
    // const homeColor = router.pathname === '/' ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff");
    // const blogColor = router.pathname.includes('/blog') ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff");
    // const cvColor = router.pathname.includes('/cv') ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff");
    // const projectsColor = router.pathname === '/projects' ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff");
  
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
            <NextLink href="/">
              <Button
                as="a"
                variant="ghost"
                p={[1, 2, 4]}
                fontWeight={router.pathname === '/' ? "bold" : "normal"}
                //color={homeColor}
                aria-label="Home"
              >
                Home
              </Button>
            </NextLink>
            <NextLink href="/about">
              <Button
                as="a"
                variant="ghost"
                p={[1, 2, 4]}
                fontWeight={router.pathname === '/about' ? "bold" : "normal"}
                //color={homeColor}
                aria-label="About me"
              >
                About me 
              </Button>
            </NextLink>
  
            <NextLink href="/blog">
              <Button
                as="a"
                variant="ghost"
                p={[1, 2, 4]}
                fontWeight={router.pathname.includes('/blog') ? "bold" : "normal"}
                //color={blogColor}
                aria-label="Blog"
              >
                Blog
              </Button> 
            </NextLink>
            <NextLink href="/CV">
              <Button
                as="a"
                variant="ghost"
                p={[1, 2, 4]}
                fontWeight={router.pathname.includes('/CV') ? "bold" : "normal"}
                //color={cvColor}
                aria-label="CV"
              >
                CV
              </Button> 
            </NextLink>
            <NextLink href="/projects">
              <Button
                as="a"
                variant="ghost"
                p={[1, 2, 4]}
                fontWeight={router.pathname.includes('/projects') ? "bold" : "normal"}
                //color={projectsColor}
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