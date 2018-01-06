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
 * 继承egret.Sprite界面基类
 */
var Core;
(function (Core) {
    var UI;
    (function (UI) {
        var SpriteUIBase = (function (_super) {
            __extends(SpriteUIBase, _super);
            function SpriteUIBase(data) {
                var _this = _super.call(this) || this;
                var self = _this;
                self.data = data;
                self.init();
                self.addEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
                self.addEventListener(egret.Event.REMOVED_FROM_STAGE, self.onDestroy, self);
                return _this;
            }
            SpriteUIBase.show = function (data) {
                var self = this;
                var className = self.name;
                var ui = UI.uiManager.get(className);
                if (ui) {
                    ui.show();
                }
                else {
                    ui = new self();
                    // 添加到UI管理
                    UI.uiManager.add(className, ui);
                }
                return ui;
            };
            SpriteUIBase.prototype.init = function () { };
            SpriteUIBase.prototype.onAddToStage = function () { };
            // 销毁界面
            SpriteUIBase.prototype.onDestroy = function () {
            };
            // 进入界面
            SpriteUIBase.prototype.enter = function () {
            };
            // 显示界面
            SpriteUIBase.prototype.show = function () {
            };
            // 关闭界面
            SpriteUIBase.prototype.close = function () {
            };
            return SpriteUIBase;
        }(egret.Sprite));
        UI.SpriteUIBase = SpriteUIBase;
        __reflect(SpriteUIBase.prototype, "Core.UI.SpriteUIBase", ["Core.UI.IUI"]);
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
