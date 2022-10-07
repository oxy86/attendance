const fastify = require('fastify')()


// Makes the request body available to our Next.js API route handlers (see below)
async function noOpParser(req, payload) {

  return payload;
}

fastify
//.register(require('fastify-nextjs'))
  .register(require('@fastify/nextjs'))
  .after(() => {


    fastify.addContentTypeParser('text/plain', noOpParser);
    fastify.addContentTypeParser('application/json', noOpParser);
    // Define routes
    fastify.next('/*')
    fastify.next('/api/*', { method: 'ALL' });


  })

// server listens to port 3000
fastify.listen(3000, err => {
  if (err) throw err
  console.log('Server listening on http://localhost:3000')
})

