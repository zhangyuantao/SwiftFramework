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
 * Created by zyt on 2017/12/8.
 * 对话框界面基类，置于DlgLayer层
 */
var Core;
(function (Core) {
    var UI;
    (function (UI) {
        var DlgUI = (function (_super) {
            __extends(DlgUI, _super);
            function DlgUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return DlgUI;
        }(UI.UIBase));
        UI.DlgUI = DlgUI;
        __reflect(DlgUI.prototype, "Core.UI.DlgUI");
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
