import Phaser from 'phaser'
export default class MeteorWarsScene extends
Phaser.Scene
{
constructor(){
super('Meteor-Wars-Scene')
}
init(){
    this.nav_left = false;
    this.nav_right = false;
    this.shoot = false;








}
preload(){
    this.load.image('background' ,'images/Luar Angkasa background.png')
    this.load.image('left-btn', 'images/left-btn.png')
    this.load.image('right-btn', 'images/right-btn.png')
    this.load.image('shoot', 'images/shoot-btn.png')





}
create(){
    const gameWidth = this.scale.width*0.5;
    const gameHeight = this.scale.height*0.5;
    this.add.image(gameWidth,gameHeight,"background")
    this.createButton()






}
update(time){


}
createButton(){
    this.input.addPointer(3)
    let shoot = this.add.image(320,550, 'shoot')
     .setInteractive().setDepth(0.5).setAlpha(0.8)
    let nav_left = this.add.image(50,550, 'left-btn')
     .setInteractive().setDepth(0.5).setAlpha(0.8)
    let nav_right = this.add.image(nav_left.x + 
     nav_left.displayWidth+20, 550,'right-btn')
    .setInteractive().setDepth(0.5).setAlpha(0.8)
    
    nav_left.on('pointerdown', () => {
        this.nav_left = true
        }, this)

    nav_left.on('pointerout', () => {
        this.nav_left = false
         }, this)

    nav_right.on('pointerdown', () => {
            this.nav_right = true
             }, this)

    nav_right.on('pointerout', () => {
            this.nav_right = false
             }, this)

    shoot.on('pointerdown', () => {
            this.shoot = true
             }, this)

    shoot.on('pointerout', () => {
            this.shoot = false
            }, this)
     }







}