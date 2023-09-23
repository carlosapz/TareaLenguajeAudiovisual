// class SimpleGraph {
//     drawBarChart(data: number[]) {
//         console.log("Drawing bar chart:", data);
//         // Lógica para dibujar gráficos de barra
//     }

//     // Se agregaron con el tiempo
//     drawPieChart(data: number[]) {
//         console.log("Drawing pie chart:", data);
//         // Lógica adaptada para dibujar gráficos de pastel
//     }

//     drawRadialChart(data: number[]) {
//         console.log("Drawing radial chart:", data);
//         // Lógica adaptada para dibujar gráficos radiales
//     }

//     // ... otras visualizaciones adaptadas.
// }


interface Chart {
    draw(data: number[]): void;
}

class BarChart implements Chart {
    draw(data: number[]) {
        console.log("Drawing bar chart:", data);
        /* Logica para dibujar graficos de barra */
    }
}

class PieChart implements Chart {
    draw(data: number[]) {
        console.log("Drawing pie chart:", data);
        /* Logica para dibujar graficos de pastel */
    }
}

class RadialChart implements Chart {
    draw(data: number[]) {
        console.log("Drawing radial chart:", data);
        /* Logica para dibujar graficos radiales */
    }
}

class ChartDrawer {
    private chart: Chart;

    constructor(chart: Chart) {
        this.chart = chart;
    }

    drawChart(data: number[]) {
        this.chart.draw(data);
    }
}


const data = [10, 20, 30, 40, 50];

const barChartDrawer = new ChartDrawer(new BarChart());
barChartDrawer.drawChart(data);

const pieChartDrawer = new ChartDrawer(new PieChart());
pieChartDrawer.drawChart(data);

const radialChartDrawer = new ChartDrawer(new RadialChart());
radialChartDrawer.drawChart(data);
