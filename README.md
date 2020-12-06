# AliasCSS(acss)
AliasCSS or in short acss, is a post css processor means it lets you first define  classnames in your html element then get processed to corresponig css formatting.

* AliasCSS : Majar upgrade to version 3, full support to semantic post classnames definition. *

## What it is?
With alias css you can  style you webpages using class attribute with  post-define classname, for example
```html
<h1 class="color-red font-size12px display-inline-block"> Hello world</h1>
```
OR, using shorthand
```html
<h1 class="c-red fs12px dib"> Hello world</h1>
```
Here you define the color, font size, display properties of h1 element first then acss will compiles and defines the classname with the corresponing property and value/s  in your styles tag or stylesheets. Generally every acss classname hold single propery  and value for it.