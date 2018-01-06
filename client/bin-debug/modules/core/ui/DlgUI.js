var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
