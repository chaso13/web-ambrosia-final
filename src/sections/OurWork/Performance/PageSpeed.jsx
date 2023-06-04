/* eslint-disable react/prop-types */


export default function PageSpeed({ number }) {
    const fillColor = number >= 90 ? 'green' : number >= 50 ? 'yellow' : 'red' 
    return (
        <div className="flex justify-around w-32">
            <svg viewBox="0 0 36 36" className={`block max-w-[80%] max-h-[128px] fill-page-speed-fill-green stroke-[0.6] stroke-page-speed-fill-green`}>
                <path
                    className={`fill-page-speed-fill-green stroke-page-speed-fill-green opacity-20 stroke-[3.8]`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path style={{ strokeLinecap: 'round' }} className={`fill-none stroke-[2.8] animate-fill-circle`}
                    strokeDasharray={`${number}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="22" className={`stroke-page-speed-text-${fillColor} text-[0.7em] font-thin`} style={{ textAnchor: "middle" }}>
                    {number}
                </text>
            </svg>
        </div>
    )
}
