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
 * 菜单界面层
 */
var Core;
(function (Core) {
    var UI;
    (function (UI) {
        var MenuLayer = (function (_super) {
            __extends(MenuLayer, _super);
            function MenuLayer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MenuLayer;
        }(eui.UILayer));
        UI.MenuLayer = MenuLayer;
        __reflect(MenuLayer.prototype, "Core.UI.MenuLayer");
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
