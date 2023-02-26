import React from 'react'
import { NextSeo } from 'next-seo'
import {
    Link,
    Text,
    Flex,
    Heading,
    useColorMode,
} from '@chakra-ui/react'
import { motion } from "framer-motion"
import Container from '../../components/Container'
import ProjectListFull from '../../components/ProjectListFull'

const url = ''
const title = 'Projects – Jason Nguyen'
const description = 'Here are some of the open source projects and GitHub repos I am working on.'

const Projects = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.600',
        dark: 'gray.400'
    }

    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
    }

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description
                }}
            />
            <Container>
                <Flex
                    flexDirection="column"
                    maxWidth="1000px"
                    alignSelf={[null, "center"]}
                >
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: .4 }}
                    >
                        <Heading letterSpacing="tight" my={4} as="h1" size="2xl">
                            Projects
                        </Heading>
                      
                        <ProjectListFull />
                    </motion.div>
                </Flex>
            </Container>
        </>
    )
}

export default Projects