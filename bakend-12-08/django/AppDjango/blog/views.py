from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
import json



# Create your views here.
def home(requests):
    print(requests.method)
    return HttpResponse("""<h1 style="color: green"> Welcome Home!!! <h1>""")


def formulario(requests):
    if requests.method == "GET":
        return render(requests, "formulario.html", {})
    elif requests.method == "POST":

        data = requests.POST
        email = data.get("email", "")
        passwrod = data.get("password", "")

        print(email)
        print(passwrod)

        DATABASE = {
            "id": 1,
            "usuario": "pedro" ,
            "stack": "react y python",
            "email": email
        }

        return render(requests, "gracias.html", DATABASE )





class FormularioView(View):
    def get(self, requests):
        return render(requests, "formulario.html", {})

    def post(self, requests):
        data = requests.POST
        email = data.get("email", "")
        passwrod = data.get("password", "")
        DATABASE = {
            "id": 1,
            "usuario": "pedro" ,
            "stack": "react y python",
            "email": email
        }
        return render(requests, "gracias.html", DATABASE )


    def delete(self, requests):
        pass


class HelloWorldApi(View):
    def get(self, request):
        
        data = {
            "id": 3,
            "message": "Hello World!"
        }
        return JsonResponse(data)

    def post(self, request):
        
        data = request.body

        data = json.loads(data)
        print(data)

        return JsonResponse(data)


    def put(self, request):
        data = request.body
        data = json.loads(data)

        return JsonResponse({
            "message": "elemento actualuzado",
            "data": data
        })

    def delete(self, request, pk):
        # data = request.body
        # data = json.loads(data)
        # print("pk", pk)

        return JsonResponse({
            "message": "elemento borrado",
            "data": pk
        })