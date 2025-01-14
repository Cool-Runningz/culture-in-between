import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

function NavItem({ href, children }) {
    let isActive = useRouter().pathname === href

    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    'relative block px-3 py-2 transition',
                    isActive
                        ? 'text-cib-blue'
                        : 'hover:text-cib-blue'
                )}
            >
                {children}
                {isActive && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0" />
                )}
            </Link>
        </li>
    )
}

export default function Navigation(props) {
    return (
        <nav {...props}>
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
                <NavItem href="/hosts">Hosts</NavItem>
                <NavItem href="/contact">Contact</NavItem>
                <NavItem href="/blog">Blog</NavItem>
                {/*  <NavItem href="/projects">Map</NavItem> */}
            </ul>
        </nav>
    )
}
