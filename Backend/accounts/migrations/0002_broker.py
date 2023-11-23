"""
Migration Module Docstring: Define the migration for adding the Broker model.

This module contains the migration for creating the Broker model 
and establishing a one-to-one relationship with the CustomUser model.
"""

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    """
    Represents the migration for adding the Broker model.
    """

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Broker',
            fields=[
                ('id', models.BigAutoField(
                    auto_created=True,
                    primary_key=True,
                    serialize=False,
                    verbose_name='ID'
                )),
                ('license_number', models.CharField(
                    max_length=20
                )),
                ('agency', models.CharField(
                    max_length=50
                )),
                ('user', models.OneToOneField(
                    on_delete=django.db.models.deletion.CASCADE,
                    to=settings.AUTH_USER_MODEL
                )),
            ],
        ),
    ]
