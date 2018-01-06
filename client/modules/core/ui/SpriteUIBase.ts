/**
 * Created by zyt on 2017/12/8.
 * 继承egret.Sprite界面基类
 */
namespace Core.UI {
    export class SpriteUIBase extends egret.Sprite{
        data:any;

        constructor(data:any) {
            super();
            let self = this;
            self.data = data;
            self.enter();
        }

        static show(data?:any) {
            let self = this;
            let view:any = new self(data);
            let className = view.__proto__.__class__;
            return view;
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

        // 销毁界面
        destroy() {

        }
    }
}
