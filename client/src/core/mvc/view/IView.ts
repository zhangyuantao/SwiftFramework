/**
 * Created by zyt on 2017/12/8.
 * 视图接口
 */
namespace Core{
    export interface IView{
        /**
         * 打开视图
         * @param data  视图数据
         */
        open(data:any);

        /**
         * 关闭视图
         */
        close();

        show();
        hihe();
        destroy();
    }
}
