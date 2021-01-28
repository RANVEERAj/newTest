class Form {
    constructor(){

    }
    display(){
        // var title = createElement('h2', 'Car Race!');
        // title.position(400,10)
         var input=createInput('')
         var button= createButton("Start the battle")
         var greeting=createElement('h3')
         input.position(270,200)
         button.position(270,130)
         button.mousePressed(function(){
             console.log(input.value())
        input.hide()
        button.hide()
        var name =input.value()

        playerCount=playerCount+1;
        player.updateCount(playerCount)
        player.updateName(name)
        greeting.html("hi,welocome to the game")
        greeting.position(400,100)
         })


    }
}