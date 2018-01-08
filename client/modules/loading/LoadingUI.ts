import UIBase = Core.UI.UIBase;
import SpriteUIBase = Core.UI.SpriteUIBase;
import DlgUI = Core.UI.DlgUI;
class LoadingUI extends SpriteUIBase{
    private textField:egret.TextField;

    init() {
        super.init();

        let self = this; let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.6);
        topMask.graphics.drawRect(0, 0, uiManager.stageWidth, uiManager.stageHeight);
        topMask.graphics.endFill();
        this.addChild(topMask);

        // 加载进度
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.width = uiManager.stageWidth;
        this.textField.height = 100;
        this.textField.y = uiManager.stageHeight >> 1;
        this.textField.textAlign = "center";
    }

    setProgress(current:number, total:number):void {
        this.textField.text = `Loading...${current}/${total}`;
    }

    loadCompleted() {
        let sky = Utils.createBitmapByName("bg_jpg");
        this.addChild(sky);
        let stageW = uiManager.stageWidth;
        let stageH = uiManager.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this.addChild(topMask);

        let icon = Utils.createBitmapByName("egret_icon_png");
        this.addChild(icon);
        icon.x = 26;
        icon.y = 33;

        let line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);

        let colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = stageW - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret";
        colorLabel.size = 40;
        colorLabel.x = 172;
        colorLabel.y = 100;
        this.addChild(colorLabel);

        let btnLogin = Utils.createBitmapByName("common_btn_green_png");
        this.addChild(btnLogin);
        btnLogin.x = stageW / 2 - btnLogin.width / 2;
        btnLogin.y = stageH - 180;
        btnLogin.touchEnabled = true;
        btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, (e:egret.Event) => {
            LoginUI.show();
        }, this);

        let btnLoginLabel = new egret.TextField();
        btnLoginLabel.textColor = 0xffffff;
        btnLoginLabel.textAlign = "center";
        btnLoginLabel.text = "Enter";
        btnLoginLabel.size = 24;
        btnLoginLabel.x = stageW / 2 - btnLoginLabel.width / 2;
        btnLoginLabel.y = stageH - 155;
        this.addChild(btnLoginLabel);
    }
}
