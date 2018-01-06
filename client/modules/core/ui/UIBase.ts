/**
 * Created by zyt on 2017/12/8.
 * 继承eui.Component界面基类
 * 需要设置皮肤
 */
namespace Core.UI {
    export class UIBase extends eui.Component{
        key:string;
        data:any;

        constructor(data:any) {
            super();
            let self = this;
            self.data = data;
            self.init();
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

        // 首次初始化
        init(){

        }

        // 显示界面
        show(){
            let self = this;
            if (! self.visible)
                self.visible = true;
        }

        // 关闭界面
        close(destroy:boolean = false) {
            let self = this;
            if (self.visible)
                self.visible = false;

            if (destroy)
                self.destroy();
        }

        // 销毁界面
        private destroy() {
            let self = this;

            // 清除数据缓存
            self.data = null;

            // 移除UI
            uiManager.remove(self.key);
        }
    }
}
