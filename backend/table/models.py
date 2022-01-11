from django.db import models


class Table(models.Model):
    title = models.CharField(max_length=255, verbose_name='Title')
    distance = models.DecimalField(max_digits=7, decimal_places=2, verbose_name='Distance')
    amount = models.IntegerField(verbose_name='Amount')
    date = models.DateTimeField(auto_now_add=True, verbose_name='Date')
