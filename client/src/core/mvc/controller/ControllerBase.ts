/**
 * Created by zyt on 2017/12/8.
 * 控制器基类
 */
namespace Core {
    export class ControllerBase {
        private m_model: ModelBase;          // 所持模型
        private m_listenEvents:any;        // 监听消息列表

        constructor(model: ModelBase) {
            let self = this;
            self.m_model = model;
            self.m_listenEvents = [];
        }
    }
}