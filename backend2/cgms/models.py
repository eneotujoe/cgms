from django.db import models

# Create your models here.
class Member(models.Model):
    first_name = models.CharField(max_length=50)
    
    class Meta:
        verbose_name_plural = 'Members'

class Event(models.Model):
    title = models.CharField(max_length=50)
    
    class Meta:
        verbose_name_plural = 'Events'
        

class Analytics(models.Model):
    title = models.CharField(max_length=50)
    
    class Meta:
        verbose_name_plural = 'Analytics'
        

class LiveStream(models.Model):
    title = models.CharField(max_length=50)
    
    class Meta:
        verbose_name_plural = 'Live Stream'
        