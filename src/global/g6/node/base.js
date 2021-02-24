/**
 * Created by OXOYO on 2019/8/29.
 *
 * 节点基础方法
 */
import utils from '../utils'

export default {
  shape: null,
  group: null,
  id: null,
  draw (cfg, group) {
    const shapeType = this.shapeType
    const style = this.getShapeStyle(cfg)
    const shape = group.addShape(shapeType, {
      attrs: style
    })
    this.shape = shape
    this.group = group
    this.drawIcon(cfg, group)
    return shape
  },
  drawIcon (cfg, group) {
    let width, height
    const size = this.getSize(cfg)
    width = size[0]
    height = size[1]
   // this.id = cfg.get('id')
    if (this.options.icon) {
      let attrs = {
        x: this.options.iconStyle.left,
        y: this.options.iconStyle.top,
        width,
        height
      }
      group.icon = group.addShape('image', {
        attrs: {
          img: this.options.icon,
          ...attrs
        },
        draggable: true,
        name: 'image-shape'
      })
    }
  },
  ShowObjProperty1 (Obj, key) {
    var attributes = ''
    var methods = ''
    for (const attr in Obj) {
      if (Obj.attr != null) { attributes = attributes + attr + ' 属性： ' + Obj.i + '\r\n' } else { methods = methods + '方法: ' + attr + '\r\n' }
    }
    console.log(attributes, methods, key)
  },
   getAnchorPoints (cfg) {
    return [
      [0.5, 0], // top
      [1, 0.5], // right
      [0.5, 1], // bottom
      [0, 0.5] // left
    ]
  },
  setState (name, value, item) {
    // 设置锚点状态
    utils.anchor.setState(name, value, item)
    // 设置shapeControl状态
    utils.shapeControl.setState(name, value, item)
  },
  // 绘制后附加锚点
  afterDraw (cfg, group) {
    console.log('afterDraw------------------')
    // 绘制锚点
    utils.anchor.draw(cfg, group)
    // 绘制shapeControl
    utils.shapeControl.draw(cfg, group)
  }
}
