import Head from 'next/head'
import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Politica() {
    return (
        <>

            <Header />

            <Flex direction="column" maxW="700px" mx="auto" px={["4", "4", "0"]}>
                <Head>
                    <title>Política de Privacidade e Cookies</title>
                </Head>

                <Flex direction="column">
                    <VStack align="stretch" spacing="4">

                        <Heading fontSize="2xl" textAlign="center">
                            Política de Privacidade e Cookies
                        </Heading>

                        <Heading fontSize="2xl">SEÇÃO 1 - O QUE FAREMOS COM ESTA INFORMAÇÃO?</Heading>

                        <Text>Quando você realiza alguma transação com nossa loja, como parte do processo de compra e venda, coletamos as informações pessoais que você nos dá tais como: nome, e-mail, telefone e endereço.</Text>

                        <Text>Quando você acessa nosso site, também recebemos automaticamente o protocolo de internet do seu computador, endereço de IP, a fim de obter informações que nos ajudam a aprender sobre seu navegador e sistema operacional.</Text>

                        <Text>Email Marketing será realizado apenas caso você permita. Nestes emails você poderá receber notícia sobre nossa loja, novos produtos e outras atualizações.</Text>

                        <Heading fontSize="2xl">SEÇÃO 2 - CONSENTIMENTO</Heading>

                        <Text>Como vocês obtêm meu consentimento?</Text>

                        <Text>Quando você fornece informações pessoais como nome, telefone e endereço, para completar: uma transação, verificar seu cartão de crédito, fazer um pedido, providenciar uma entrega ou retornar uma compra. Após a realização de ações entendemos que você está de acordo com a coleta de dados para serem utilizados pela nossa empresa.</Text>

                        <Text>Se pedimos por suas informações pessoais por uma razão secundária, como marketing, vamos lhe pedir diretamente por seu consentimento, ou lhe fornecer a oportunidade de dizer não.</Text>

                        <Text>E caso você queira retirar seu consentimento, como proceder?</Text>

                        <Text>Se após você nos fornecer seus dados, você mudar de ideia, você pode retirar o seu consentimento para que possamos entrar em contato, para a coleção de dados contínua, uso ou divulgação de suas informações, a qualquer momento, entrando em contato conosco em <strong>contato@inovador.club</strong></Text>

                        <Heading fontSize="2xl">SEÇÃO 3 - DIVULGAÇÃO</Heading>

                        <Text>Podemos divulgar suas informações pessoais caso sejamos obrigados pela lei para fazê-lo ou se você violar nossos Termos de Serviço.</Text>

                        <Heading fontSize="2xl">SEÇÃO 4 - SERVIÇOS DE TERCEIROS</Heading>

                        <Text>No geral, os fornecedores terceirizados usados por nós irão apenas coletar, usar e divulgar suas informações na medida do necessário para permitir que eles realizem os serviços que eles nos fornecem.</Text>

                        <Text>Entretanto, certos fornecedores de serviços terceirizados, tais como gateways de pagamento e outros processadores de transação de pagamento, têm suas próprias políticas de privacidade com respeito à informação que somos obrigados a fornecer para eles de suas transações relacionadas com compras.</Text>

                        <Text>Para esses fornecedores, recomendamos que você leia suas políticas de privacidade para que você possa entender a maneira na qual suas informações pessoais serão usadas por esses fornecedores.</Text>

                        <Text>Em particular, lembre-se que certos fornecedores podem ser localizados em ou possuir instalações que são localizadas em jurisdições diferentes que você ou nós. Assim, se você quer continuar com uma transação que envolve os serviços de um fornecedor de serviço terceirizado, então suas informações podem tornar-se sujeitas às leis da(s) jurisdição(ões) nas quais o fornecedor de serviço ou suas instalações estão localizados.</Text>

                        <Text>Como um exemplo, se você está localizado no Canadá e sua transação é processada por um gateway de pagamento localizado nos Estados Unidos, então suas informações pessoais usadas para completar aquela transação podem estar sujeitas a divulgação sob a legislação dos Estados Unidos, incluindo o Ato Patriota.</Text>

                        <Text>Uma vez que você deixe o site da nossa loja ou seja redirecionado para um aplicativo ou site de terceiros, você não será mais regido por essa Política de Privacidade ou pelos Termos de Serviço do nosso site.</Text>

                        <Text><strong>Links</strong></Text>

                        <Text>Quando você clica em links na nossa loja, eles podem lhe direcionar para fora do nosso site. Não somos responsáveis pelas práticas de privacidade de outros sites e lhe incentivamos a ler as declarações de privacidade deles.</Text>

                        <Heading fontSize="2xl">SEÇÃO 5 - SEGURANÇA</Heading>

                        <Text>Para proteger suas informações pessoais, tomamos precauções razoáveis e seguimos as melhores práticas da indústria para nos certificar que elas não serão perdidas inadequadamente, usurpadas, acessadas, divulgadas, alteradas ou destruídas.</Text>

                        <Text>Se você nos fornecer as suas informações de cartão de crédito, essa informação é criptografada usando tecnologia "secure socket layer" (SSL) e armazenada com uma criptografia AES-256. Embora nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro, nós seguimos todos os requisitos da PCI-DSS e implementamos padrões adicionais geralmente aceitos pela indústria.</Text>

                        <Heading fontSize="2xl">SEÇÃO 6 - ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE</Heading>

                        <Text>Reservamos o direito de modificar essa política de privacidade a qualquer momento, então por favor, revise-a com frequência. Alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação no site. Se fizermos alterações de materiais para essa política, iremos notificá-lo aqui que eles foram atualizados, para que você tenha ciência sobre quais informações coletamos, como as usamos, e sob que circunstâncias, se alguma, usamos e/ou divulgamos elas.</Text>

                        <Text>Se nossa loja for adquirida ou fundida com outra empresa, suas informações podem ser transferidas para os novos proprietários para que possamos continuar a vender produtos para você.</Text>

                    </VStack>

                </Flex>
            </Flex>

            <Footer />
        </>
    )
}