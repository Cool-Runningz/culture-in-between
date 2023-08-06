import Head from "next/head"
import { Container } from "@/components/Container"

export default function Hosts() {
    //TODO: Add <Head> component and include <title> and <meta> tags within the Head

    return (
        <>
            <Head>
                <title>Hosts | Culture In Between</title>
                <meta name="og:title" content="Hosts | Culture In Between" />
                <meta name="og:description" content="Learn more about the hosts from the 'Culture In Between' podcast" />
            </Head>
            <article
                className="py-10 sm:py-12"
            >
                <Container>
                    <div className=" text-center prose prose-slate">
                        <h1>Meet The Hosts</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Alyssa and Brianna are two American-born sisters and podcasters with Jamaican parents. <a href="https://alyssaholland.com/" target="_blank" rel="noopener noreferrer" className="leading-6 text-cib-blue">Alyssa</a> is a software developer and
                            <a href="https://blog.alyssaholland.me/" target="_blank" rel="noopener noreferrer" className="leading-6 text-cib-blue"> tech/productivity blogger</a> with a love of LEGO.
                            Brianna is an opera singer and ESL educator who has a deep passion for learning about new cultures.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            The sisters were raised in Miami, Florida on a steady diet of advice doled out in the form of Bob Marley lyrics and out-of-context Bible quotes. Their mother is of Chinese descent
                            (yes, there are Chinese-Jamaicans!) and both of their parents have mixed racial backgrounds which has always been a source of some confusion for the girls as they go through life in
                            a society that often wants you to fit into a neat, predetermined box. Nevertheless, growing up in the U.S. alongside the vibrance and diversity of their family&apos;s Jamaican culture
                            has only enriched both of their lives beyond measure.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            In 2022, Alyssa and Brianna decided to start a podcast together and, after much deliberation, eventually realized that the best theme for their new endeavor would be to
                            talk to people who grew up with immigrant parents or in a different culture from their parents&apos; culture, just like them. They finally began to make their idea a reality
                            in the summer of 2023 and reached out to friends and colleagues about being guests. What they ended up with was hours and hours of captivating conversations about culture,
                            identity, and finding one&apos;s place in a complicated world. The podcast has become an opportunity to find the similarities between seemingly disparate cultural backgrounds
                            and to share the sometimes overlooked story of those who have to navigate what it means to be the products of immigration but not the immigrants themselves.
                            Alyssa and Brianna hope that the stories that are shared on this podcast resonate with listeners around the world.
                        </p>
                    </div>
                </Container>
            </article>
        </>
    )
}