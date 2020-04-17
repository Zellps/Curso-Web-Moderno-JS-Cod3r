const valor = "Global"

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec()  // como resultado sai GLOBAL pq a função esteja sendo chamada de outro local, o JS carrega o contexto no qual ela foi escrita inicialmente
