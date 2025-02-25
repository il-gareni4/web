const NeoWsApiUrl = "https://api.nasa.gov/neo/rest/v1/feed";

function formatDateForApi(date) {
  return (
    date.getFullYear().toString() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
}

export function getNearEarthObjects(
  apiKey = undefined,
  startDate = undefined,
  endDate = undefined
) {
  const searchParams = new URLSearchParams([["api_key", apiKey ? apiKey : "DEMO_KEY"]]);
  if (startDate) searchParams.append("start_date", formatDateForApi(startDate));
  if (endDate) searchParams.append("end_date", formatDateForApi(endDate));

  return fetch(`${NeoWsApiUrl}?${searchParams}`, { method: "GET" });
}

export function extractAsteroidsData(apiResponse) {
  if (!apiResponse) return [];

  const asteroids = [];
  for (const dateGroup of Object.values(apiResponse.near_earth_objects)) {
    for (const item of dateGroup) {
      const approach_data = item.close_approach_data[0];
      asteroids.push({
        id: item.id,
        name: item.name,
        date: new Date(Date.parse(approach_data.close_approach_date)),
        size:
          (item.estimated_diameter.meters.estimated_diameter_max +
            item.estimated_diameter.meters.estimated_diameter_min) /
          2,
        distance: {
          km: approach_data.miss_distance.kilometers,
          lunar: approach_data.miss_distance.lunar,
        },
        isDangerous: item.is_potentially_hazardous_asteroid,
      });
    }
  }
  return asteroids;
}
