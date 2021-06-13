import { getPrismicClient } from "../../prismic"
import Prismic from '@prismicio/client'
import Header from '../components/Header'

import { RichText } from "prismic-dom"

export default function Home({ advs }) {
  return (
    <div>
      <Header advs={advs} />
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