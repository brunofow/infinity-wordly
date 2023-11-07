import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
import wordsJson from '../words.json' assert { type: 'json' }


const fastify = Fastify({
  logger: true
})

fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/'
})

fastify.get('/', async function handler(request, reply) {
  return reply.sendFile('index.html')
})

fastify.get('/words', async function handler(request, reply) {
  return reply.send({
    words: wordsJson.words
  })
})

try {
  await fastify.listen({ port: 3000 })
} catch(err) {
  fastify.log.error(err)
  process.exit(1)
}
