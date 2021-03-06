import "leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet-fullscreen";

L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);
// define map and tile layer
const map = L.map("mapid", {
  gestureHandling: true,
  fullscreenControl: { pseudoFullscreen: true }
}).setView([51.505, -0.09], 13);

const tileLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
);

tileLayer.addTo(map);

map.on("fullscreenchange", () => {
  if (map.isFullscreen()) {
    map.gestureHandling.disable();
    console.log(
      "entered fullscreen. map.gestureHandling.enabled: ",
      map.gestureHandling.enabled()
    );
  } else {
    map.gestureHandling.enable();
    console.log(
      "exited fullscreen. map.gestureHandling.enabled: ",
      map.gestureHandling.enabled()
    );
  }
});
