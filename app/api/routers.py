from app.api.views import PlaylistViewSet, ChannelViewSet, SubmittedPlaylistViewSet
from rest_framework_nested import routers

router = routers.SimpleRouter()
router.register(r'playlists', PlaylistViewSet)
router.register(r'channels', ChannelViewSet)

playlist_router = routers.NestedSimpleRouter(router, r'playlists', lookup='playlist')
playlist_router.register(r'submit', SubmittedPlaylistViewSet, base_name='submitted-playlist')
playlist_router.register(r'channels', ChannelViewSet, base_name='channels')
