from flask import Flask
from flask import request
from flask import render_template
from perfil import *


# app = Flask(__name__)


apikey = "0120102910920192091"


@app.route("/blog")
def hello_world():
    # return "index.html"
    return "<h1>Hello, World!</h1>"


@app.route("/")
def home():
    # return "index.html"
    return "<h1>sitio web principal</h1>"


@app.route("/usuario/", methods=['POST'])
@app.route("/usuario/<id>", methods=['GET'])
def usuario(id=None):
    print(id)
    # return "index.html"
    if request.method == "GET":
        return render_template("usuario.html", nombre="Pedro", user_id=id )
        # return f"<h1>info del usuario {id}</h1>"
    elif request.method == "POST":
        print("recibiendo datos del formulario, guardar en DB")
        print(request.form["correo"])
        return render_template("gracias.html")


@app.route("/api/v2/producto/<producto_id>")
def producto(producto_id):
    # return "index.html"

    # consultar a la DB producto_id
    ApikeyCliente = request.headers.get("Apikey")
    
    if ApikeyCliente != apikey:
        return ({
            "status": False,
            "Apikey": ApikeyCliente,
            "message": "ApikeyCliente no Autoizado!"
        }, 400)


    return {
        "producto_id": producto_id,
        "title": "phone",
        "precio": 123,
        "isStock": True
    }



app.run(port="8000")
