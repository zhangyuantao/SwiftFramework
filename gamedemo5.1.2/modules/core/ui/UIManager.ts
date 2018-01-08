/**
 * Created by zyt on 2018/1/6.
 * UI界面管理
 */
namespace Core.UI {
    import UILayer = eui.UILayer;
    export class UIManager{
        private uiMap:any = <any>{};

        private m_stage:egret.Stage;
        private m_mainLayer:UILayer;
        private m_menuLayer:UILayer;
        private m_dlgLayer:UILayer;
        private m_topLayer:UILayer;
        private m_guideLayer:UILayer;

        // ui系统初始化
        init(stage:egret.Stage) {
            let self = this;
            self.m_stage = stage;

            // 初始化界面层
            self.m_mainLayer = new MainLayer();
            self.m_menuLayer = new MenuLayer();
            self.m_dlgLayer = new DlgLayer();
            self.m_topLayer = new TopLayer();
            self.m_guideLayer = new GuideLayer();

            stage.addChild(self.m_mainLayer);
            stage.addChild(self.m_menuLayer);
            stage.addChild(self.m_dlgLayer);
            stage.addChild(self.m_topLayer);
            stage.addChild(self.m_guideLayer);

            self.m_mainLayer.touchThrough = true;
            self.m_menuLayer.touchThrough = true;
            self.m_dlgLayer.touchThrough = true;
            self.m_topLayer.touchThrough = true;
            self.m_guideLayer.touchThrough = true;
        }

        get stage(){
            return this.m_stage;
        }

        get stageWidth(){
            return this.m_stage.stageWidth;
        }

        get stageHeight(){
            return this.m_stage.stageHeight;
        }

        // 添加界面
        add(name:string, ui:UIBase){
            let self = this;
            if (ui instanceof DlgUI){
                self.m_dlgLayer.addChild(ui);
            }
            else if (ui instanceof SpriteUIBase){
                self.m_mainLayer.addChild(ui);
            }

            if (! self.uiMap[name])
                self.uiMap[name] = ui;
        }

        // 移除、销毁界面
        remove(name:string){
            let self = this;
            let ui = self.uiMap[name];
            if (! ui) return;

            if (ui instanceof DlgUI)
                self.m_dlgLayer.removeChild(ui);
            else if (ui instanceof SpriteUIBase)
                self.m_mainLayer.removeChild(ui);

            delete self.uiMap[name];
            ui = null;
        }

        // 获取界面
        get(name:string){
            return this.uiMap[name] || null;
        }
    }
    export let uiManager:UIManager = new UIManager();
}
