import React from 'react'
import "./dashboard.css"
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import GroupIcon from '@mui/icons-material/Group';
import TrafficIcon from '@mui/icons-material/Traffic';
import Barchart from '../../components/Barchart';
// import Linechart from '../../components/Linechart';
import Piechart from '../../components/Piechart';
import Geography from '../../components/Geography';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Box, Typography, IconButton } from '@mui/material';
import { ResponsiveLine } from '@nivo/line'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveChoropleth } from '@nivo/geo'

const Dashboard = () => {

    const piedata = [
        {
            "id": "ruby",
            "label": "ruby",
            "value": 114,
            "color": "hsl(115, 70%, 50%)"
        },
        {
            "id": "stylus",
            "label": "stylus",
            "value": 113,
            "color": "hsl(54, 70%, 50%)"
        },
        {
            "id": "sass",
            "label": "sass",
            "value": 442,
            "color": "hsl(49, 70%, 50%)"
        },
        {
            "id": "go",
            "label": "go",
            "value": 497,
            "color": "hsl(210, 70%, 50%)"
        },
        {
            "id": "css",
            "label": "css",
            "value": 598,
            "color": "hsl(138, 70%, 50%)"
        }
    ]

    const Linedata = [
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
            <div className='dashboard'>
                <div className='dashboard-home'>
                    <div className="dashboard-left">
                        <div className="dashboard-left-container">
                            <div className="dash-left-title">
                                <h2 className="title">DASHBOARD</h2>
                                <span className="desc">Welcome to your dashboard</span>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-right">
                        <div className="dash-container-section">
                            <button className='downloads-buton'>DWONLOADS REPORTS</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='widgetLarge'>
                <div className="widget-main-section">
                    <div className="widget-large-section">
                        <div className="large-section">
                            <div className="widget-large-left">
                                <div className="left-container">
                                    <EmailIcon className='email-icons' />
                                    <h5 className="card-left-desc">12,366</h5>
                                    <span className="email-title">Email Sent</span>
                                </div>
                            </div>
                            <div className="widget-large-right">
                                <div className="right-card-container">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png" alt="" className='card-img' />
                                    <div className="stats">
                                        <span className="stats-number">+14%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-large-section">
                        <div className="large-section">
                            <div className="widget-large-left">
                                <div className="left-container">
                                    <PointOfSaleIcon className='email-icons' />
                                    <h5 className="card-left-desc">433,335</h5>
                                    <span className="email-title">Sales Obtained</span>
                                </div>
                            </div>
                            <div className="widget-large-right">
                                <div className="right-card-container">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png" alt="" className='card-img' />
                                    <div className="stats">
                                        <span className="stats-number">+32%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-large-section">
                        <div className="large-section">
                            <div className="widget-large-left">
                                <div className="left-container">
                                    <GroupIcon className='email-icons' />
                                    <h5 className="card-left-desc">32,366</h5>
                                    <span className="email-title">New Client</span>
                                </div>
                            </div>
                            <div className="widget-large-right">
                                <div className="right-card-container">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png" alt="" className='card-img' />
                                    <div className="stats">
                                        <span className="stats-number">+5%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-large-section">
                        <div className="large-section">
                            <div className="widget-large-left">
                                <div className="left-container">
                                    <TrafficIcon className='email-icons' />
                                    <h5 className="card-left-desc">1,335,135</h5>
                                    <span className="email-title">Trafic inbound</span>
                                </div>
                            </div>
                            <div className="widget-large-right">
                                <div className="right-card-container">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png" alt="" className='card-img' />
                                    <div className="stats">
                                        <span className="stats-number">+40%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Grid & Charts */}

            <Box display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="190px"
                gap="10px"
                padding=" 5px 20px">

                <Box gridColumn="span 8" gridRow="span 1" backgroundColor="#0E1F36">
                    <Box mt="10px" padding="0 20px" justifyContent="space-between" alignItems="center" display="flex">
                        <Box>
                            <Typography variant="h5" fontWeight="500" fontSize="12px" color="lightgray">
                                Revenue Generated
                            </Typography>
                            <Typography variant="h5" fontWeight="500" fontSize="12px" color="#13DF9B">
                                $59, 234,32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon sx={{ fontSize: "20px", color: "#13DF9B" }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box padding="0px 20px">
                        <div className="card" style={{ width: "100%", height: "20vh", justifyContent: "center", display: "flex", textAlign: "center", alignItems: "center" }}>
                            <div className="bar-container" style={{ height: "30vh", width: "100%" }}>

                                <ResponsiveLine
                                    data={Linedata}
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
                                                    strokeWidth: 1
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
                                        // legend: 'transportation',
                                        legendOffset: 36,
                                        legendPosition: 'middle'
                                    }}
                                    axisLeft={{
                                        orient: 'left',
                                        tickValues: 3,
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        // legend: 'count',
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

                    </Box>

                </Box>

                <Box gridColumn=" span 4" gridRow="span 1" backgroundColor="#0E1F36" overflow="auto">
                    <Box display="flex" alignItem="center"
                        borderBottom={`4px solid gray`} color="lightgray" p="15px">
                        <Typography color="lightgray" variant="h5" fontWeight="500" fontSize="12px">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {/* <Box>
                        {mockTransaction.map((transaction, i => (
                            <Box key={`${transaction.txId}-${i}`}
                                display="flex" justifyContent="center"
                                borderBottom={`4px solid gray`} p="15px" >
                                <Box>
                                    <Typography color="green" variant="h5" fontWeight="500">
                                        {transaction.txId}
                                    </Typography>
                                    <Typography color="lightgray">
                                        {transaction.user}
                                    </Typography>
                                </Box>
                                <Box color="green">{transaction.date}</Box>
                                <Box color="lightgray" p="5px 10px" borderRadius="4px">
                                    ${transaction.cost}

                                </Box>
                            </Box>

                        )))}
                    </Box> */}
                </Box>

                <Box gridColumn="span 4" gridRow="span 3" backgroundColor="#0E1F36">
                    <Typography padding="10px 20px" fontWeight="500" fontSize="12px">
                        Sales
                        <Box>
                            <div className="card" style={{ justifyContent: "center", display: "flex", textAlign: "center", alignItems: "center" }}>
                                <div className="bar-container" style={{ height: "190px", width: "100%", }}>
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
                                        margin={{ top: 20, right: 90, bottom: 50, left: 30 }}
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
                                        // axisBottom={{
                                        //     tickSize: 5,
                                        //     tickPadding: 5,
                                        //     tickRotation: 0,
                                        //     legend: 'country',
                                        //     legendPosition: 'middle',
                                        //     legendOffset: 32
                                        // }}
                                        // axisLeft={{
                                        //     tickSize: 5,
                                        //     tickPadding: 5,
                                        //     tickRotation: 0,
                                        //     legend: 'food',
                                        //     legendPosition: 'middle',
                                        //     legendOffset: -40
                                        // }}
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
                                                itemHeight: 12,
                                                itemDirection: 'left-to-right',
                                                itemOpacity: 0.85,
                                                symbolSize: 10,
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

                        </Box>
                    </Typography>

                </Box>
                <Box gridColumn="span 4" gridRow="span 3" backgroundColor="#0E1F36">
                    <Typography padding="10px 20px" fontWeight="500" fontSize="12px">
                        PaiChart
                        <Box>
                            <div className="card" style={{ justifyContent: "center", display: "flex", textAlign: "center", alignItems: "center" }}>
                                <div className="bar-container" style={{ height: "190px", width: "100%", }}>
                                    <ResponsivePie
                                        data={piedata}
                                        margin={{ top: 30, right: 50, bottom: 50, left: 50 }}
                                        innerRadius={0.5}
                                        padAngle={0.7}
                                        cornerRadius={3}
                                        activeOuterRadiusOffset={8}
                                        colors={{ scheme: 'nivo' }}
                                        borderColor={{
                                            from: 'color',
                                            modifiers: [
                                                [
                                                    'darker',
                                                    0.2
                                                ]
                                            ]
                                        }}
                                        arcLinkLabelsSkipAngle={10}
                                        arcLinkLabelsTextOffset={5}
                                        arcLinkLabelsTextColor="#dedede"
                                        arcLinkLabelsThickness={2}
                                        arcLinkLabelsColor={{ from: 'color' }}
                                        enableArcLabels={false}
                                        arcLabelsSkipAngle={10}
                                        arcLabelsTextColor={{
                                            from: 'color',
                                            modifiers: [
                                                [
                                                    'darker',
                                                    2
                                                ]
                                            ]
                                        }}
                                        defs={[
                                            {
                                                id: 'dots',
                                                type: 'patternDots',
                                                background: 'inherit',
                                                color: 'rgba(255, 255, 255, 0.3)',
                                                size: 4,
                                                padding: 1,
                                                stagger: true
                                            },
                                            {
                                                id: 'lines',
                                                type: 'patternLines',
                                                background: 'inherit',
                                                color: 'rgba(255, 255, 255, 0.3)',
                                                rotation: -45,
                                                lineWidth: 6,
                                                spacing: 10
                                            }
                                        ]}
                                        legends={[
                                            {
                                                anchor: 'bottom',
                                                direction: 'row',
                                                justify: false,
                                                translateX: 0,
                                                translateY: 56,
                                                itemsSpacing: 0,
                                                itemWidth: 100,
                                                itemHeight: 18,
                                                itemTextColor: '#999',
                                                itemDirection: 'left-to-right',
                                                itemOpacity: 1,
                                                symbolSize: 18,
                                                symbolShape: 'circle',
                                                effects: [
                                                    {
                                                        on: 'hover',
                                                        style: {
                                                            itemTextColor: '#000'
                                                        }
                                                    }
                                                ]
                                            }
                                        ]}
                                    />
                                </div>
                            </div>
                        </Box>
                    </Typography>
                </Box>
                <Box gridColumn="span 4" gridRow="span 3" backgroundColor="#0E1F36">
                    <Typography padding="10px 20px" fontWeight="500" fontSize="12px">
                        Compaign
                        <Box>
                            <div className="card" style={{ justifyContent: "center", display: "flex", textAlign: "center", alignItems: "center" }}>
                                <div className="bar-container" style={{ height: "190px", width: "100%", }}>
                                    <div className="widget">
                                        <div className="right-card">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png" alt="" className='card-img-second' />
                                            <div className="statss">
                                                {/* <span className="statss-number-and">revenue generated </span> */}
                                                <br />
                                                <span className="statss-number">+14%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Typography>
                </Box>
            </Box>


        </>
    )
}

export default Dashboard
