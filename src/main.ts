import './style.css'
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// const scene = new Scene();
// const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//
// const renderer = new WebGLRenderer();
//
// const geometry = new BoxGeometry( 1, 1, 1 );
// const material = new MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new Mesh( geometry, material );
// cube.rotation.x += 0.01;
// cube.rotation.y += 0.01;
// scene.add( cube );
//
//
// camera.position.z = 5;
//
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// const scene = new Scene();
// // カメラ。視点
// const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//
// // レンダラー
// const renderer = new WebGLRenderer();
//
// // デバイスピクセル比
// renderer.setPixelRatio(devicePixelRatio);
// // 範囲の指定
// renderer.setSize(window.innerWidth, window.innerHeight);
// // レンダラーをbodyに追加
// document.body.appendChild(renderer.domElement);
//
// // カメラの位置
// camera.position.z = 5;
//
// // 立方体の作成
// const geometry = new BoxGeometry(1, 1, 1);
// const material = new MeshBasicMaterial({color: 0x00ff00});
// // const geometry = new BoxGeometry(500, 500, 500);
// // const material = new MeshStandardMaterial({
// //     color: 0x0000ff
// // });
// const cube = new Mesh(geometry, material);
// scene.add(cube);
//
// const light = new DirectionalLight(0xffffff);
// light.intensity = 2; // 光の強さを倍に
// light.position.set(1, 1, 1); // ライトの方向
// // シーンに追加
// scene.add(light);
//
//
// function animate() {
//     requestAnimationFrame(animate);
//
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//
//     renderer.render(scene, camera);
// }
//
// animate();


// ====

import {
    BoxGeometry,
    DirectionalLight,
    Mesh, MeshBasicMaterial,
    MeshStandardMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer
} from 'three';

// const width = 960;
// const height = 540;

// レンダラーを作成
// const renderer = new WebGLRenderer({
//     canvas: document.querySelector('#myCanvas')
// });
const renderer = new WebGLRenderer();
// renderer.setSize(width, height);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);
// シーンを作成
const scene = new Scene();

// カメラを作成
const camera = new PerspectiveCamera(45, width / height, 1, 10000);
// カメラの初期座標を設定（X座標:0, Y座標:0, Z座標:0）
camera.position.set(0, 0, 1000);

// 箱を作成
const geometry = new BoxGeometry(500, 500, 500);
const material = new MeshStandardMaterial({color: 0x0000FF});
const box = new Mesh(geometry, material);
scene.add(box);

// 単純に２つ重ねてもだめっぽい
// const cube_geometry = new BoxGeometry(100, 100, 100);
// const cube_material = new MeshBasicMaterial({color: 0x00ff00});
// const cube = new Mesh(cube_geometry, cube_material);
// scene.add(cube);

// 平行光源
const light = new DirectionalLight(0xFFFFFF);
light.intensity = 2; // 光の強さを倍に
light.position.set(1, 1, 1); // ライトの方向
// シーンに追加
scene.add(light);

// 初回実行
tick();

function tick() {
    requestAnimationFrame(tick);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // レンダリング
    renderer.render(scene, camera);
}