/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2017-12-18 16:24:05
 * @Last Modified time:   2017-12-18 16:24:05
 * @Description: 全局配置
 */
export default {
  pageWidth: 3360,
  pageHeight: 1890,
  GLOBAL_SVG: null,
  GLOBAL_BUILDER: null,
  GLOBAL_PROJECTION: null,
  RotateX: 30,
  Zoom: true,
  // 伪3D设置，如果不想用伪3D，则可以设置 Shadow:false 或 Shadow:null,
  Shadow: {
    Left: 5,
    Top: 5,
    Fill: ''
  },
  Bar: {
    Effect: 2000,
    HeightMin: 10,
    HeightMax: 60,
    Width: 8,
    Radius: 2
  },
  Line: {
    EffectMin: 2000,
    EffectMax: 4000,
    PointRadius: 1.5
  },
  Point: {
    EffectMin: 2000,
    EffectMax: 4000,
    RadiusMin: 8,
    RadiusMax: 16
  },
  Fly: {
    EffectMin: 2000,
    EffectMax: 4000
  },
  OnSelect: null
}
