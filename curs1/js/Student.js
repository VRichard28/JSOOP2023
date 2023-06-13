class Student {
    constructor(id, nume, varsta,nota1,nota2){
        this.id = id;
        this.nume = nume;
        this.varsta = varsta;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
metodaSalut() {
    console.log(`Buna ziua ${this.nume}`);
}

}