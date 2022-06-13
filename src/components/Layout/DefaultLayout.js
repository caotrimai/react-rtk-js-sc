import {Layout} from 'antd'

const {Header, Footer, Content} = Layout

function DefaultLayout ({children}) {
  return (
    <Layout className='DefaultLayout'>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default DefaultLayout