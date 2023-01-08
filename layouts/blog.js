import React, { useEffect, useState } from 'react'
import { parseISO, format } from 'date-fns'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar,
    Link,
    Box,
    Image,
    Icon,
} from '@chakra-ui/react'
import { TwitterIcon, GitHubIcon } from '../components/CustomIcons'
import { useRouter } from 'next/router'
import Container from '../components/Container'
import { marked } from 'marked'
import BlogSeo from '../components/blog/BlogSeo'



 const tweetUrl = (slug) =>
     `https://twitter.com/intent/tweet?text=https://jabaocorn/blog${slug} by @jabaocorn`
//need to redined tweetUrl 
export default function BlogLayout({ children, frontMatter, content }) {
    const { colorMode } = useColorMode()
    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
    }
    const router = useRouter()
    const slug = router.asPath.replace('/blog', '')


    const [width, setWidth] = useState(1)
    const handleScroll = () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        setWidth(scrollPercentRounded)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <>
            <Box h={1} as="div" bgGradient="linear(to-r, blue.200, gray.500)" position="sticky" top={0} zIndex={100} w={`${width}%`} transition="width .5s ease-in-out"></Box>
            <Container>
                {/* <BlogSeo url={`https://benjamincarlson.io/blog${slug}`} {...frontMatter} /> */}
                <Stack
                    as="article"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                    w="100%"
                    px={2}
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        w="100%"
                    >
                        <Heading letterSpacing="tight" mb={2} mt={4} as="h1" size="2xl">
                            {frontMatter.title}
                        </Heading>
                        <Flex
                            justify="space-between"
                            align={['initial', 'center']}
                            direction={['column', 'row']}
                            mt={2}
                            w="100%"
                            mb={4}
                        >
                            <Flex align="center">
                                <Avatar
                                    size="sm"
                                    name="Jason Nguyen"
                                    src="../images/portrait.jpeg"
                                    mr={2}
                                />
                                <Text fontSize="sm" color={textColor[colorMode]}>
                                    {frontMatter.by}
                                    {'Jason Nguyen / '}
                                    {format(parseISO(frontMatter.date_pub), 'MMMM dd, yyyy')}
                                </Text>
                            </Flex>
                            * <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                            {frontMatter.readingTime.text}
                            {` • `}
                        </Text> 
                        </Flex>
                        {frontMatter.Image != '' ? <Image src={frontMatter.image} alt={frontMatter.alt} borderRadius={3} /> : null}
                    </Flex>
                    {/* <BlogAd /> */}
                    {children}
                    <Box>
                        <Link href={tweetUrl(slug)} isExternal>
                            <Icon as={TwitterIcon} size="18px" mr={2} />
                            {'Share on Twitter'}
                        </Link>
        
                    </Box>
                </Stack>
                
            </Container>
        </>
    )
}
