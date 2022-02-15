import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>', () => {
    it('should render the heading', () => {
        const { container } = render(<Main />)

        expect(
            screen.getByRole('heading', { name: /react avançado/i })
        ).toBeInTheDocument()

        //snapshot -> se o teste passar ele cria uma imagem que vai se usada para comparar com os próximos testes
        expect(container.firstChild).toMatchSnapshot()
    })

    it('shoud render the colors correctly', () => {
        const { container } = render(<Main />)
        expect(container.firstChild).toHaveStyle({
            'background-color': '#06092b'
        })
    })
})
