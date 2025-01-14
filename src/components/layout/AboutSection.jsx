import { TinyWaveFormIcon } from '@/components/icons/WavesIcons'
import { DESCRIPTION } from '@/util/constants'
import clsx from 'clsx'

export default function AboutSection(props) {
    return (
        <section {...props}>
            <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
                <TinyWaveFormIcon
                    colors={['fill-cib-green', 'fill-cib-blue']}
                    className="h-2.5 w-2.5"
                />
                <span className="ml-2.5">Description</span>
            </h2>
            <p
                className={clsx(
                    'mt-2 text-base leading-7 text-slate-700',
                )}
            >
                {DESCRIPTION}
            </p>
        </section>
    )
}