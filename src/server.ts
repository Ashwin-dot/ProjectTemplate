import { Config } from './config'
import app from './app'

const startServer = () => {
  const PORT = Config.PORT

  try {
    app.listen(PORT, () => {
      console.log(`App listening on PORT  :` + PORT)
    })
  } catch (error) {
    console.error(error)
  }
}
startServer()
