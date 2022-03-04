const contenedorBarChart = document
.querySelector("#bar-chart")
.getContext("2d");

const barChart = new Chart(contenedorBarChart,{
    type: "bar",
    data:{
        labels: [
            "lunes",
            "martes",
            "miercoles",
            "jueves",
            "viernes",
            "sabado",
            "domingo",
        ],
        datasets:[{
            label:"numero de usuarios por dia",
            data:[20,40,10,100,50,75,200],
            borderWidth:2,
            borderColor:"#acc",
            backgroundColor:["#cad5","#aac","#ba1","#dda","#bbd","#ffa","#cc7"],
        },],
    },
});

const containerDoughnutChart = document.querySelector ("#doughmut-chart").getContext("2d");
const dataForChart={
    labels:["Compus","Celu","Refris","Parlante"],
    datasets:[{
        label:"Productos Electronicos",
        data:[100,230,520,267],
        borderWidth:2,
        borderColor:"#acc",
        backgroundColor:["#cad5","#aac","#ba1","#dda","#bbd","#ffa","#cc7"],
    },],
};
const config ={
    type:"doughnut",
    data: dataForChart,
}

const donutChart = new Chart(containerDoughnutChart, config);

const containerLineChart=document.querySelector("#linea-chart")
const configLineal = {
    type: "line",
    data: dataForChart,
};
const lineChart = new Chart(containerLineChart, configLineal);

const containerBubbleChart = document.querySelector("#bubble-chart").getContext("2d");
dataForChart.datasets[0].data=[
    {
        x:20,
        y:30,
        r:15,
    },
    {
        x:40,
        y:10,
        r:11,
    },
    {
        x:20,
        y:40,
        r:61,
    },    
];
const configBubble ={
    type: "bubble",
    data: dataForChart,
};
const bubbleChart= new Chart (containerBubbleChart, configBubble);

const containerPolarChart = document.querySelector ("#polar-chart").getContext("2d");
dataForChart.datasets[0].data=[300,149,321,678];
const configPolar ={
    type: "polarArea",
    data: dataForChart,
} ;
const polarChart= new Chart (containerPolarChart, configPolar);

const containerRadarChart=document.querySelector("#radar-chart").getContext("2d");
dataForChart.datasets[0].data=[300,123,157,390];

const configRadar={
    type: "radar",
    data: dataForChart,
} ;
const radarChart= new Chart (containerRadarChart, configRadar);

const containerScatterChart = document.querySelector("#scatter-chart").getContext("2d");
dataForChart.datasets[0].data=[
    {
        x:20,
        y:30,
        r:15,
    },
    {
        x:40,
        y:10,
        r:10,
    },
    
    {
        x:70,
        y:30,
        r:40,
    },
    
    {
        x:90,
        y:30,
        r:20,
    },
    
    ];
    
    
    const configScatter={
        type: "scatter",
        data: dataForChart,
    } ;
    const scatterChart= new Chart (containerScatterChart, configScatter);