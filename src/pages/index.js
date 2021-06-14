import { getPrismicClient } from "../../prismic"
import Prismic from '@prismicio/client'
import Header from '../components/Header'

import { Flex, Heading, Text } from '@chakra-ui/react'

import { RichText } from "prismic-dom"

export default function Home({ advs }) {
  return (
    <div>
      <Header advs={advs} />

      {advs.map(adv => {
        return (
          <Flex direction="column" key={adv.slug}>
            <Heading>{adv.title}</Heading>
            <Text>{adv.description}</Text>
            {adv.body}
          </Flex>
        )
      })}
    </div>

  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'adv')]
  )

  const advs = response.results.map(adv => {
    return {
      slug: adv.uid,
      title: RichText.asText(adv.data.title),
      description: RichText.asText(adv.data.description),
      body: RichText.asHtml(adv.data.body),
    }
  })

  return {
    props: {
      advs,
    },
    revalidate: 1800,
  }
}