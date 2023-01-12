import React from 'react'
import NextLink from 'next/link'
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/react'
import fetcher from '../../scripts/fetcher'
import useSWR from 'swr'
import * as formatNum from 'comma-number'

const BlogPost = ({ title, excerpt, href, date_pub }) => {
    const { colorMode } = useColorMode()
    const secondaryTextColor = {
        light: 'gray.600',
        dark: 'gray.400'
    }

    const { data } = useSWR(`/api/page-views?id=${href}`, fetcher)


    return (
        <NextLink href={`blog/${href}`} passHref>
            <Link w="100%" _hover={{ textDecoration: 'none' }}>
                <Box mb={10} display="block" width="100%">
                    <Flex
                        width="100%"
                        align="flex-start"
                        justifyContent="space-between"
                        flexDirection={['column', 'row']}
                    >
                        <Flex flexDirection="column" align="flex-start" justifyContent="start" width="100%">
                            <Heading size="md" as="h3" mb={1} fontWeight="medium">
                                {title}
                            </Heading>
                        </Flex>

                        {/* <Text
                            color="gray.500"
                            minWidth="105px"
                            textAlign={['left', 'right']}
                            mb={[4, 0]}
                        >
                            helo
                        </Text> */}

                    </Flex>
                    <Text color={secondaryTextColor[colorMode]}>{excerpt}</Text>
                    <Text fontSize='xs' color={secondaryTextColor[colorMode]}>{date_pub}</Text>
                </Box>
            </Link>
        </NextLink>
    )
}

export default BlogPost