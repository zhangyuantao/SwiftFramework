var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * Created by zyt on 2018/1/6.
 * 最上层的引导UI层
 */
var Core;
(function (Core) {
    var UI;
    (function (UI) {
        var GuideLayer = (function (_super) {
            __extends(GuideLayer, _super);
            function GuideLayer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return GuideLayer;
        }(eui.UILayer));
        UI.GuideLayer = GuideLayer;
        __reflect(GuideLayer.prototype, "Core.UI.GuideLayer");
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
