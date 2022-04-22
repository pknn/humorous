# Humorous

## Extending color space
Humorous make use of css functions `rgb` and `hsl` at the moment, extending color space might be a little more complicate.  
1. Custom CSS function (which is not available)  
You can create a custom css function, for example `brgb(r, g, b)` to display your new color space
2. Mapping color space to `rgb` color space  
You can provide some mapping to `rgb`, and it will work fine
3. Not a new custom color space, just `rgba(), hsla(), hwb(), lab(), or lch()`  
It will work right out of the box