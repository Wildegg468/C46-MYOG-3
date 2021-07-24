class Bird 
{
constructor(x,y,width,height) 
{
this.image = loadImage("images/flappy_bird.png");
    


}

display()
{
image(this.image, 0, 0, this.width, this.height);

}
}