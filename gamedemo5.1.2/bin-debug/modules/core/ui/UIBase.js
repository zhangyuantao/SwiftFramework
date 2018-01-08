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
 * 继承eui.Component界面基类
 * 需要设置皮肤
 */
var Core;
(function (Core) {
    var UI;
    (function (UI) {
        var UIBase = (function (_super) {
            __extends(UIBase, _super);
            function UIBase(data) {
                var _this = _super.call(this) || this;
                var self = _this;
                self.skinName = Core.Utils.Utils.getClassName(self) + 'Skin'; // 设置皮肤
                self.data = data;
                self.init();
                self.addEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
                self.addEventListener(egret.Event.REMOVED_FROM_STAGE, self.onDestroy, self);
                return _this;
            }
            UIBase.show = function (data) {
                var self = this;
                var className = self.name;
                var ui = UI.uiManager.get(className);
                if (ui) {
                    ui.show();
                }
                else {
                    ui = new self();
                    self.key = className;
                    // 添加到UI管理
                    UI.uiManager.add(className, ui);
                }
                return ui;
            };
            // 首次初始化
            UIBase.prototype.init = function () {
            };
            UIBase.prototype.onAddToStage = function () { };
            // 显示界面
            UIBase.prototype.show = function () {
                var self = this;
                if (!self.visible)
                    self.visible = true;
            };
            // 关闭界面（隐藏） destroy：是否要移除销毁界面
            UIBase.prototype.close = function (destroy) {
                if (destroy === void 0) { destroy = true; }
                var self = this;
                if (self.visible)
                    self.visible = false;
                if (destroy)
                    UI.uiManager.remove(self.key);
            };
            // 销毁界面
            UIBase.prototype.onDestroy = function () {
                var self = this;
                // 清除数据缓存
                self.data = null;
                // 移除事件监听
                self.removeEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
                self.removeEventListener(egret.Event.REMOVED_FROM_STAGE, self.onDestroy, self);
            };
            return UIBase;
        }(eui.Component));
        UI.UIBase = UIBase;
        __reflect(UIBase.prototype, "Core.UI.UIBase", ["Core.UI.IUI"]);
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
