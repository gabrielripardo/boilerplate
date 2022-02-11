import * as S from './styles'

const Main = () => (
    <div>
        <S.Wrapper>
            <S.Logo
                src="/img/logo.svg"
                alt="Imagem de um átomo e R avançado escrito ao lado."
            />
            <S.Title>
                <h1>React Avançado</h1>
            </S.Title>
            <S.Description>
                Typescript, React JS, Next JS e Styled Components
            </S.Description>
            <S.Illustration
                src="/img/hero-illustration.svg"
                alt="Um desenvolvedor de frente para uma tela com código."
            />
        </S.Wrapper>
    </div>
)

export default Main