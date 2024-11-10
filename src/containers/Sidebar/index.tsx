import Avatar from '../../components/Avatar'
import P from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>The Jack is On Fire</Titulo>
      <P tipo="secundario" fontSize={16}>
        The Old Jack
      </P>
      <Descricao tipo="principal" fontSize={12}>
        Devenvolvedor Front-End
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
