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
                self.enter();
                return _this;
            }
            SpriteUIBase.show = function (data) {
                var self = this;
                var view = new self(data);
                var className = view.__proto__.__class__;
                return view;
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
            // 销毁界面
            SpriteUIBase.prototype.destroy = function () {
            };
            return SpriteUIBase;
        }(egret.Sprite));
        UI.SpriteUIBase = SpriteUIBase;
        __reflect(SpriteUIBase.prototype, "Core.UI.SpriteUIBase");
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
