class SoulsMsg {
    constructor(words, templs, conjs) {
        this.words = words;
        this.templs = templs;
        this.conjs = conjs;
        this.msg = "";
    }
    makePart() {
        return this.pick1(this.templs).replace(/\$/g,this.pick1(this.words))
    }
    pick1(list) {
        return list[Math.floor(Math.random() * (list.length-1))]
    }
    newMsg() {
        this.msg = Math.random() < 0.5 ? `${this.makePart()} ${this.pick1(this.conjs)} ${this.makePart()}` : this.makePart();
    }
    write() {
        console.log(this.msg)
    }
    rune(tag) {
        tag.innerHTML = this.msg
    }
}