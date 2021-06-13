import { Flex, Heading, Text } from '@chakra-ui/react'
import { RichText } from 'prismic-dom'

export default function Header({ advs }) {
    return (
        <Flex direction="column">
            {advs.map(adv => {
                return (
                    <Flex direction="column" key={adv.slug}>
                        <Heading>{adv.title}</Heading>
                        <Text>{adv.description}</Text>
                        {adv.body}
                    </Flex>
                )
            })}

        </Flex>
    )
}