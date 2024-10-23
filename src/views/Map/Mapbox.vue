<template>
  <div ref="domRef" class="w-full h-full" style="background: black"/>
</template>

<script setup lang="ts">
import { onMounted, ref, shallowRef } from 'vue';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { useEnv } from "@/store/modules/env";

mapboxgl.accessToken = useEnv().mapboxSecret;
const mapRef = shallowRef<mapboxgl.Map>()
const domRef = ref<HTMLDivElement>()
const renderMap = () => {
  if (!domRef.value) return
  const map = new mapboxgl.Map({
    container: domRef.value,
    center: [-0.126326, 51.533582],
    zoom: 15.27,
    pitch: 42,
    bearing: -50,
    style: 'mapbox://styles/mapbox/standard',
    minZoom: 15,
    maxZoom: 22
  });
  mapRef.value = map

  mapRef.value.on('style.load', () => {
    // set the light preset to be in dusk mode.
    map.setConfigProperty('basemap', 'lightPreset', 'dusk');

    // add a geojson source with a polygon to be used in the clip layer.
    map.addSource('eraser', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              coordinates: [
                [
                  [-0.12573, 51.53222],
                  [-0.12458, 51.53219],
                  [-0.12358, 51.53492],
                  [-0.12701, 51.53391],
                  [-0.12573, 51.53222]
                ]
              ],
              type: 'Polygon'
            }
          }
        ]
      }
    });

    map.addSource('model', {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {
          'model-uri': 'https://docs.mapbox.com/mapbox-gl-js/assets/tower.glb'
        },
        geometry: {
          coordinates: [-0.12501974, 51.5332374],
          type: 'Point'
        }
      }
    });

    map.addLayer({
      id: 'eraser',
      type: 'clip',
      source: 'eraser',
      layout: {
        // specify the layer types to be removed by this clip layer
        'clip-layer-types': ['symbol', 'model'],
        'clip-layer-scope': ['basemap']
      }
    });

    // add the model layer and specify the appropriate `slot` to ensure the symbols are rendered correctly.
    map.addLayer({
      id: 'tower',
      type: 'model',
      slot: 'middle',
      source: 'model',
      minzoom: 15,
      layout: {
        'model-id': ['get', 'model-uri']
      },
      paint: {
        'model-opacity': 1,
        'model-rotation': [0.0, 0.0, 35.0],
        'model-scale': [0.8, 0.8, 1.2],
        'model-color-mix-intensity': 0,
        'model-cast-shadows': true,
        'model-emissive-strength': 0.8
      }
    });
  });

}

onMounted(() => {
  renderMap();
});
</script>


<style scoped>
.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
  min-height: 400px;
}
</style>

