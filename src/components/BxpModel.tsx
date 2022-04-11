// @ts-ignore
import * as THREE from 'three';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import React, {useEffect, useRef} from "react";
let rrTimer: NodeJS.Timeout;
const BxpModel = () => {
    const model = useRef<HTMLDivElement>(null);

    const isMobileDevice = () => {
        try{
            const device = document.createEvent('TouchEvent');
            return true;
        }catch(e){
            return false;
        }
    }

    useEffect(() => {
        var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setClearColor(0xffffff, 0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(model.current!.getBoundingClientRect().width, model.current!.getBoundingClientRect().height);
        model.current!.appendChild(renderer.domElement);
        window.addEventListener('resize', () => {
            clearTimeout(rrTimer);
            rrTimer = setTimeout(() => {
                renderer.setSize(model.current!.getBoundingClientRect().width, model.current!.getBoundingClientRect().height);
            }, 100);
        });

        const fieldOFView = 48;
        const aspectRatio = 1080 / 1080;
        const near = 1;
        const far = 1000;
        var camera = new THREE.PerspectiveCamera(fieldOFView, aspectRatio, near, far);
        camera.position.x = 20;
        camera.position.y = 30;
        camera.position.z = 30;

        const scene = new THREE.Scene();
        
        /*let light = new THREE.DirectionalLight(0xffffff, 1.0);
        light.position.set(20,100,10);
        light.target.position.set(0,0,0);
        light.castShadow = true;*/
        let light = new THREE.AmbientLight( 0xffffff );
        scene.add(light);


        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 20;
        controls.maxDistance = 40;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 2.0;
        controls.maxPolarAngle = Math.PI/2;

        /*let planeGeometry = new THREE.PlaneGeometry(10,20,2,2);
        let material = new THREE.MeshStandardMaterial({
            color:0xf1f1f1,
        });

        const plane = new THREE.Mesh(planeGeometry, material);
        plane.castShadow = true;
        plane.receiveShadow = true;
        plane.rotation.x = -Math.PI / 2;
        scene.add(plane);*/

        /* BOX 1 */
        const box = new THREE.Mesh(
            new THREE.BoxGeometry(2,15,3),
            new THREE.MeshStandardMaterial({
                color:0x3f62b5
            })
        );
        box.position.set(0,7,6);
        box.castShadow = true;
        box.receiveShadow = true;
        scene.add( box );

        const geometry = new THREE.BoxGeometry(2,15,3);
        const edges = new THREE.EdgesGeometry( geometry );
        const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
        line.position.set(0,7,6);
        scene.add( line );

        /* BOX 2 */
        const box0 = new THREE.Mesh(
            new THREE.BoxGeometry(2,10,3),
            new THREE.MeshStandardMaterial({
                color:0x29c3be
            })
        );
        box0.position.set(0,5,0);
        box0.castShadow = true;
        box0.receiveShadow = true;
        scene.add( box0 );

        const geometry0 = new THREE.BoxGeometry(2,10,3);
        const edges0 = new THREE.EdgesGeometry( geometry0 );
        const line0 = new THREE.LineSegments( edges0, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
        line0.position.set(0,5,0);
        scene.add( line0 );

        /* BOX 3 */
        const box1 = new THREE.Mesh(
            new THREE.BoxGeometry(2,5,3),
            new THREE.MeshStandardMaterial({
                color:0xf2726f
            })
        );
        box1.position.set(0,2.5,-6);
        box1.castShadow = true;
        box1.receiveShadow = true;
        scene.add( box1 );

        const geometry1 = new THREE.BoxGeometry(2,5,3);
        const edges1 = new THREE.EdgesGeometry( geometry1 );
        const line1 = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
        line1.position.set(0,2.5,-6);
        scene.add( line1 );


        const animate = function() {
            if(!isMobileDevice()){
                controls.update();
            }
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }, []);
    return <div ref={model}/>;
};

export default BxpModel;