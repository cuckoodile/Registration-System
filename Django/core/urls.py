from django.contrib import admin
from django.urls import path
from .views import UserView

# Rest framework JWT
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework_simplejwt.views import TokenVerifyView

# Model URLs
from Registration.views import StudentsView, StudentDetailView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/users/', UserView.as_view()),

    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('api/students', StudentsView.as_view()),
    path('api/students/<int:pk>/', StudentDetailView.as_view(), name='student-detail'),
]
