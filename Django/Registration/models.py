from django.db import models

class Address(models.Model):
    province = models.CharField(max_length=100)
    municipality = models.CharField(max_length=100)
    zipCode = models.IntegerField()
    city = models.CharField(max_length=100)
    barangay = models.CharField(max_length=100)
    streetAddress = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.municipality}, {self.city} {self.zipCode}'

class Students(models.Model):
    schoolYear = models.IntegerField(null=True, blank=True)
    firstName = models.CharField(max_length=20, null=True, blank=True)
    middleName = models.CharField(max_length=20, null=True, blank=True)
    lastName = models.CharField(max_length=20, null=True, blank=True)
    grade = models.IntegerField(null=True, blank=True)
    gender = models.CharField(max_length=20, null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, null=True, blank=True)
    section = models.CharField(max_length=20, null=True, blank=True)
    status = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return f'{self.lastName}, {self.firstName}'
