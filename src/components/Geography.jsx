import React from 'react'
import { colors, useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import { geoFeatures } from '../data/mockGeoFeatures'

const Geography = () => {


    const data = [
        {
            "id": "AFG",
            "value": 321670
        },
        {
            "id": "AGO",
            "value": 306861
        },
        {
            "id": "ALB",
            "value": 86662
        },
        {
            "id": "ARE",
            "value": 783751
        },
        {
            "id": "ARG",
            "value": 296325
        },
        {
            "id": "ARM",
            "value": 352337
        },
        {
            "id": "ATA",
            "value": 672675
        },
        {
            "id": "ATF",
            "value": 327349
        },
        {
            "id": "AUT",
            "value": 479374
        },
        {
            "id": "AZE",
            "value": 843221
        },
        {
            "id": "BDI",
            "value": 744654
        },
        {
            "id": "BEL",
            "value": 417659
        },
        {
            "id": "BEN",
            "value": 820940
        },
        {
            "id": "BFA",
            "value": 109002
        },
        {
            "id": "BGD",
            "value": 172710
        },
        {
            "id": "BGR",
            "value": 893167
        },
        {
            "id": "BHS",
            "value": 694910
        },
        {
            "id": "BIH",
            "value": 15052
        },
        {
            "id": "BLR",
            "value": 582828
        },
        {
            "id": "BLZ",
            "value": 452011
        },
        {
            "id": "BOL",
            "value": 839742
        },
        {
            "id": "BRN",
            "value": 274639
        },
        {
            "id": "BTN",
            "value": 908163
        },
        {
            "id": "BWA",
            "value": 831385
        },
        {
            "id": "CAF",
            "value": 737131
        },
        {
            "id": "CAN",
            "value": 778580
        },
        {
            "id": "CHE",
            "value": 387416
        },
        {
            "id": "CHL",
            "value": 404906
        },
        {
            "id": "CHN",
            "value": 645498
        },
        {
            "id": "CIV",
            "value": 666188
        },
        {
            "id": "CMR",
            "value": 634100
        },
        {
            "id": "COG",
            "value": 261374
        },
        {
            "id": "COL",
            "value": 299912
        },
        {
            "id": "CRI",
            "value": 923810
        },
        {
            "id": "CUB",
            "value": 230204
        },
        {
            "id": "-99",
            "value": 781776
        },
        {
            "id": "CYP",
            "value": 59723
        },
        {
            "id": "CZE",
            "value": 496966
        },
        {
            "id": "DEU",
            "value": 880614
        },
        {
            "id": "DJI",
            "value": 356178
        },
        {
            "id": "DNK",
            "value": 947369
        },
        {
            "id": "DOM",
            "value": 432597
        },
        {
            "id": "DZA",
            "value": 447623
        },
        {
            "id": "ECU",
            "value": 961826
        },
        {
            "id": "EGY",
            "value": 507846
        },
        {
            "id": "ERI",
            "value": 292429
        },
        {
            "id": "ESP",
            "value": 103082
        },
        {
            "id": "EST",
            "value": 23048
        },
        {
            "id": "ETH",
            "value": 710636
        },
        {
            "id": "FIN",
            "value": 990217
        },
        {
            "id": "FJI",
            "value": 314009
        },
        {
            "id": "FLK",
            "value": 74492
        },
        {
            "id": "FRA",
            "value": 222203
        },
        {
            "id": "GAB",
            "value": 767007
        },
        {
            "id": "GBR",
            "value": 712984
        },
        {
            "id": "GEO",
            "value": 991794
        },
        {
            "id": "GHA",
            "value": 335315
        },
        {
            "id": "GIN",
            "value": 451608
        },
        {
            "id": "GMB",
            "value": 332176
        },
        {
            "id": "GNB",
            "value": 894731
        },
        {
            "id": "GNQ",
            "value": 961836
        },
        {
            "id": "GRC",
            "value": 397418
        },
        {
            "id": "GTM",
            "value": 946225
        },
        {
            "id": "GUY",
            "value": 94317
        },
        {
            "id": "HND",
            "value": 769608
        },
        {
            "id": "HRV",
            "value": 34738
        },
        {
            "id": "HTI",
            "value": 483080
        },
        {
            "id": "HUN",
            "value": 173469
        },
        {
            "id": "IDN",
            "value": 728406
        },
        {
            "id": "IND",
            "value": 631893
        },
        {
            "id": "IRL",
            "value": 344982
        },
        {
            "id": "IRN",
            "value": 517554
        },
        {
            "id": "IRQ",
            "value": 226847
        },
        {
            "id": "ISL",
            "value": 426522
        },
        {
            "id": "ISR",
            "value": 233481
        },
        {
            "id": "ITA",
            "value": 226647
        },
        {
            "id": "JAM",
            "value": 329983
        },
        {
            "id": "JOR",
            "value": 953711
        },
        {
            "id": "JPN",
            "value": 405734
        },
        {
            "id": "KAZ",
            "value": 355538
        },
        {
            "id": "KEN",
            "value": 135978
        },
        {
            "id": "KGZ",
            "value": 512020
        },
        {
            "id": "KHM",
            "value": 636059
        },
        {
            "id": "OSA",
            "value": 971411
        },
        {
            "id": "KWT",
            "value": 391238
        },
        {
            "id": "LAO",
            "value": 286072
        },
        {
            "id": "LBN",
            "value": 766722
        },
        {
            "id": "LBR",
            "value": 275041
        },
        {
            "id": "LBY",
            "value": 424381
        },
        {
            "id": "LKA",
            "value": 639926
        },
        {
            "id": "LSO",
            "value": 444179
        },
        {
            "id": "LTU",
            "value": 384985
        },
        {
            "id": "LUX",
            "value": 37043
        },
        {
            "id": "LVA",
            "value": 773342
        },
        {
            "id": "MAR",
            "value": 877505
        },
        {
            "id": "MDA",
            "value": 777409
        },
        {
            "id": "MDG",
            "value": 436148
        },
        {
            "id": "MEX",
            "value": 56294
        },
        {
            "id": "MKD",
            "value": 715741
        },
        {
            "id": "MLI",
            "value": 974232
        },
        {
            "id": "MMR",
            "value": 150845
        },
        {
            "id": "MNE",
            "value": 644226
        },
        {
            "id": "MNG",
            "value": 986793
        },
        {
            "id": "MOZ",
            "value": 991337
        },
        {
            "id": "MRT",
            "value": 103735
        },
        {
            "id": "MWI",
            "value": 421041
        },
        {
            "id": "MYS",
            "value": 99284
        },
        {
            "id": "NAM",
            "value": 175352
        },
        {
            "id": "NCL",
            "value": 93490
        },
        {
            "id": "NER",
            "value": 395099
        },
        {
            "id": "NGA",
            "value": 807593
        },
        {
            "id": "NIC",
            "value": 557962
        },
        {
            "id": "NLD",
            "value": 772770
        },
        {
            "id": "NOR",
            "value": 316453
        },
        {
            "id": "NPL",
            "value": 582044
        },
        {
            "id": "NZL",
            "value": 34435
        },
        {
            "id": "OMN",
            "value": 354396
        },
        {
            "id": "PAK",
            "value": 893790
        },
        {
            "id": "PAN",
            "value": 91229
        },
        {
            "id": "PER",
            "value": 809442
        },
        {
            "id": "PHL",
            "value": 611291
        },
        {
            "id": "PNG",
            "value": 223137
        },
        {
            "id": "POL",
            "value": 41489
        },
        {
            "id": "PRI",
            "value": 217494
        },
        {
            "id": "PRT",
            "value": 380518
        },
        {
            "id": "PRY",
            "value": 952730
        },
        {
            "id": "QAT",
            "value": 254921
        },
        {
            "id": "ROU",
            "value": 462213
        },
        {
            "id": "RUS",
            "value": 480080
        },
        {
            "id": "RWA",
            "value": 169936
        },
        {
            "id": "ESH",
            "value": 836792
        },
        {
            "id": "SAU",
            "value": 222403
        },
        {
            "id": "SDN",
            "value": 427830
        },
        {
            "id": "SDS",
            "value": 171851
        },
        {
            "id": "SEN",
            "value": 612316
        },
        {
            "id": "SLB",
            "value": 640349
        },
        {
            "id": "SLE",
            "value": 177276
        },
        {
            "id": "SLV",
            "value": 670944
        },
        {
            "id": "ABV",
            "value": 272970
        },
        {
            "id": "SOM",
            "value": 554286
        },
        {
            "id": "SRB",
            "value": 493782
        },
        {
            "id": "SUR",
            "value": 823622
        },
        {
            "id": "SVK",
            "value": 47739
        },
        {
            "id": "SVN",
            "value": 611017
        },
        {
            "id": "SWZ",
            "value": 948860
        },
        {
            "id": "SYR",
            "value": 369346
        },
        {
            "id": "TCD",
            "value": 201247
        },
        {
            "id": "TGO",
            "value": 123756
        },
        {
            "id": "THA",
            "value": 327274
        },
        {
            "id": "TJK",
            "value": 67696
        },
        {
            "id": "TKM",
            "value": 5425
        },
        {
            "id": "TLS",
            "value": 892548
        },
        {
            "id": "TTO",
            "value": 522722
        },
        {
            "id": "TUN",
            "value": 828825
        },
        {
            "id": "TUR",
            "value": 739714
        },
        {
            "id": "TWN",
            "value": 130284
        },
        {
            "id": "TZA",
            "value": 528805
        },
        {
            "id": "UGA",
            "value": 734858
        },
        {
            "id": "UKR",
            "value": 419369
        },
        {
            "id": "URY",
            "value": 622104
        },
        {
            "id": "USA",
            "value": 114086
        },
        {
            "id": "UZB",
            "value": 71706
        },
        {
            "id": "VEN",
            "value": 235699
        },
        {
            "id": "VNM",
            "value": 801047
        },
        {
            "id": "VUT",
            "value": 745446
        },
        {
            "id": "PSE",
            "value": 482889
        },
        {
            "id": "YEM",
            "value": 569072
        },
        {
            "id": "ZAF",
            "value": 915624
        },
        {
            "id": "ZMB",
            "value": 993985
        },
        {
            "id": "ZWE",
            "value": 711434
        },
        {
            "id": "KOR",
            "value": 243715
        }
    ]

    return (
        <>
            <div>
                <div className="main-section">
                    <h2>Geography Chart</h2>
                    <span className='barchart'>Simple Geography chart</span>

                    <div className="card" style={{
                        width: "100%", height: "70vh", justifyContent: "center",
                        display: "flex", textAlign: "center", alignItems: "center"
                    }}>
                        <div className="bar-container" style={{ height: "70vh", width: "90%", }}>

                            <ResponsiveChoropleth
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
                                features={geoFeatures.features}
                                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                domain={[0, 1000000]}
                                unknownColor="#666666"
                                label="properties.name"
                                valueFormat=".2s"
                                projectionTranslation={[0.5, 0.5]}
                                projectionRotation={[0, 0, 0]}
                                borderWidth={0.5}
                                borderColor="#dddedf"
                                fill={[
                                    {
                                        match: {
                                            id: 'CAN'
                                        },
                                        id: 'dots'
                                    },
                                    {
                                        match: {
                                            id: 'CHN'
                                        },
                                        id: 'lines'
                                    },
                                    {
                                        match: {
                                            id: 'ATA'
                                        },
                                        id: 'gradient'
                                    }
                                ]}
                                legends={[
                                    {
                                        anchor: 'bottom-left',
                                        direction: 'column',
                                        justify: true,
                                        translateX: 20,
                                        translateY: -100,
                                        itemsSpacing: 0,
                                        itemWidth: 94,
                                        itemHeight: 18,
                                        itemDirection: 'left-to-right',
                                        itemTextColor: '#444444',
                                        itemOpacity: 0.85,
                                        symbolSize: 18,
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemTextColor: '#000000',
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

export default Geography
