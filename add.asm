section .data
    num1 db 5
    num2 db 3
    result db 0

section .text
    global _start

_start:
    mov al, [num1]
    add al, [num2]
    mov [result], al
    mov eax, 1
    xor ebx, ebx
    int 0x80
