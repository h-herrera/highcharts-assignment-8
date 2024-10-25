Highcharts.chart('bar', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Region Visiting Florida Per Year',
        align: 'left'
    },
    subtitle: {
        text:
            'Source: <a target="_blank" ' +
            'href="https://www.visitflorida.org/resources/research/">Visitflorida.org</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['2020', '2021', '2022', '2023'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Visitors (in Mil.)'
        },
    },
   tooltip: {
   //valueSuffix: ' (million)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'North America',
            data: [1.53, 0.974, 3.14, 3.75]
        },
        {
            name: 'South America',
            data: [0.967, 1.9, 2.53, 2.99]
        },{
        name: 'Europe',
        data: [0.655, 0.529, 2.47, 2.79]
        },
        {
        name: 'Caribbean',
        data: [0.273, 0.489, 0.698, 0.826]
        }
    ]
});

Highcharts.chart('line', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Florida Visitors Per Yearly Quarter'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.visitflorida.org/resources/research/" ' +
            'target="_blank">Visitflorida.org</a>'
    },
    xAxis: {
        categories: [
            'Q1', 'Q2', 'Q3', 'Q4'
        ]
    },
    yAxis: {
        title: {
            text: 'Number of Visitors (in Mil.)'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true 
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: '2020',
        data: [
            30.38, 9.70, 20.24, 19.08,
        ]
    }, {
        name: '2021',
        data: [
            25.74, 31.92, 32.85, 31.33
        ]
    }, {
    	 name: '2022',
       data: [
       36.39, 33.51, 34.55, 32.96
       ]
    }, {
      name: '2023',
      data: [
      40.13, 33.65, 34.00, 32.85
      ]
    }
    ]
});