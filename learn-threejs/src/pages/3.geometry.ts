import * as three from 'three'
import $ from 'jquery'

export default {
  init() {
    // 渲染器
    const renderer = new three.WebGLRenderer()
    renderer.setSize(400, 300)
    $('.container')[0].append(renderer.domElement)

    // 设置清除背景的背景色
    renderer.setClearColor(0x999999, 1.0)

    // 场景，相当于一个大容器。three.js中添加的物体都是添加到场景中的。
    const scene = new three.Scene()

    // 带有正交投影照相机。为了保持照相机的横竖比例，需要保证(right - left)与(top - bottom)的比例与Canvas宽度与高度的比例一致。
    // const camera = new three.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10)
    const camera = new three.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 40)
    camera.position.set(4, 3, 10)
    camera.lookAt(0, 0, 0)
    scene.add(camera)

    // 立方体
    const cube = new three.Mesh(
      new three.BoxGeometry(1, 2, 3, 2, 2, 3),
      new three.MeshNormalMaterial() // 法向材质
      // new three.MeshBasicMaterial({
      //   color: 0xff0000,
      //   wireframe: true // 线框图，方便看到正方体后边的边
      // })
    )
    scene.add(cube)
    
    // 渲染函数
    renderer.render(scene, camera) 
  }
}