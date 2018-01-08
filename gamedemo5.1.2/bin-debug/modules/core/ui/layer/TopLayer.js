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
 * 顶部界面层
 */
var Core;
(function (Core) {
    var UI;
    (function (UI) {
        var TopLayer = (function (_super) {
            __extends(TopLayer, _super);
            function TopLayer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return TopLayer;
        }(eui.UILayer));
        UI.TopLayer = TopLayer;
        __reflect(TopLayer.prototype, "Core.UI.TopLayer");
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
