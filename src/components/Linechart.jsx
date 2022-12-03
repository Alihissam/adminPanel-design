import React from 'react'
import { colors, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'

const Linechart = (isDashboard = false) => {

    const data = [
        {
            "id": "japan",
            "color": "hsl(137, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 195
                },
                {
                    "x": "helicopter",
                    "y": 154
                },
                {
                    "x": "boat",
                    "y": 30
                },
                {
                    "x": "train",
                    "y": 69
                },
                {
                    "x": "subway",
                    "y": 22
                },
                {
                    "x": "bus",
                    "y": 209
                },
                {
                    "x": "car",
                    "y": 175
                },
                {
                    "x": "moto",
                    "y": 62
                },
                {
                    "x": "bicycle",
                    "y": 280
                },
                {
                    "x": "horse",
                    "y": 100
                },
                {
                    "x": "skateboard",
                    "y": 80
                },
                {
                    "x": "others",
                    "y": 298
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(168, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 189
                },
                {
                    "x": "helicopter",
                    "y": 78
                },
                {
                    "x": "boat",
                    "y": 284
                },
                {
                    "x": "train",
                    "y": 178
                },
                {
                    "x": "subway",
                    "y": 153
                },
                {
                    "x": "bus",
                    "y": 50
                },
                {
                    "x": "car",
                    "y": 206
                },
                {
                    "x": "moto",
                    "y": 160
                },
                {
                    "x": "bicycle",
                    "y": 89
                },
                {
                    "x": "horse",
                    "y": 269
                },
                {
                    "x": "skateboard",
                    "y": 205
                },
                {
                    "x": "others",
                    "y": 27
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(156, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 206
                },
                {
                    "x": "helicopter",
                    "y": 115
                },
                {
                    "x": "boat",
                    "y": 144
                },
                {
                    "x": "train",
                    "y": 35
                },
                {
                    "x": "subway",
                    "y": 236
                },
                {
                    "x": "bus",
                    "y": 256
                },
                {
                    "x": "car",
                    "y": 50
                },
                {
                    "x": "moto",
                    "y": 261
                },
                {
                    "x": "bicycle",
                    "y": 69
                },
                {
                    "x": "horse",
                    "y": 38
                },
                {
                    "x": "skateboard",
                    "y": 209
                },
                {
                    "x": "others",
                    "y": 298
                }
            ]
        },


    ]

    return (
        <>
            <div>
                <div className="main-section">
                    <h2>Line Chart</h2>
                    <span className='barchart'>Simple Line chart</span>

                    <div className="card" style={{ width: "100%", height: "70vh", justifyContent: "center", display: "flex", textAlign: "center", alignItems: "center" }}>
                        <div className="bar-container" style={{ height: "70vh", width: "90%" }}>

                            <ResponsiveLine
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
                                    },
                                    tooltip: {
                                        container: {
                                            fill: "0000FF"
                                        }
                                    }
                                }}

                                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                                xScale={{ type: 'point' }}
                                yScale={{
                                    type: 'linear',
                                    min: 'auto',
                                    max: 'auto',
                                    stacked: true,
                                    reverse: false
                                }}
                                yFormat=" >-.2f"
                                curve="natural"
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    orient: 'bottom',
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'transportation',
                                    legendOffset: 36,
                                    legendPosition: 'middle'
                                }}
                                axisLeft={{
                                    orient: 'left',
                                    tickValues: 5,
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'count',
                                    legendOffset: -40,
                                    legendPosition: 'middle'
                                }}
                                enableGridX={false}
                                enableGridY={false}
                                pointSize={10}
                                pointColor={{ theme: 'background' }}
                                pointBorderWidth={2}
                                pointBorderColor={{ from: 'serieColor' }}
                                pointLabelYOffset={-12}
                                areaOpacity={0}
                                useMesh={true}
                                legends={[
                                    {
                                        anchor: 'bottom-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: 100,
                                        translateY: 0,
                                        itemsSpacing: 0,
                                        itemDirection: 'left-to-right',
                                        itemWidth: 80,
                                        itemHeight: 20,
                                        itemOpacity: 0.75,
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Linechart
