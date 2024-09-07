const decodedValue = (colors) => parseInt(COLORS.indexOf(colors[0]) + "" + COLORS.indexOf(colors[1]))

const COLORS = [
    'black',                                                                                    
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
]

console.log(decodedValue(["white", "blue"]))