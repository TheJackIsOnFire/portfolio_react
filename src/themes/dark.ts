const temaDark = {
  corPrincipal: '#fff',
  corSecundaria: '#eee',
  corDeFundo: '#282a35',
  corDeFundoBotao: '#fff',
  corDaBorda: '#c1c1c1',
}

export default temaDark

//O tema funcinou sem precisar adicionar os tipos no styles global, mas eu o adicionei por questões didática
export type Theme = {
  corPrincipal: string
  corSecundaria: string
  corDeFundo: string
  corDeFundoBotao: string
  corDaBorda: string
}
