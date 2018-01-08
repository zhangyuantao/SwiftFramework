/**
 * Created by zyt on 2017/12/8.
 * 继承eui.Component界面基类
 * 需要设置皮肤
 */
namespace Core.UI {
    export class UIBase extends eui.Component implements IUI{
        key:string;
        data:any;

        constructor(data:any) {
            super();
            let self = this;
            self.skinName = Utils.Utils.getClassName(self) + 'Skin';   // 设置皮肤
            self.data = data;

            self.init();

            self.addEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
            self.addEventListener(egret.Event.REMOVED_FROM_STAGE, self.onDestroy, self);
        }

        static show(data?:any) {
            let self:any = this;
            let className = self.name;
            let ui:any = uiManager.get(className);

            if (ui){
                ui.show();
            }
            else {
                ui = new self();
                self.key = className;

                // 添加到UI管理
                uiManager.add(className, ui);
            }

            return ui;
        }

        // 首次初始化
        init(){

        }

        onAddToStage(){}

        // 显示界面
        show(){
            let self = this;
            if (! self.visible)
                self.visible = true;
        }

        // 关闭界面（隐藏） destroy：是否要移除销毁界面
        close(destroy:boolean = true) {
            let self = this;
            if (self.visible)
                self.visible = false;

            if (destroy)
                uiManager.remove(self.key);
        }

        // 销毁界面
        onDestroy() {
            let self = this;

            // 清除数据缓存
            self.data = null;

            // 移除事件监听
            self.removeEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
            self.removeEventListener(egret.Event.REMOVED_FROM_STAGE, self.onDestroy, self);
        }
    }
}
