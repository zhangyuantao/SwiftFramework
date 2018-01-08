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
                self.touchEnabled = true;
                self.addEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
                self.addEventListener(egret.Event.REMOVED_FROM_STAGE, self.onDestroy, self);
                self.init();
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
                    ui.key = className;
                    // 添加到UI管理
                    UI.uiManager.add(className, ui);
                }
                return ui;
            };
            SpriteUIBase.prototype.init = function () { };
            SpriteUIBase.prototype.onAddToStage = function () { };
            // 销毁界面
            SpriteUIBase.prototype.onDestroy = function () {
                var self = this;
                // 清除数据缓存
                self.data = null;
                // 移除事件监听
                self.removeEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
                self.removeEventListener(egret.Event.REMOVED_FROM_STAGE, self.onDestroy, self);
            };
            // 显示界面
            SpriteUIBase.prototype.show = function () {
                var self = this;
                if (!self.visible)
                    self.visible = true;
            };
            // 关闭界面（隐藏） destroy：是否要移除销毁界面
            SpriteUIBase.prototype.close = function (destroy) {
                if (destroy === void 0) { destroy = true; }
                var self = this;
                if (self.visible)
                    self.visible = false;
                if (destroy)
                    UI.uiManager.remove(self.key);
            };
            return SpriteUIBase;
        }(egret.Sprite));
        UI.SpriteUIBase = SpriteUIBase;
        __reflect(SpriteUIBase.prototype, "Core.UI.SpriteUIBase", ["Core.UI.IUI"]);
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
