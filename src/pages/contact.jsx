import Head from "next/head"

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Culture In Between</title>
                <meta name="og:title" content="Contact | Culture In Between" />
                <meta name="description" content="Contact the 'Culture In Between' team" />
            </Head>
            <article className="py-16 lg:pt-28">
                <div className="isolate bg-white px-6 py-4 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                        <p className="mt-2 text-md leading-8 text-gray-600">
                            Feel free to reach out to us for any reason – whether it&apos;s to say hello, provide feedback,
                            request to be interviewed, or discuss sponsorship opportunities. We value your input and look forward to hearing from you.
                        </p>
                    </div>
                    <form action="https://usebasin.com/f/c23af71fdd9f" method="POST" className="mx-auto mt-14 max-w-xl">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    First name*
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        required
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cib-blue sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Last name*
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        required
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cib-blue sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email*
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cib-blue sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="category" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Category*
                                </label>
                                <select
                                    required
                                    id="category"
                                    name="category"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-cib-blue sm:text-sm sm:leading-6"
                                >
                                    <option>General Feedback</option>
                                    <option>Interested in being interviewed</option>
                                    <option>Sponsorships</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message*
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        required
                                        name="message"
                                        id="message"
                                        rows={7}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cib-blue sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <input type="hidden" name="_honeypot" />
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-cib-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cib-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cib-blue"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

            </article>
        </>
    )
}