import { getPrismicClient } from "../../../prismic"
import Prismic from '@prismicio/client'
import { RichText } from "prismic-dom";
import { Flex, Heading, Text, Icon, VStack, Image, HStack, Box } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiFillCheckCircle } from 'react-icons/ai'
import Head from 'next/head'
import Link from 'next/link'


export default function Adv({ adv }) {

    return (
        <>
            <Head>
                <title>{adv.title}</title>
            </Head>
            <Flex direction="column" maxW="700px" mx="auto" my="6" px={[4, 4, 0]} >
                <VStack align="stretch" spacing="2">
                    <Text fontSize="sm" letterSpacing="widest" align="center" color="gray.400">ADVERTORIAL</Text>
                    <Heading>{adv.title}</Heading>
                    <Text pb="4" borderBottom="1px" borderColor="gray.300" fontSize="18" color="gray.500">{adv.description}</Text>
                    <Flex align="center">
                        <Icon as={FaStar} color="yellow.400" />
                        <Icon as={FaStar} color="yellow.400" />
                        <Icon as={FaStar} color="yellow.400" />
                        <Icon as={FaStar} color="yellow.400" />
                        <Icon as={FaStarHalfAlt} color="yellow.400" />
                        <Text ml="2" color="gray.500">{`(${adv.votos} votos)`}</Text>
                    </Flex>
                    <div dangerouslySetInnerHTML={{ __html: RichText.asHtml(adv.body), }} className="body-content" />

                </VStack>

                {adv.button.map(buttonInfo => (
                    <Link href={buttonInfo.buttonLink} key={buttonInfo.buttonText}>
                        <a>

                            <Box bgGradient="linear(to-t, #008c00, #4ba614,)" w="100%" p="3" mt="6" mb="12" borderRadius="md" border="1px" borderColor="#34740e" color="white" fontSize="26px" fontWeight="bold" textAlign="center" _hover={{ bg: "#008c00" }}>{buttonInfo.buttonText}</Box>

                        </a>
                    </Link>

                ))}

            </Flex>

            <Flex direction="column" bgColor="gray.600" py="8" px="4" color="white" >
                <Box maxW="700px" mx="auto" fontSize="xs" textAlign="center">
                    <VStack spacing="4">
                        <Text>© Copyright 2021 Portal Inovador.Club</Text>
                        <Flex>
                            <HStack textDecoration="underline" fontWeight="bold">
                                <Link href="/politica-de-privacidade"><a>Política de Privacidade</a></Link>
                                <Text>|</Text>
                                <Link href="/termos-de-uso"><a>Termos de Uso</a></Link>
                            </HStack>
                        </Flex>
                        <div dangerouslySetInnerHTML={{ __html: RichText.asHtml(adv.footer), }} className="footer" />

                    </VStack>
                </Box>



            </Flex>
        </>
    )
}


export const getStaticPaths = async () => {
    const prismic = getPrismicClient();
    const advs = await prismic.query(
        [Prismic.Predicates.at('document.type', 'adv')]
    )

    const paths = advs.results.map(adv => {
        return {
            params: {
                slug: adv.uid
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const prismic = getPrismicClient();
    const { slug } = context.params;
    const response = await prismic.getByUID('adv', (slug), {})

    const adv = {
        slug: response.uid,
        title: RichText.asText(response.data.title),
        description: RichText.asText(response.data.description),
        body: response.data.body,
        votos: response.data.votos,
        footer: response.data.footer,
        // banner: response.data.banner.map(bannerInfo => {
        //     return {
        //         bannerImage: bannerInfo.banner_image.url,
        //         bannerTitle: bannerInfo.banner_title,
        //         bannerLink: bannerInfo.banner_link.url,
        //     }
        // }),
        button: response.data.button.map(buttonInfo => {
            return {
                buttonText: buttonInfo.button_text,
                buttonLink: buttonInfo.button_link.url,
            }
        })
    }

    return {
        props: {
            adv
        },
        revalidate: 1800,
    }
}