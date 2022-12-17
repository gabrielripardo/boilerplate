import * as S from './styles'

const Main = ({
    title = "React Avançado",
    description = "Next JS, Jest, Storybook, Styled Components, Boas práticas"
}) => (

        <S.Wrapper>
            <S.Logo
                src="/img/logo.svg"
                alt="Imagem de um átomo e R avançado escrito ao lado."
            />
            <S.Title>
                {title}
            </S.Title>
            <S.Description>
                {description}
            </S.Description>
            <S.Illustration
                src="/img/hero-illustration.svg"
                alt="Um desenvolvedor de frente para uma tela com código."
            />
        </S.Wrapper>

)

export default Main
