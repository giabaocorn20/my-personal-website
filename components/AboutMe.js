//import Link from "next/link";
import {
  Heading,
  Box,
  Button,
  Flex,
  useColorModeValue,
  Text,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import bg from "../public/images/backgroundImage.PNG";
import Image from "next/image";
import Container from "./Container";
import React from "react";
import { motion } from "framer-motion";
import { MailIcon } from "./CustomIcons";
import { FaCoffee } from "react-icons/fa";
export default function AboutMe() {
  return (
    <Container>
      <Box>
        <Flex
          w="100%"
          flexDir={["column", "column", "row"]}
          align="center"
          px={4}
          mt={[8, 8, 16]}
          mb={8}
          maxW="1200px"
          mx="auto"
        >
          <Flex flexDir="column" w={["100%", "100%", "50%"]} mr={[0, 0, 4]}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Heading
                letterSpacing="tight"
                mb={4}
                as="h1"
                size="4xl"
                fontWeight={700}
              >
                About Me
              </Heading>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Text
                fontSize="xl"
                color={useColorModeValue("gray.600", "gray.500")}
                mb={6}
              >
                I have an insatiable curiosity and always continuously seeks to
                improve myself and the projects. Talk less, act more!
              </Text>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <Flex flexDir={["column", "row", "row"]}>
                <Link
                  href="giabao.corn20@gmail.com"
                  _hover={{ textDecor: "none" }}
                  w={["100%", "100%", null]}
                  mr={[0, 2, 2]}
                  mb={[2, 0, 0]}
                  isExternal
                >
                  <Button
                    w={["100%", "100%", null]}
                    colorScheme="red"
                    size="md"
                    rightIcon={<MailIcon fontSize="xl" />}
                    boxShadow={useColorModeValue(
                      "0px 8px 26px rgba(0, 0, 0, 0.2)",
                      "0px 8px 26px rgba(0, 0, 0, 0.7)"
                    )}
                    _hover={{
                      transform: "translateY(-2px)",
                      opacity: 0.85,
                      bgColor: useColorModeValue("red.400", "red.500"),
                    }}
                  >
                    Contact Me
                  </Button>
                </Link>
                <Link
                  href="https://www.buymeacoffee.com/giabaocornc"
                  _hover={{ textDecor: "none" }}
                  w={["100%", "100%", null]}
                  isExternal
                >
                  <Button
                    w={["100%", "100%", null]}
                    colorScheme="gray"
                    variant="outline"
                    size="md"
                    rightIcon={<FaCoffee fontSize="xl" />}
                    boxShadow={useColorModeValue(
                      "0px 8px 26px rgba(0, 0, 0, 0.2)",
                      "0px 8px 26px rgba(0, 0, 0, 0.7)"
                    )}
                    _hover={{
                      transform: "translateY(-2px)",
                      bgColor: useColorModeValue("gray.100", "gray.800"),
                    }}
                  >
                    Buy me a Coffee
                  </Button>
                </Link>
              </Flex>
            </motion.div>
          </Flex>
          <Box mt={[10, 10, 0]} w={["100%", "100%", "50%"]}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.6 }}
            >
              <AspectRatio ratio={16 / 9}>
                <figure className="position-relative">
                  <Image
                    alt="penguin"
                    src={bg}
                    className="img-fluid rounded"
                    width={400}
                    height={300}
                  />
                </figure>
              </AspectRatio>
            </motion.div>
          </Box>
        </Flex>
      </Box>
      <div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          <Text fontsize = "3xl" className="text-dark lh-lg py-5">
            Welcome, friend. If you don't know me, I am Bao. You can call me
            Jason as well. I'm currently an electrical engineering student at
            Toronto Metropolitan University (TMU). I love study about nature esp
            ecially Physics and Maths. I used to specialize in Maths during my
            secondary school years. As a kid, I have always facsinated with
            engineering topics like chip design, software engineering, etc. So
            when it come to choose major for University, I knew exactly what I
            had to choose!
            <br /> <br />
            Besides school, I often spend my time learning new skills such as
            new programming languages or new technology. I sometimes do some DIY
            projects that I can find online. It is a fun activity to do when I
            am free!. I love working out, drinking coffee and Coke, eating
            croissant and walking around the city at night. My favourite anime
            of all time is Neon Genesis Evagalion.
            <br /> <br />
            The design of the website is by @ inspired by @benjamincarlson. 
            This website is intended to be my personal website where I put my
            CV, blog, and in the future, my prjects. Please, feel free to have a
            look around my website!
          </Text>
        </motion.div>
      </div>
    </Container>
  );
}
