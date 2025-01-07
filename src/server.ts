import { Config } from './config'
import app from './app'
import { Logger } from 'winston'
import logger from './config/logger'

const startServer = () => {
  const PORT = Config.PORT

  try {
    app.listen(PORT, () => {
      logger.info('Server Listening on port', PORT)
    })
  } catch (error) {
    console.error(error)
  }
}
startServer()
