import { createRoute } from 'honox/factory'
import Layout from '../islands/Layout'
import Form from '../islands/Form'
import Messages from '../islands/Messages'

export default createRoute((c) => {
  
  return c.render(
    <>
      <Layout>
        <Form />
        <Messages />
      </Layout>
    </>,
    {
      title: "BBS"
    }
  )
})
