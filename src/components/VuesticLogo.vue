<template>
  <div>
    <img :src="imagenLogoSrc" :style="imagenEstilo"  :alt="altLogo">
  </div>
</template>


<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useColors } from 'vuestic-ui'
  import { useRoute } from 'vue-router';

  const { getColor, shiftHSLAColor } = useColors()
  const route = useRoute();
  const imagenLogoSrc = "/img/logo.jpg"
  const altLogo = "Cuida tu cuerpo, y tu salud."
  const imagenEstilo = ref({
    width: '200px',   // Ancho de la imagen
    height: 'auto'    // Altura automática para mantener la proporción
  })

  const props = withDefaults(
    defineProps<{
      height?: number | string
      color?: string
    }>(),
    {
      height: 16,
      color: 'primary',
    },
  )

  const colorsComputed = computed(() => {
    const color = getColor(props.color, 'primary')
    return { start: color, end: shiftHSLAColor(color, { l: -20 }) }
  })

  onMounted(() => {
      if (route.path == '/' || route.path == '/login') {
        imagenEstilo.value.width = '400px';
      } else {
        imagenEstilo.value.width = '310px';
      }
    });
  
</script>
