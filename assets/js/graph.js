am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    // start and end angle must be set both for chart and series
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
      startAngle: 180,
      endAngle: 360,
      layout: root.verticalLayout,
      innerRadius: am5.percent(50),
      radius: am5.percent(80)
    }));
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    // start and end angle must be set both for chart and series
    var series = chart.series.push(am5percent.PieSeries.new(root, {
      startAngle: 180,
      endAngle: 360,
      valueField: "value",
      categoryField: "category",
      alignLabels: false
    }));
    
    series.states.create("hidden", {
      startAngle: 180,
      endAngle: 180
    });
    
    series.slices.template.setAll({
      cornerRadius: 5
    });
    
    series.ticks.template.setAll({
      forceHidden: true
    });
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([
        { value: 7.3, category: "13 - 17" },
        { value: 20.5, category: "18 - 24" },
        { value: 23.5, category: "25 - 34" },
        { value: 29, category: "35 - 44" },
        { value: 12.5, category: "45 - 54" },
        { value: 4.1, category: "55 - 64" },
        { value: 3.1, category: "+65" }
      ]);

    // Altere a cor do texto 
    series.labels.template.setAll({
        fill: am5.color(0xffffff),
        fontSize: 12,               // Tamanho da fonte
    });
    
    series.appear(1000, 100);
    
    }); 

    
