# Generated by Django 2.0.2 on 2018-03-06 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_auto_20180220_1536'),
    ]

    operations = [
        migrations.AddField(
            model_name='channel',
            name='extra_data',
            field=models.TextField(blank=True, null=True),
        ),
    ]
