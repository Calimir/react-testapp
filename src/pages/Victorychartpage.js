import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryStack, VictoryTheme } from 'victory';
import '../CSS/victorychart.css';

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];

const data2 = [
    { naam: "a", moeilijk: 1, leuk: 5 },
    { naam: "b", moeilijk: 2, leuk: 4 },
    { naam: "c", moeilijk: 3, leuk: 3 },
    { naam: "d", moeilijk: 4, leuk: 2 },
    { naam: "e", moeilijk: 5, leuk: 1 }
]

function Victorychartpage() {
    return (
        <div className="victoryContainer">
            <div>
                <h2>Victorychart</h2>
            </div>
            <div>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={20}>

                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                    />

                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (`$${x / 1000}k`)}
                    />

                    <VictoryBar
                        data={data}
                        // data accessor for x values
                        x="quarter"
                        // data accessor for y values
                        y="earnings"
                    />
                </VictoryChart>

                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={20}>

                    <VictoryGroup offset={20}>

                        
                            <VictoryBar
                                style={{ data: { fill: "#e76f51" } }}
                                data={data2}
                                x="naam"
                                y="leuk"
                            />
                        
                            <VictoryBar
                                style={{ data: { fill: "#264653" } }}
                                data={data2}
                                x="naam"
                                y="moeilijk"
                            />
                        
                    </VictoryGroup>
                </VictoryChart>
            </div>
        </div>);
}


//<VictoryStack>
//    <VictoryBar
//        style={{ data: { fill: "#e76f51" } }}
//        data={data2}
//        x="naam"
//        y="leuk"
//    />
//</VictoryStack>

//<VictoryBar
//    style={{ data: { fill: "#264653" } }}
//    data={data2}
//    x="naam"
//    y="moeilijk"
///>

//    <VictoryChart domainPadding={{ x: 50 }} width={400} height={400}>
//        <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
//            <VictoryStack colorScale={"red"}>
//                {getBarData().map((data, index) => {
//                    return <VictoryBar key={index} data={data} />;
//                })}
//            </VictoryStack>
//            <VictoryStack colorScale={"green"}>
//                {getBarData().map((data, index) => {
//                    return <VictoryBar key={index} data={data} />;
//                })}
//            </VictoryStack>
//            <VictoryStack colorScale={"blue"}>
//                {getBarData().map((data, index) => {
//                    return <VictoryBar key={index} data={data} />;
//                })}
//            </VictoryStack>
//        </VictoryGroup>
//    </VictoryChart>

export default Victorychartpage;