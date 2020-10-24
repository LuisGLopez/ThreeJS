// Creacion de elementos basicos para el sitio
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ antialias: true});

// Asignar tamaño y color al renderer, asignarlo al html, dar posicion de profundidad a la camara
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor("#222222");
document.body.appendChild( renderer.domElement );
camera.position.z = 5;

// Permite adaptar al tamaño del visor web
window.addEventListener( 'resize', () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize( width, height );
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
})

// Creacion del cubo interior
let geometry = new THREE.BoxGeometry( 1, 1, 1);
let material = new THREE.MeshStandardMaterial( { 
    color: 0x51ff51, 
    flatShading: true, 
    metalness: 0, 
    roughness: 1 
});
let cube = new THREE.Mesh ( geometry, material );
scene.add( cube );

// Creacion del cubo externo
geometry = new THREE.BoxGeometry( 3, 3, 3);
material = new THREE.MeshBasicMaterial( {
    color: "#dadada", 
    wireframe: true, 
    transparent: true
});
let wireframeCube = new THREE.Mesh ( geometry, material );
scene.add( wireframeCube );

// Dar luz ambiente al escenario
let ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2);
scene.add( ambientLight );

// Crear un punto de luz
let pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

// Animaciones para ambos cubos
const animate = () => {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;
    wireframeCube.rotation.x -= 0.01;
    wireframeCube.rotation.y -= 0.01;
    renderer.render( scene, camera );
}
animate();