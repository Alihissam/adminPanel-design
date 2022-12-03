import React from 'react'
import { colors, useTheme } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'

const Barchart = ({ isDashboard = false }) => {

    const theme = useTheme();

    const data = [
        {
            "country": "AD",
            "hot dog": 77,
            "hot dogColor": "hsl(270, 70%, 50%)",
            "burger": 192,
            "burgerColor": "hsl(54, 70%, 50%)",
            "sandwich": 160,
            "sandwichColor": "hsl(151, 70%, 50%)",
            "kebab": 132,
            "kebabColor": "hsl(356, 70%, 50%)",
            "fries": 151,
            "friesColor": "hsl(280, 70%, 50%)",
            "donut": 167,
            "donutColor": "hsl(67, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 63,
            "hot dogColor": "hsl(232, 70%, 50%)",
            "burger": 121,
            "burgerColor": "hsl(178, 70%, 50%)",
            "sandwich": 9,
            "sandwichColor": "hsl(24, 70%, 50%)",
            "kebab": 108,
            "kebabColor": "hsl(227, 70%, 50%)",
            "fries": 76,
            "friesColor": "hsl(188, 70%, 50%)",
            "donut": 169,
            "donutColor": "hsl(29, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 168,
            "hot dogColor": "hsl(320, 70%, 50%)",
            "burger": 36,
            "burgerColor": "hsl(169, 70%, 50%)",
            "sandwich": 15,
            "sandwichColor": "hsl(162, 70%, 50%)",
            "kebab": 168,
            "kebabColor": "hsl(241, 70%, 50%)",
            "fries": 168,
            "friesColor": "hsl(280, 70%, 50%)",
            "donut": 8,
            "donutColor": "hsl(192, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 159,
            "hot dogColor": "hsl(285, 70%, 50%)",
            "burger": 66,
            "burgerColor": "hsl(166, 70%, 50%)",
            "sandwich": 182,
            "sandwichColor": "hsl(193, 70%, 50%)",
            "kebab": 32,
            "kebabColor": "hsl(276, 70%, 50%)",
            "fries": 50,
            "friesColor": "hsl(184, 70%, 50%)",
            "donut": 61,
            "donutColor": "hsl(167, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 142,
            "hot dogColor": "hsl(169, 70%, 50%)",
            "burger": 4,
            "burgerColor": "hsl(136, 70%, 50%)",
            "sandwich": 39,
            "sandwichColor": "hsl(252, 70%, 50%)",
            "kebab": 46,
            "kebabColor": "hsl(317, 70%, 50%)",
            "fries": 43,
            "friesColor": "hsl(14, 70%, 50%)",
            "donut": 65,
            "donutColor": "hsl(306, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 4,
            "hot dogColor": "hsl(225, 70%, 50%)",
            "burger": 135,
            "burgerColor": "hsl(78, 70%, 50%)",
            "sandwich": 194,
            "sandwichColor": "hsl(162, 70%, 50%)",
            "kebab": 8,
            "kebabColor": "hsl(31, 70%, 50%)",
            "fries": 36,
            "friesColor": "hsl(167, 70%, 50%)",
            "donut": 158,
            "donutColor": "hsl(113, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 15,
            "hot dogColor": "hsl(91, 70%, 50%)",
            "burger": 160,
            "burgerColor": "hsl(165, 70%, 50%)",
            "sandwich": 105,
            "sandwichColor": "hsl(180, 70%, 50%)",
            "kebab": 193,
            "kebabColor": "hsl(331, 70%, 50%)",
            "fries": 83,
            "friesColor": "hsl(357, 70%, 50%)",
            "donut": 182,
            "donutColor": "hsl(158, 70%, 50%)"
        }
    ]


    return (
        <>
            <div>
                <div className="main-section">
                    <h2>BarChart</h2>
                    <span className='barchart'>Simple Bar Chart</span>

                    <div className="card" style={{ justifyContent: "center", display: "flex", textAlign: "center", alignItems: "center" }}>
                        <div className="bar-container" style={{ height: "70vh", width: "90%" }}>
                            <ResponsiveBar
                                data={data}
                                theme={{
                                    axis: {
                                        domain: {
                                            line: {
                                                fill: "lightgray"
                                            }
                                        },
                                        legend: {
                                            text: {
                                                fill: "lightgray"
                                            }
                                        },
                                        ticks: {
                                            line: {
                                                fill: "lightgray",
                                                strokeWidht: 1
                                            },
                                            text: {
                                                fill: "lightgray"
                                            }
                                        }
                                    },
                                    legends: {
                                        text: {
                                            fill: "lightgray"
                                        }
                                    }
                                }}
                                keys={[
                                    'hot dog',
                                    'burger',
                                    'sandwich',
                                    'kebab',
                                    'fries',
                                    'donut'
                                ]}
                                indexBy="country"
                                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                padding={0.3}
                                valueScale={{ type: 'linear' }}
                                indexScale={{ type: 'band', round: true }}
                                colors={{ scheme: 'nivo' }}
                                defs={[
                                    {
                                        id: 'dots',
                                        type: 'patternDots',
                                        background: 'inherit',
                                        color: '#38bcb2',
                                        size: 4,
                                        padding: 1,
                                        stagger: true
                                    },
                                    {
                                        id: 'lines',
                                        type: 'patternLines',
                                        background: 'inherit',
                                        color: '#eed312',
                                        rotation: -45,
                                        lineWidth: 6,
                                        spacing: 10
                                    }
                                ]}
                                borderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.6
                                        ]
                                    ]
                                }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: isDashboard ? undefined : 'country',
                                    legendPosition: 'middle',
                                    legendOffset: 32
                                }}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: isDashboard ? undefined : 'food',
                                    legendPosition: 'middle',
                                    legendOffset: -40
                                }}
                                enableLabel={false}
                                labelSkipWidth={12}
                                labelSkipHeight={12}
                                labelTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.6
                                        ]
                                    ]
                                }}
                                legends={[
                                    {
                                        dataFrom: 'keys',
                                        anchor: 'bottom-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: 120,
                                        translateY: 0,
                                        itemsSpacing: 2,
                                        itemWidth: 100,
                                        itemHeight: 20,
                                        itemDirection: 'left-to-right',
                                        itemOpacity: 0.85,
                                        symbolSize: 20,
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                                role="application"
                                ariaLabel="Nivo bar chart demo"
                                barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Barchart
