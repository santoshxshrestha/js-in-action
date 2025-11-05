;sub two num
;let 1000h = 01
;let 1001h  = 01
;result will be in 1002h 
LHLD    1000h
LDA     1001h
ADD     H
STA     1002h
HLT
