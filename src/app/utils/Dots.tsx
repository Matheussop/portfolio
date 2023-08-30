const radius = 2;
const gap = 16;

export function Dots({ width = 5, height = 5, color = '#ABB2BF' }) {
    const svgWidth = (radius * 2 + gap) * width - gap
    const svgHeight = (radius * 2 + gap) * height - gap

    return (
        <svg width="100%" fill={color} className="dots" viewBox={"0 0 "+ svgWidth + " " + svgHeight}>
            {new Array(width)
            .fill(new Array(height).fill(""))
            .map((arr, i) =>
                arr.map((_: any, j: number) => {
                    const x = radius + i * (radius * 2 + gap);
                    const y = radius + j * (radius * 2 + gap);
                    return (
                        <circle key={""+ x + "" + y} cx={x} cy={y} r={radius}  />
                    )
                })
            )}
        </svg>
    )
};
