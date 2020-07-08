    Move allowed: if (x < y) {
        true 
    }   else {
        false
    }

    for moving blocks: add/remove classes to print blocks in correct spaces on poles

    function for comparing value of 2 poles

    event listeners 
    maybe use borders on l/r of blocks instead of a grid 









# Tower-of-Hanoi
To Load: 
    github.com/butterlfy1of4/Tower-of-Hanoi
Rules:
    All Discs must be moved from the left-most pole to the right-most pole. A larger block can never be on a smaller block.
    Only one block can be moved at a time.
    Each turn, a block must be moved to another (you can't put one back down). You can put blocks on any of the three poles.

BUILD ON LOAD: 
    Poles: make 3 poles, assign location values (abc)
        html, css
   * Ground: 
        Line to connect poles
        html, css
    Blocks: make 4 blocks 4 different sizes, 4 different values
        html, css

MAKE BLOCKS MOVE:
    Discs: 4: 1, 2, 3, 4
    Poles: 3: a, b, c
        -start with making 1 block move. Then add mobility to the others
        -same thing for all poles
        add js to html/css

HOW TO MOVE BLOCKS:
    Each block is independent.
        js
        maybe use classes
    Each block can move to all 3 poles
        js

MOVING BLOCKS LOGIC:
-These are the blocks available to the player on every turn.
    -blocks available: ; poles available
    Turn 1:
        blocks: 1
        pole b, c
    Turn 2:
        blocks: 1, 2 
        pole a, b
    Turn 3:
        blocks: 1, 2, 3     
        pole: a, b, c
    Turn 4+: 
        blocks: 1, 2, 3, 4
        pole: a, b, c

GAME LOGIC-RULES: block1 < block2 < block3 < block4
-All blocks start on pole a
    Turn 1:
        block 1 - pole b,c
    Turn 2:
        block 1 - pole a, (b, c);  already on b or c
        block 2 - pole b,c (if 1 = pole, b !== pole) 2 >1
    Turn +:
       create variable for any block, and any pole
       
       conditions: 
       booleans?
        -block[0] < block[1], block[1] < block[2], block[2] < block[3]
        -if block x.value > block y.value - no pole
        -if block x.value > block y.value - yes pole
        -if length of pole = 4- no pole



WINNING:    
    if 4 blocks are on pole c end game
