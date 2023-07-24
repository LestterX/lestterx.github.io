import os

from http.server import SimpleHTTPRequestHandler as Handler
from http.server import HTTPServer as Server

# PORT = int(os.getenv('PORT', 4678))
PORT = int(5050)

os.chdir('./')

httpd = Server(("", PORT), Handler)
try:
    print('Rodando na porta %i' % PORT)
    httpd.serve_forever()
except KeyboardInterrupt:
    pass
httpd.server_close()