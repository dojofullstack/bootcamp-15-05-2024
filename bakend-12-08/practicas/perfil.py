from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)


@app.route("/perfil")
def perfil(user_id=None):
    # return "index.html"
    return {
        "user_id": user_id,
        "perfil": "pedro",
        "precio": 123,
        "isStock": True
    }
