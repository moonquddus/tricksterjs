/**
 * @author Moon Quddus
 */
class MercenaryModel {
	constructor() {
		this.name = "";
		this.level = 1;
		this.strength = 0;
		this.dexterity = 0;
		this.constitution = 0;
		this.intelligence = 0;
		this.wisdom = 0;
		this.charisma = 0;
		this.skills = {};
		
	}

	levelUp() {
		this.level = this.level + 1;
	}

	importMercenary(data){
		//this.money = parseInt(data.money);
		//this.level = parseInt(data.level);
	}
}