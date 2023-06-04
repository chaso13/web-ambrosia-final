import loadable from "@loadable/component"

const Insight = loadable(() => import("./Insight"))

export default function Insights() {
    const numbers = [
        { num: 97, ide: 'Performance' },
        { num: 92, ide: 'Accessibility' },
        { num: 98, ide: 'Best Practices' },
        { num: 97, ide: 'SEO' }
    ]
    return (
        <div className="flex flex-row">
            {
                numbers.map((numbers, index) => (
                    <Insight key={index} number={numbers.num} identifier={numbers.ide} />
                ))
            }
        </div>
    )
}