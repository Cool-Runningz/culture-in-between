import Head from "next/head"
import { Container } from "@/components/Container"

export default function Hosts() {
    //TODO: Add <Head> component and include <title> and <meta> tags within the Head
    //TODO: Add <Container> component to house the contents of the page

    return (
        <>
            <Head>
                <title>Hosts | Culture In Between</title>
                <meta name="og:title" content="Hosts | Culture In Between" />
                <meta name="og:description" content="Learn more about the hosts from the 'Culture In Between' podcast" />
            </Head>
            <article>
                Hosts Page
            </article>
        </>
    )
}