# Generated by Django 4.1.3 on 2022-11-03 19:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0002_rename_members_item'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image',
            field=models.ImageField(upload_to='items'),
        ),
    ]
