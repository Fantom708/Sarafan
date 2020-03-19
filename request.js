// GET all
fetch ('/message/').then(result => result.json().then(console.log()))

// GET one
fetch ('/message/2').then(result => result.json().then(console.log()))

// POST add new one
fetch ('/message', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ text: 'Fourth message' })}).then(result => console.log(result))

// PUT save existing
fetch ('/message/4', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({text: 'NEW'})}).then(result => console.log(result))

// DELETE existing
fetch ('/message/4', { method: 'DELETE'}).then(result => console.log(result))