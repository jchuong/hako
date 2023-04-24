from ninja import ModelSchema, Schema

from hako.apps.tags.models import Tag

class TagIn(Schema):
    name: str

class TagUpdateIn(Schema):
    name: str
    category: int = None

class TagOut(ModelSchema):
    class Config:
        model = Tag
        model_fields = ['id', 'name']