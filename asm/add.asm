; lets assume that we have the content in the memory in the 1000h and 1001h address
lda 1000h ; here loading the first number from the memory to the accumulator
add 1001h ; here adding the second number from the memory to the accumulator
sta 1002h ; here storing the result back to the memory at address 1002h

jnc no_carry ; jump if no carry to no_carry label
mvi a, 01h; ; move immediate 01h to accumulator
sta 1003h ; store the carry flag (1) to memory address 1003
hlt        ; halt the program

no_carry: mvi a, 00h; ; move immediate 00h to accumulator
sta 1003h ; store the carry flag (0) to memory address 1003h
hlt        ; halt the program
