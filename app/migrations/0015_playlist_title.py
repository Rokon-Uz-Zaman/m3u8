# Generated by Django 2.0.2 on 2018-03-10 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_channel_extra_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='playlist',
            name='title',
            field=models.CharField(default='', max_length=255),
        ),
    ]
