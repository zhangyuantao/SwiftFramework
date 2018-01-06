var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by zyt on 2018/1/6.
 * 通用工具类
 */
var Core;
(function (Core) {
    var Utils;
    (function (Utils_1) {
        var Utils = (function () {
            function Utils() {
            }
            Utils.getClassName = function (target) {
                return target.__proto__.__class__;
            };
            /**
             * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
             */
            Utils.createBitmapByName = function (name) {
                var result = new egret.Bitmap();
                var texture = RES.getRes(name);
                result.texture = texture;
                return result;
            };
            return Utils;
        }());
        Utils_1.Utils = Utils;
        __reflect(Utils.prototype, "Core.Utils.Utils");
    })(Utils = Core.Utils || (Core.Utils = {}));
})(Core || (Core = {}));
