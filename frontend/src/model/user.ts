export class User {
    id: number;
    nome: string;
    senha: string;
    email: string;
    telefone: number;
    endereco: string;
    admin: boolean;

    constructor(nome: string,senha: string,email: string,telefone: number,endereco: string,admin: boolean){
        this.nome=nome;
        this.senha=senha;
        this.email=email;
        this.telefone=telefone;
        this.endereco=endereco;
        this.admin=admin;
    }
}