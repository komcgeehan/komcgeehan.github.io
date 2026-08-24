/* ============================================================
   SHARED VEGA-LITE CONFIG
============================================================ */

const sharedConfig = {
  font: "Inter",

  axis: {
    labelFont: "Inter",
    titleFont: "Inter",

    labelColor: "#39434d",
    titleColor: "#202833",

    gridColor: "#e5e9ed",
    domainColor: "#b4bbc2",
    tickColor: "#b4bbc2",

    labelFontSize: 11,
    titleFontSize: 12
  },

  legend: {
    labelFont: "Inter",
    titleFont: "Inter",

    labelFontSize: 11,
    titleFontSize: 11
  },

  view: {
    stroke: null
  }
};


/* ============================================================
   VIEW 1 — OVERALL DOT PLOT
============================================================ */

const view1Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",

  width: 820,
  height: 320,

  data: {
    values: [
      { frequency: "Do not use social media", percent: 31.6, order: 1 },
      { frequency: "A few times a month", percent: 33.1, order: 2 },
      { frequency: "About once a week", percent: 37.7, order: 3 },
      { frequency: "A few times a week", percent: 35.2, order: 4 },
      { frequency: "About once a day", percent: 27.7, order: 5 },
      { frequency: "Several times a day", percent: 40.3, order: 6 },
      { frequency: "About once an hour", percent: 37.7, order: 7 },
      { frequency: "More than once an hour", percent: 46.8, order: 8 }
    ]
  },

  mark: {
    type: "point",
    filled: true,
    size: 175,
    color: "#4f7896"
  },

  encoding: {
    x: {
      field: "frequency",
      type: "ordinal",

      sort: {
        field: "order",
        order: "ascending"
      },

      title: "Frequency of social media use",

      axis: {
        labelAngle: -30,
        labelPadding: 8,
        labelLimit: 130
      }
    },

    y: {
      field: "percent",
      type: "quantitative",

      title: "Students reporting sadness or hopelessness (%)",

      scale: {
        domain: [20, 60]
      },

      axis: {
        tickCount: 9
      }
    },

    tooltip: [
      {
        field: "frequency",
        type: "nominal",
        title: "Social media use"
      },
      {
        field: "percent",
        type: "quantitative",
        title: "Persistent sadness or hopelessness",
        format: ".1f"
      }
    ]
  },

  config: sharedConfig
};


/* ============================================================
   VIEW 2 — DUMBBELL
============================================================ */

const genderData = [
  { frequency: "Do not use social media", gender: "Female", percent: 46.5, order: 1 },
  { frequency: "Do not use social media", gender: "Male", percent: 23.5, order: 1 },

  { frequency: "A few times a month", gender: "Female", percent: 38.6, order: 2 },
  { frequency: "A few times a month", gender: "Male", percent: 31.2, order: 2 },

  { frequency: "About once a week", gender: "Female", percent: 45.2, order: 3 },
  { frequency: "About once a week", gender: "Male", percent: 28.2, order: 3 },

  { frequency: "A few times a week", gender: "Female", percent: 47.7, order: 4 },
  { frequency: "A few times a week", gender: "Male", percent: 22.6, order: 4 },

  { frequency: "About once a day", gender: "Female", percent: 39.9, order: 5 },
  { frequency: "About once a day", gender: "Male", percent: 21.1, order: 5 },

  { frequency: "Several times a day", gender: "Female", percent: 52.1, order: 6 },
  { frequency: "Several times a day", gender: "Male", percent: 28.4, order: 6 },

  { frequency: "About once an hour", gender: "Female", percent: 56.4, order: 7 },
  { frequency: "About once an hour", gender: "Male", percent: 24.0, order: 7 },

  { frequency: "More than once an hour", gender: "Female", percent: 58.7, order: 8 },
  { frequency: "More than once an hour", gender: "Male", percent: 32.8, order: 8 }
];


const view2Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",

  width: 820,
  height: 320,

  data: {
    values: genderData
  },

  layer: [
    {
      transform: [
        {
          aggregate: [
            {
              op: "min",
              field: "percent",
              as: "min_percent"
            },
            {
              op: "max",
              field: "percent",
              as: "max_percent"
            }
          ],

          groupby: [
            "frequency",
            "order"
          ]
        }
      ],

      mark: {
        type: "rule",
        stroke: "#9aa1a8",
        strokeWidth: 1.25,
        opacity: 0.55
      },

      encoding: {
        x: {
          field: "frequency",
          type: "ordinal",

          sort: {
            field: "order",
            order: "ascending"
          },

          title: "Frequency of social media use",

          axis: {
            labelAngle: -30,
            labelPadding: 8,
            labelLimit: 130
          }
        },

        y: {
          field: "min_percent",
          type: "quantitative",

          title: "Students reporting sadness or hopelessness (%)",

          scale: {
            domain: [20, 60]
          },

          axis: {
            tickCount: 9
          }
        },

        y2: {
          field: "max_percent"
        }
      }
    },

    {
      mark: {
        type: "point",
        filled: true,
        size: 185
      },

      encoding: {
        x: {
          field: "frequency",
          type: "ordinal",

          sort: {
            field: "order",
            order: "ascending"
          }
        },

        y: {
          field: "percent",
          type: "quantitative",

          scale: {
            domain: [20, 60]
          }
        },

        color: {
          field: "gender",
          type: "nominal",
          title: "gender",

          scale: {
            domain: ["Female", "Male"],
            range: ["#4c78a8", "#f58518"]
          }
        },

        shape: {
          field: "gender",
          type: "nominal",
          title: "gender",

          scale: {
            domain: ["Female", "Male"],
            range: ["circle", "square"]
          }
        },

        tooltip: [
          {
            field: "frequency",
            type: "nominal",
            title: "Social media use"
          },
          {
            field: "gender",
            type: "nominal",
            title: "gender"
          },
          {
            field: "percent",
            type: "quantitative",
            title: "Persistent sadness or hopelessness",
            format: ".1f"
          }
        ]
      }
    }
  ],

  config: sharedConfig
};


/* ============================================================
   VIEW 3 — RANKED GAP
============================================================ */

const view3Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",

  width: 720,
  height: 320,

  data: {
    values: [
      { frequency: "Do not use social media", gap: 23.0 },
      { frequency: "A few times a month", gap: 7.4 },
      { frequency: "About once a week", gap: 17.0 },
      { frequency: "A few times a week", gap: 25.1 },
      { frequency: "About once a day", gap: 18.8 },
      { frequency: "Several times a day", gap: 23.7 },
      { frequency: "About once an hour", gap: 32.4 },
      { frequency: "More than once an hour", gap: 25.9 }
    ]
  },

  layer: [
    {
      mark: {
        type: "bar",
        cornerRadiusEnd: 4,
        color: "#4f7896"
      },

      encoding: {
        y: {
          field: "frequency",
          type: "nominal",
          sort: "-x",
          title: null,

          axis: {
            labelFontSize: 12,
            labelLimit: 190
          }
        },

        x: {
          field: "gap",
          type: "quantitative",
          title: "Female–male gap (percentage points)",

          scale: {
            domain: [0, 38]
          }
        },

        tooltip: [
          {
            field: "frequency",
            type: "nominal",
            title: "Social media use"
          },
          {
            field: "gap",
            type: "quantitative",
            title: "Female–male gap",
            format: ".1f"
          }
        ]
      }
    },

    {
      mark: {
        type: "text",
        align: "left",
        baseline: "middle",
        dx: 7,
        fontSize: 12,
        fontWeight: "bold",
        color: "#25313d"
      },

      encoding: {
        y: {
          field: "frequency",
          type: "nominal",
          sort: "-x"
        },

        x: {
          field: "gap",
          type: "quantitative",

          scale: {
            domain: [0, 38]
          }
        },

        text: {
          field: "gap",
          type: "quantitative",
          format: ".1f"
        }
      }
    }
  ],

  config: sharedConfig
};


/* ============================================================
   RENDER VEGA-LITE VIEWS
============================================================ */

vegaEmbed("#view1", view1Spec, {
  actions: false
});

vegaEmbed("#view2", view2Spec, {
  actions: false
});

vegaEmbed("#view3", view3Spec, {
  actions: false
});


/* ============================================================
   VIEW 4 — D3 HUMAN-CENTERED DOT GRID
============================================================ */

function createHumanView() {
  const container = d3.select("#view4");

  container.selectAll("*").remove();

  const width = 820;
  const height = 430;

  const dotSize = 13;
  const gap = 6;
  const columns = 10;

  const data = [
    {
      group: "Female students",
      percent: 58.7,
      highlighted: 59,
      color: "#4c78a8"
    },
    {
      group: "Male students",
      percent: 32.8,
      highlighted: 33,
      color: "#f58518"
    }
  ];

  const svg = container
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("width", "100%")
    .attr("role", "img")
    .attr(
      "aria-label",
      "Among students who use social media more than once an hour, 58.7 percent of female students and 32.8 percent of male students reported persistent sadness or hopelessness."
    )
    .style("font-family", "Inter, Arial, sans-serif");


  /* MAIN CONTEXT */

  svg.append("text")
    .attr("x", 82)
    .attr("y", 30)
    .attr("font-size", 17)
    .attr("font-weight", 600)
    .attr("fill", "#202833")
    .text(
      "Among students who use social media more than once an hour..."
    );


  data.forEach((group, groupIndex) => {
    const startX = groupIndex === 0 ? 100 : 470;
    const startY = 175;


    /* GROUP LABEL */

    svg.append("text")
      .attr("x", startX)
      .attr("y", 72)
      .attr("font-size", 16)
      .attr("font-weight", 600)
      .attr("fill", "#202833")
      .text(group.group);


    /* PERCENT */

    svg.append("text")
      .attr("x", startX)
      .attr("y", 108)
      .attr("font-size", 30)
      .attr("font-weight", 700)
      .attr("fill", group.color)
      .text(`${group.percent}%`);


    /* MEASURE */

    svg.append("text")
      .attr("x", startX)
      .attr("y", 135)
      .attr("font-size", 13)
      .attr("font-weight", 500)
      .attr("fill", "#39434d")
      .text("reported persistent sadness");

    svg.append("text")
      .attr("x", startX)
      .attr("y", 153)
      .attr("font-size", 13)
      .attr("font-weight", 500)
      .attr("fill", "#39434d")
      .text("or hopelessness");


    /* DOT GRID */

    svg.selectAll(`.dot-${groupIndex}`)
      .data(d3.range(100))
      .join("circle")
      .attr("class", `dot-${groupIndex}`)
      .attr(
        "cx",
        d =>
          startX +
          (d % columns) * (dotSize + gap)
      )
      .attr(
        "cy",
        d =>
          startY +
          Math.floor(d / columns) * (dotSize + gap)
      )
      .attr("r", dotSize / 2)
      .attr(
        "fill",
        d =>
          d < group.highlighted
            ? group.color
            : "#d9dde2"
      );
  });


  /* EXPLANATION */

  const explanation = svg.append("text")
    .attr("x", 82)
    .attr("y", 385)
    .attr("font-size", 12.5)
    .attr("fill", "#5e6a76");

  explanation.append("tspan")
    .attr("x", 82)
    .attr("dy", 0)
    .text(
      "Each grid represents 100 students. Each colored dot represents approximately one percentage point"
    );

  explanation.append("tspan")
    .attr("x", 82)
    .attr("dy", 18)
    .text(
      "reporting persistent sadness or hopelessness."
    );
}


createHumanView();