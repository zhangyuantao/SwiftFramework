/**
 * Created by zyt on 2017/12/8.
 * 控制器管理
 */
namespace Core{
    export class ControllerManager{
        private m_controller:any;

        constructor(){
            let self = this;
            self.m_controller = {};
        }

        register(name:string, controller:ControllerBase){
            let self = this;
            if (self.m_controller[name]) return;
            self.m_controller[name] = controller;
        }

        unregister(name:string){
            let self = this;
            if (! self.m_controller[name]) return;
            self.m_controller[name] = null;
            delete self.m_controller[name];
        }
    }
    export let ControllerMgr:ControllerManager = new ControllerManager();
}