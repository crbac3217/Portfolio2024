import * as THREE from 'three';

const CelShader = {
  uniforms: {
    tDiffuse: { value: null },
    lightDirection: { value: new THREE.Vector3(0, 0, 1) },
    outlineColor: { value: new THREE.Color(0xff0000) }, // Red outline
    outlineThickness: { value: 1.0},
    dotSize: { value: 1.0 },
    dotThreshold: { value: 0.5 },
  },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform vec3 lightDirection;
    uniform vec3 outlineColor;
    uniform float outlineThickness;

    varying vec3 vNormal;
    varying vec3 vViewPosition;

    float edgeFactor(vec2 uv) {
      vec3 fdx = dFdx(vViewPosition);
      vec3 fdy = dFdy(vViewPosition);
      vec3 normal = normalize(cross(fdx, fdy));
      float d = dot(vNormal, normal);
      return 1.0 - smoothstep(0.0, outlineThickness, d);
    }

    void main() {
      vec3 normal = normalize(vNormal);
      float dotNL = dot(normal, lightDirection);

      // Cel shading
      float intensity = step(0.5, dotNL) * 0.5 + step(0.75, dotNL) * 0.5;
      vec3 color = vec3(1.0) * intensity; // White background

      // Outline
      float edge = edgeFactor(gl_FragCoord.xy / gl_FragCoord.w);
      color = mix(color, outlineColor, edge);

      gl_FragColor = vec4(color, 1.0);
    }
  `
};

export { CelShader };
