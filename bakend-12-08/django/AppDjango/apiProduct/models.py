from django.db import models

# Create your models here.


class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, default="")
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.FileField(upload_to="productos/", blank=True, null=True)