import { OrbitControls } from "@react-three/drei"
export const HiMesh = () => {
    return(
        <>
        <OrbitControls />
        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
        </>
    )
}