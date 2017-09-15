/**
 * SAVE MODEL. THINGS ARE SAVED HERE
 * @author Moon Quddus
 */
class SaveModel {
	constructor(money, level) {
		this.saveHash = null;
		this.level = 1;
		this.money = 0;
		this.mercenaries = {};
		this.officers = {};
		this.buildings = {};
		this.quests = {};
	}

	get translatedMoney() {
		return "\u20b1" + this.money;
	}

	levelUp() {
		this.level = this.level + 1;
	}

	importSave(data){
		this.money = parseInt(data.money);
		this.level = parseInt(data.level);
	}
}