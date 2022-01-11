from .models import *


def loop():
    distance = 200
    for i in range(100):
        p = Table(title='Title ' + str(i), distance=distance, amount=i+1)
        distance=distance - 1.6
        p.save()
