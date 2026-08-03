import express from 'express'
import compression from 'compression'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, 'dist')
const port = process.env.PORT || 3000

const app = express()
app.use(compression())
app.disable('x-powered-by')

app.use('/assets', express.static(path.join(dist, 'assets'), { immutable: true, maxAge: '1y' }))

app.use(express.static(dist, {
  maxAge: '1h',
  index: false,
  redirect: false,
  setHeaders(res, filePath) {
    if (/\.(?:svg|png|jpg|jpeg|webp|xml|txt|ico|json)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=3600')
    }
  }
}))

app.get('*', (req, res) => {
  const cleanPath = req.path.replace(/\/+$/, '') || '/'
  const candidate = cleanPath === '/' ? path.join(dist, 'index.html') : path.join(dist, cleanPath, 'index.html')
  if (fs.existsSync(candidate)) {
    res.setHeader('Cache-Control', 'public, max-age=300, must-revalidate')
    return res.sendFile(candidate)
  }
  const notFound = path.join(dist, '404', 'index.html')
  if (fs.existsSync(notFound)) { res.status(404); return res.sendFile(notFound) }
  res.status(404).sendFile(path.join(dist, 'index.html'))
})

app.listen(port, () => console.log(`Brew & Bean Journal running on http://localhost:${port}`))
