'use'
class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let oneDiv = document.createElement('div');
        document.querySelector('body').appendChild(oneDiv).style.cssText = 
        'background-color: ' + this.bg + ';' + 
        'height: ' + this.height + 'px;' + 
        'width: ' + this.width + 'px;' + 
        'font-size: ' + this.fontSize + 'px;' + 
        'text-align: ' + this.textAlign + ';';

        
        oneDiv.textContent = '123';
        
    }
    
}
let newOptions = new Options(150,300,'red',50,'center');
newOptions.createDiv();


