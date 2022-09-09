# Exercício 4

Crie um programa que calcula a velocidade em **mach** de uma aeronave a partir da **velocidade** e **altitude**.

Lembre-se que:
* Mach é uma quantidade que define quão rápido um objeto se move em relação à velocidade do som do meio:
	* ```mach = (velocidade [m/s] / velocidadeDoSom[m/s])```
* A **velocidade do som** varia com a **densidade do meio**, assim, para calcular a velocidade de um objeto se movendo no ar pode-se usar:
	* ```velocidadeDoSom = 331 + (0.6 ∙ temperatura[°c])```
* A **temperatura do ar** varia com a **altitude** numa taxa de ``` -2 °C ``` para cada ```1000 pés```.

> ___

Receba do usuário valor para a velocidade em **nós [kt]** e altitude em **pés [ft]**.

Considere a atmosfera ISA padrão ```15° C ao nível do mar```.

**Atenção com as unidades utilizadas, faça todas as conversões necessárias**
___
