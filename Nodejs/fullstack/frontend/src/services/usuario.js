class UsuarioService {
    constructor() {
      this.data = [];
     }
    get() {
        return this.data;
    }
    add(item) {
        this.data.push(item)
        return true
    }
    update(atual, novo) {
        const userAtual = this.data.find((user) => user.nome === atual.nome 
                                                   && user.idade === atual.idade
                                                   && user.cidade === atual.cidade
                                                   && user.estado === atual.estado
                                                   );
        userAtual.nome = novo.nome;
        userAtual.idade = novo.idade;
        userAtual.cidade = novo.cidade;
        userAtual.estado = novo.estado;
        return true
    }
    remove(item) {
        this.data = this.data.filter((user) => !(user.nome === item.nome 
                                    && user.idade == item.idade
                                    && user.cidade === item.cidade
                                    && user.estado === item.estado)
                                    );
        
        return true
    }
  }
module.exports = UsuarioService; 