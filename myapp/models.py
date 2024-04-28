from django.db import models

class Robot(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class Task(models.Model):
    robot = models.ForeignKey(Robot, on_delete=models.CASCADE)
    action = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
