import requests

# respuesta = requests.get("https://dummyjson.com/quotes")

# # print(respuesta.status_code)
# data = respuesta.json()

# for item in data["quotes"]:
#     print(item.get("quote"))



def loginUser(user, password):
    url = 'https://dummyjson.com/auth/login'

    body = {
        "username": user,
        "password": password
    }
    try:
        res = requests.post(url, json=body)
        return res.json()
    except Exception as error:
        print("error en la solicituda")
        return {
            "solicitud": str(error),
            "status": False
        }



def getProfile(token):
    url = 'https://dummyjson.com/auth/me'

    headers = {
        'Authorization': f"Bearer {token}"
    }

    res = requests.get(url, headers=headers)
    return res.json()


data = loginUser('emilys', 'emilyspass')
token = data["token"]
print(token)

salida = getProfile(token)

print(salida)