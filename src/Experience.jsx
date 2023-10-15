import {Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, OrbitControls } from '@react-three/drei'

export default function Experience() {
    // from CDN (lighter app but also dependent on link)
    // const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    const computer = useGLTF('./computer.gltf')
    console.log(computer)
    return <>
        <color args={['#241a1a']} attach='background' />
        {/* <OrbitControls makeDefault /> */}
        <Environment preset='city' />


        {/* Controls that move model isntead of camera with restrictions */}
        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >
            {/* effect to make model float */}
            <Float rotationIntensity={0.4} >
                {/* Screen light effect */}
                <rectAreaLight 
                    width={2.5}
                    height={1.65}
                    intensity={25}
                    color={'#0000ff'}
                    rotation={[0.1,Math.PI,0]}
                    position={[0,0.55,-1.15]}
                />
                {/* Laptop model */}
                <primitive
                    position-y={-1.2}
                    object={computer.scene}
                >
                    {/* injecting html into model with iframe */}
                    <Html
                        transform  
                        wrapperClass='htmlScreen'  
                        distanceFactor={1.17}
                        position={[0,1.56,-1.4]}
                        rotation-x={-0.256}
                    >
                        {/* <iframe src='https://portal-scene.kyledlong.com/' /> */}
                        <iframe src='https://kyledlong.com/' />
                    </Html>
                </primitive>
                <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize={1}
                    position={[1.5,0.75,0.75]}
                    rotation-y={-1.25}
                    maxWidth={2}
                    textAlign='center'

                >Kyle Long</Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
    </>
}

