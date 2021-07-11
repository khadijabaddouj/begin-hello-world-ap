
unAttribut : string = "Formulaire de contact";

export async function handler (req: object) {

  return {
    statusCode: 200,
    headers: {
      
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'Access-Control-Allow-Origin:'  : 'file:///C:/Users/userpc/Desktop/stage/formulaire.html',
      'Access-Control-Allow-Credentials':'true',
      'Access-Control-Allow-Headers': 'X-Requested-With', 'Content-Type',
     ' Access-Control-Allow-Methods': 'POST', 'GET'
    },
    body:JSON.stringify('hello')
  }
}

// Example responses

/* Forward requester to a new path
export async function handler (req: object) {
  return {
    statusCode: 302,
    headers: {
      'location': '/about',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
*/

/* Respond with successful resource creation
export async function handler (req: object) {
  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({ok: true})
  }
}
*/

/* Deliver client-side JS
export async function handler (req: object) {
  return {
    headers: {
      'content-type': 'text/javascript; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: 'console.log("Hello world!")',
  }
}
*/
