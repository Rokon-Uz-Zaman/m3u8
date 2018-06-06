from rest_framework import serializers

from app.models import Playlist, Channel, SubmittedPlaylist


class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = (
            'id',
            'title',
            'public_link',
            'count'
        )


class ChannelSerializer(serializers.ModelSerializer):
    def get_playlist(self, obj):
        return obj.playlist.title

    class Meta:
        model = Channel
        fields = (
            'id',
            'title',
            'duration',
            'group',
            'path',
            'hidden',
            'playlist'
        )


class SubmittedPlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubmittedPlaylist
        fields = (
            'url',
            'file',
            'remove_existed'
        )
