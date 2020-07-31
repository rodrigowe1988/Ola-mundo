#include<stdio.h>
#include<stdlib.h>
#include<math.h>

int main(){
    
    float peso; 
    float altura; 

    printf("Digite o peso em kg do(a) aluno(a):\n");
    scanf("%f", &peso);
    printf("Digite a altura do(a) aluno(a) -> (exemplo = 1.75, para 1,75 m): \n");
    scanf("%f", &altura);
    float imc = peso / (altura * altura);
    printf("O Índice de Massa Corporal do(a) aluno(a) eh %.2f", imc);

    return 0;
}