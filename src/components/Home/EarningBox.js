import React, { useState } from "react";
import { Grid, Box, Typography, Select, MenuItem } from "@mui/material";
import { PieChart, Pie, Sector, Cell } from "recharts";
import profitgraph from '../../Images/ProfitGraph.png'
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";

const data = [
    { name: "Monday", value: 400, color: "#1BBB3C", earning: "$2334" },
    { name: "Tuesday", value: 500, color: "#FBC557", earning: "$2543" },
    { name: "Wednesday", value: 800, color: "#1BBB3C", earning: "$4433" },
    { name: "Thursday", value: 300, color: "#12556B", earning: "$2876" },
    { name: "Friday", value: 200, color: "#FBC557", earning: "$2398" },
    { name: "Saturday", value: 300, color: "#1BBB3C", earning: "$2784" },
    { name: "Sunday", value: 150, color: "#12556B", earning: "$7834" },
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
        earning,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 8) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 1;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text
                x={cx}
                y={cy}
                dy={4}
                textAnchor="middle"
                fontSize={10}
                style={{ display: "flex", flexDirection: "row" }}
            >
                {payload.name}
                {/* {payload.earning}  */}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`${earning}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(${(percent * 100).toFixed(1)}%)`}
            </text>
        </g>
    );
};

const EarningBox = () => {
    const [day, setDay] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [state, setState] = useState({
        activeIndex: 0,
    });
    const handleChange = (event) => {
        setDay(event.target.value);
    };

    const onPieEnter = (_, index) => {
        setState({
            activeIndex: index,
        });
    };
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Box
                sx={{
                    boxShadow: 1,
                    height: "180px",
                    bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#101010" : "#fff",
                    borderRadius: 2,
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    p: 1.5,
                    // marginLeft: "10px",
                }}
            >
                <div className="employeviewheader">
                    <p >Earning</p>
                    <div className="employeviewtime" style={{ fontSize: "10px" }}>
                        Last 7 days <ArrowDropDown />
                    </div>
                </div>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        style={{ display: "flex", flexDirection: "row" }}
                    >

                        <Box>

                            {/* <Typography variant="body1" color="initial">
                                Earning
                            </Typography> */}
                            <PieChart
                                width={220}
                                height={200}
                                style={{
                                    marginTop: "-25px",
                                    marginLeft: "-20px",
                                    fontSize: "10px",
                                }}
                            >
                                <Pie
                                    activeIndex={state.activeIndex}
                                    activeShape={renderActiveShape}
                                    data={data}
                                    innerRadius={30}
                                    outerRadius={40}
                                    startAngle={30}
                                    endAngle={450}
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                >
                                    {data.map((entry, index) => (
                                        <Cell fill={data[index].color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} id="earningdiv">
                        <Box style={{ display: "flex", flexDirection: "column" }}>
                            {/* <div>
                                <select value={state.selection} onChange={handleChange}>
                                    <MenuItem value={1} primaryText="English" />
                                    <MenuItem value={2} primaryText="Spanish" />
                                    <MenuItem value={3} primaryText="French" />
                                    <MenuItem value={3} primaryText="French" />
                                </select>
                            </div> */}
                            <Box id="earningprofit"
                                width={97}
                                style={{
                                    borderRadius: "5px",
                                    height: "30px",
                                    backgroundColor: "rgba(27,186,60,.8)",
                                    padding: "4px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItem: "center",
                                    marginTop: "5rem"
                                }}
                            >
                                <img src={profitgraph} alt="" width={28} />
                                <Typography color="white" fontSize={12} mt={1} style={{ display: "flex" }}>
                                    Profit <b>50%</b>
                                </Typography>
                            </Box>
                            <p
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "end",
                                    marginTop: "1rem"
                                }}
                            >
                                View All <ArrowRight />
                            </p>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default EarningBox;
