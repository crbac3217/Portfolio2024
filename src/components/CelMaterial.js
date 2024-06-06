import * as THREE from 'three';
import { CelShader } from './CelShader';

const CelMaterial = new THREE.ShaderMaterial({
  uniforms: THREE.UniformsUtils.clone(CelShader.uniforms),
  vertexShader: CelShader.vertexShader,
  fragmentShader: CelShader.fragmentShader,
});

export default CelMaterial;
