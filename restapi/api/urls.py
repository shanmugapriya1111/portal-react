from django.conf.urls import include, url
from api import views
# from rest_framework import routers


# router = routers.DefaultRouter()
# router.register(r'register', views.registerViewSet)
# router.register(r'login', views.Login.as_view())
 
urlpatterns = [
    # url(r'^',include(router.urls)),
    url(r'^login/$', views.LoginView.as_view()),
    url(r'^register/$', views.RegisterView.as_view()),
]