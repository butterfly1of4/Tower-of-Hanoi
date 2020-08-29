README-.md

#BRONZE: 
    An HTML page with 3 poles and 3 blocks. The blocks move from pole to pole as they are clicked (directed to). Each block should be programmed to move from one pole to another and they follow the rules of the game-i.e. no larger blocks on smaller blocks. Works well enough to make the game end when all the blocks are on the right pole. Rules and title basically laid out. All the logic is written.

#SILVER
    Add basic styling to the blocks. Include a "play again" option. Maybe event listeners for reinforcing the rules as the game is played. Add another block to the puzzle. Add some styling to the rules and title, like font and size, etc.

#GOLD
    All the pole are styled (skinny), and rounded at the top. The rules and title are styled even more to look uniform. Each block has rounded edges, and is skinny. Maybe add animation to make the block transitions look cooler.



Simpler statement of iterative solution
For an even number of disks:

make the legal move between pegs A and B (in either direction),
make the legal move between pegs A and C (in either direction),
make the legal move between pegs B and C (in either direction),
repeat until complete.
For an odd number of disks:

make the legal move between pegs A and C (in either direction),
make the legal move between pegs A and B (in either direction),
make the legal move between pegs B and C (in either direction),
repeat until complete.
In each case, a total of 2n − 1 moves are made.

Equivalent iterative solution
Another way to generate the unique optimal iterative solution:

Number the disks 1 through n (largest to smallest).

If n is odd, the first move is from peg A to peg C.
If n is even, the first move is from peg A to peg B.
Now, add these constraints:

No odd disk may be placed directly on an odd disk.
No even disk may be placed directly on an even disk.
There will sometimes be two possible pegs: one will have disks, and the other will be empty. Place the disk on the non-empty peg.
Never move a disk twice in succession.
Considering those constraints after the first move, there is only one legal move at every subsequent turn.


Equivalent iterative solution
Another way to generate the unique optimal iterative solution:

Number the disks 1 through n (largest to smallest).

If n is odd, the first move is from peg A to peg C.
If n is even, the first move is from peg A to peg B.
Now, add these constraints:

No odd disk may be placed directly on an odd disk.
No even disk may be placed directly on an even disk.
There will sometimes be two possible pegs: one will have disks, and the other will be empty. Place the disk on the non-empty peg.
Never move a disk twice in succession.
Considering those constraints after the first move, there is only one legal move at every subsequent turn.

The sequence of these unique moves is an optimal solution to the problem equivalent to the iterative solution described above.[7]