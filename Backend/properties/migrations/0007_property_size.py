# Generated by Django 4.2.6 on 2023-11-16 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0006_property_for_sale_property_num_of_bathrooms_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='size',
            field=models.PositiveIntegerField(default=500),
            preserve_default=False,
        ),
    ]
