/**
 * Created by zyt on 2017/12/8.
 * 模型基类
 */
namespace Core {
    export class ModelBase {
        private m_view: ViewBase;  // 所属视图

        constructor(view: ViewBase) {
            let self = this;
            self.m_view = view;
        }
    }
}
