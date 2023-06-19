from ninja import ModelSchema, Schema

from hako.apps.tags.models import Tag


class TagIn(Schema):
    name: str


class TagUpdateIn(Schema):
    name: str
    category: int = None


class TagOut(ModelSchema):
    # This is required, but OpenAPI doesn't think so
    id: int

    class Config:
        model = Tag
        model_fields = ["id", "name"]
