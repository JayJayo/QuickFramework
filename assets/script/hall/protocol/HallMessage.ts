import { CommonMessage } from "../../common/net/CommonService";
import { serialize } from "../../framework/net/JsonMessage";
import { MainCmd, SUB_CMD_LOBBY } from "../../common/protocol/CmdNetID";

export class TestData extends CommonMessage{

    @serialize("test",String)
    test : string = "my test";

}

export class UpdateMoney extends CommonMessage {
    mainCmd = MainCmd.CMD_LOBBY;
    subCmd = SUB_CMD_LOBBY.UPDATE_MONEY;
    @serialize("count",Number)
    count : number = 1000;

    @serialize("arr",Array,String)
    testArr: Array<string> = ["1","2","3","4"];//null;

    @serialize("mapdata",Map,Number,String)
    testMap:Map<number,string> = new Map();//null;

    @serialize("test",TestData)
    testData : TestData = new TestData();

    constructor(){
        super();
        this.testMap.set(1,"ss");
        this.testMap.set(2,"s22s");
        this.testMap.set(3,"s33s");
        this.testMap.set(4,"s44s");
        this.testMap.set(5,"s55s");
        this.testMap.set(6,"s66s");
    }
}