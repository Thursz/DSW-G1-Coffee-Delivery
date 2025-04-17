import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useParams } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'
import { Container, Heading, Info, InfoContent, Order } from './styles'

export function Success() {
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }
  
  const theme = useTheme()

  if (!orderInfo?.id) {
    return null
  }

  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
                size={32}
              />

              <div>
                <span>
                Resumo do Pedido: <br/>
                -------------------------- <br/>
                  <strong>
                  1x Café Expresso       R$ 9,90
                  </strong>

1x Café Expresso       R$ 9,90
2x Cappuccino          R$ 21,80
Frete (2 itens)        R$ 7,50
--------------------------
Total:                 R$ 39,20

💳 Método de Pagamento: Pix
                  <strong>
                    
                  </strong>
                </span>

                <span>
                  
                </span>
              </div>
            </div>

            <div>
              <Timer
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellow }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
                size={32}
              />

              <div>
                <span>Pagamento na entrega</span>

                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src="/images/delivery.svg" alt="Pedido concluído" />
    </Container>
  )
}
