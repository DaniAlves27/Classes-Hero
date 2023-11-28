class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                console.log('Tipo inválido');
                return;
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new Hero('John', 25, 'mago');
heroi1.atacar();

let heroi2 = new Hero('Mark', 22, 'guerreiro');
heroi2.atacar();

let heroi3 = new Hero('Jane', 24, 'monge');
heroi3.atacar();

let heroi4 = new Hero('Anne', 23, 'ninja');
heroi4.atacar();