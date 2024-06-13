


const recursoProducto = "https://dummyjson.com/products/1";

fetch(recursoProducto).then( (data) => {
    return data.json()
} ).then( (data) => {
    console.log(data);
} )



// fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       username: 'emilys',
//       password: 'emilyspass',
//       expiresInMins: 30, // optional, defaults to 60
//     })
//   })
//   .then(res => res.json())
//   .then(data => console.log(data));






// console.log(axios);
axios.get(recursoProducto).then( (data)  => {
    console.log(data.data);
} )



const apiLogin = "https://dummyjson.com/auth/login";

const body = {
    username: 'emilys',
    password: 'emilyspass'
} 

axios.post(apiLogin, body).then( (data)  => {
    console.log(data.data);
} ).catch( (error) => {
    console.log("la peticion al servicio fallo...");
} )





// practicando con chartJS

const myChart = document.querySelector("#myChart");

const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: ["12", "12", "21", "4", "99"],
      }
    ]
  };


const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Pie Chart'
        }
      }
    },
  };



const chartDiv = new Chart(myChart, config);



// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Crear un cubo rojo en la escena
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Mover la cámara para ver el cubo
// camera.position.z = 5;

// // Función de renderizado
// function animate() {
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }

// animate();



// trabajando com moment


console.log(moment().startOf('hour').fromNow());

console.log(moment().subtract(6, 'days').calendar());


console.log(moment().format('MMMM Do YYYY, h:mm'));