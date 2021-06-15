import { Flex, Box, VStack, Text, HStack } from "@chakra-ui/react";
import Link from 'next/link'

export default function Footer() {
    return (
        <Flex direction="column" bgColor="gray.300" py="8" mt="6">
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

                </VStack>
            </Box>



        </Flex>
    )
}