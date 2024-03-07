evalscript = """
//VERSION=3
function setup() {
  return {
    input: [{
      bands: [
        "B04",
        "B08",
        "SCL",
        "dataMask"
      ]
    }],
    mosaicking: "ORBIT",
    output: [
      {
        id: "data",
        bands: ["monthly_max_ndvi"]
      },
      {
        id: "dataMask",
        bands: 1
      }]
  }
}

function evaluatePixel(samples) {
    var max = 0;
    var hasData = 0;
    for (var i=0;i<samples.length;i++) {
      if (samples[i].dataMask == 1 && samples[i].SCL != 6 && samples[i].B04+samples[i].B08 != 0 ){
        hasData = 1
        var ndvi = (samples[i].B08 - samples[i].B04)/(samples[i].B08 + samples[i].B04);
        max = ndvi > max ? ndvi:max;
      }
    }

    return {
        data: [max],
        dataMask: [hasData]
    }
}
"""

stats_request = {
  "input": {
   "bounds": {
      "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                458085.878866,
                5097236.833044
              ],
              [
                457813.834156,
                5096808.351383
              ],
              [
                457979.897062,
                5096313.767184
              ],
              [
                458146.639373,
                5096405.411294
              ],
              [
                458085.878866,
                5097236.833044
              ]
            ]
          ]
        },
    "properties": {
        "crs": "http://www.opengis.net/def/crs/EPSG/0/32633"
        }
    },
    "data": [
      {
        "type": "sentinel-2-l2a",
        "dataFilter": {
            "mosaickingOrder": "leastCC"
        }
      }
    ]
  },
  "aggregation": {
    "timeRange": {
            "from": "2020-01-01T00:00:00Z",
            "to": "2021-01-01T00:00:00Z"
      },
    "aggregationInterval": {
        "of": "P1M"
    },
    "evalscript": evalscript,
    "resx": 10,
    "resy": 10
  }
}

headers = {
  'Content-Type': 'application/json',
   'Accept': 'application/json'
}

url = "https://services.sentinel-hub.com/api/v1/statistics"

response = oauth.request("POST", url=url, headers=headers, json=stats_request)
sh_statistics = response.json()
sh_statistics