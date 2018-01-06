var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by zyt on 2018/1/6.
 * 主界面层
 */
var Core;
(function (Core) {
    var UI;
    (function (UI) {
        var MainLayer = (function (_super) {
            __extends(MainLayer, _super);
            function MainLayer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MainLayer;
        }(eui.UILayer));
        UI.MainLayer = MainLayer;
        __reflect(MainLayer.prototype, "Core.UI.MainLayer");
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
