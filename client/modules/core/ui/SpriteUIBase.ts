/**
 * Created by zyt on 2017/12/8.
 * 继承egret.Sprite界面基类
 */
namespace Core.UI {
    export class SpriteUIBase extends egret.Sprite implements IUI{
        key:string;
        data:any;

        constructor(data:any) {
            super();
            let self = this;
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

                // 添加到UI管理
                uiManager.add(className, ui);
            }

            return ui;
        }

        init(){}

        onAddToStage(){}

        // 销毁界面
        onDestroy() {

        }

        // 进入界面
        enter(){

        }

        // 显示界面
        show(){

        }

        // 关闭界面
        close() {

        }
    }
}
