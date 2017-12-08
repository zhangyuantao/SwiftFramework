/**
 * Created by zyt on 2017/12/8.
 * 视图基类
 */
namespace Core {
    export class ViewBase implements IView{
        private m_controller: ControllerBase;  // 所属控制器

        constructor(controller: ControllerBase) {
            let self = this;
            self.m_controller = controller;
        }

        open(...param:any[]) {
        }

        close() {
        }

        show(...param:any[]) {
        }

        hihe() {
        }

        destroy() {
        }
    }
}
