var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by zyt on 2018/1/6.
 * UI界面管理
 */
var Core;
(function (Core) {
    var UI;
    (function (UI) {
        var UIManager = (function () {
            function UIManager() {
                this.uiMap = {};
            }
            // ui系统初始化
            UIManager.prototype.init = function (stage) {
                var self = this;
                // 初始化界面层
                self.m_mainLayer = new UI.MainLayer();
                stage.addChild(self.m_mainLayer);
                self.m_menuLayer = new UI.MenuLayer();
                stage.addChild(self.m_menuLayer);
                self.m_dlgLayer = new UI.DlgLayer();
                stage.addChild(self.m_dlgLayer);
                self.m_topLayer = new UI.TopLayer();
                stage.addChild(self.m_topLayer);
                self.m_guideLayer = new UI.GuideLayer();
                stage.addChild(self.m_guideLayer);
                self.m_stage = stage;
            };
            Object.defineProperty(UIManager.prototype, "stage", {
                get: function () {
                    return this.m_stage;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(UIManager.prototype, "stageWidth", {
                get: function () {
                    return this.m_stage.stageWidth;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(UIManager.prototype, "stageHeight", {
                get: function () {
                    return this.m_stage.stageHeight;
                },
                enumerable: true,
                configurable: true
            });
            // 添加界面
            UIManager.prototype.add = function (name, ui) {
                var self = this;
                if (ui instanceof UI.DlgUI) {
                    self.m_dlgLayer.addChild(ui);
                }
                if (!self.uiMap[name]) {
                    ui.key = name;
                    self.uiMap[name] = ui;
                }
            };
            // 移除、销毁界面
            UIManager.prototype.remove = function (name) {
                var self = this;
                var ui = self.uiMap[name];
                if (!ui)
                    return;
                if (ui instanceof UI.DlgUI) {
                    self.m_dlgLayer.removeChild(ui);
                    delete self.uiMap[name];
                    ui = null;
                }
            };
            // 获取界面
            UIManager.prototype.get = function (name) {
                return this.uiMap[name] || null;
            };
            return UIManager;
        }());
        UI.UIManager = UIManager;
        __reflect(UIManager.prototype, "Core.UI.UIManager");
        UI.uiManager = new UIManager();
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
