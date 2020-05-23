from django.urls import path, include
from .views import article_list, article_detail, ArticleListView, ArticleDetailView, genericListView, ArticleViewSet, GenViewSet, ModelViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# router.register('article', ArticleViewSet, basename="article")
# router.register('article', GenViewSet, basename="article")
router.register('article', ModelViewSet, basename="article")

urlpatterns = [
    # path('', article_list),
    path('', ArticleListView.as_view()),
    # path('detail/<int:pk>', article_detail),
    path('detail/<int:id>', ArticleDetailView.as_view()),
    path('generic', genericListView.as_view()),
    path('generic/<int:id>', genericListView.as_view()),
    path('r/', include(router.urls)),
    path('r/<int:id>', include(router.urls)),
]
