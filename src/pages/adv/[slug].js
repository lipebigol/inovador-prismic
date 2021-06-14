import { getPrismicClient } from "../../../prismic"
import Prismic from '@prismicio/client'
import { RichText } from "prismic-dom";
import { Flex, Heading, Text, Icon, VStack, Image } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiFillCheckCircle } from 'react-icons/ai'
import Head from 'next/head'


export default function Adv({ adv }) {

    return (
        <>
            <Head>
                <title>{adv.title}</title>
            </Head>
            <Flex direction="column" maxW="700px" mx="auto" my="6" px={[4, 4, 0]}>
                <VStack align="stretch" spacing="2">
                    <Text fontSize="sm" letterSpacing="widest" align="center">ADVERTORIAL</Text>
                    <Heading>{adv.title}</Heading>
                    <Text pb="4" borderBottom="1px" borderColor="gray.300" fontSize="18">{adv.description}</Text>
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

                <Flex py="1" px="2" bgColor="green.100" align="center" border="1px" borderStyle="dotted" mt="6" >
                    <Icon as={AiFillCheckCircle} color="green.400" w={5} h={5} />
                    <Text fontSize="sm" ml="4">Atualização: <Text as="b" color="red.500">Descontos de até 60% ainda disponíveis.</Text> Promoção válida enquanto durarem as unidades que os fabricantes reservaram para a nossa matéria.</Text>
                </Flex>

                <Flex p={["4", "6"]} bgColor="gray.200" align="center" direction="column" mt="8">
                    <VStack spacing="6">

                        <Heading fontSize={["lg", "xl", "2xl"]} ml="4" textAlign="center">Atualização:Descontos de até 60% ainda disponíveis. Promoção válida enquanto durarem as unidades que os fabricantes reservaram para a nossa matéria.</Heading>
                        <Text fontSize="lg" textColor="red.500" as="b">Oportunidade válida.</Text>
                        <Image
                            boxSize="100%"
                            objectFit="contain"
                            src="https://noticias.inovador.club/_next/image?url=%2Fgreen-mask%2Fbanner.png&w=750&q=75"
                        />
                        <Text fontSize={["sm", "md"]}>Atenção: Restam poucas Unidades! Tenha vantagem com o nosso link exclusivo e ganhe até 60% de desconto e parcelamento em até 12x clicando no botão abaixo:</Text>
                        <Image
                            boxSize={["90%", "65%"]}
                            objectFit="contain"
                            src="https://noticias.inovador.club/_next/image?url=%2Fbotao.png&w=640&q=75"
                        />
                    </VStack>
                </Flex>

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
        fallback: true
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
    }

    return {
        props: {
            adv
        },
        revalidate: 1800,
    }
}