from typing import List

from django.shortcuts import get_object_or_404
from ninja import NinjaAPI

from hako.apps.tags.models import Tag
from hako.apps.tags.schema import TagIn, TagUpdateIn, TagOut

api = NinjaAPI()


@api.post("/tags", response={201: TagOut})
def create_tag(request, payload: TagIn):
    tag = Tag.objects.create(**payload.dict())
    return 201, tag


@api.get("/tags", response=List[TagOut])
def list_tags(request):
    tags = Tag.objects.all()
    return tags


@api.put("/tags/{tag_id}", response={200: TagOut})
def update_tag(request, tag_id: int, payload: TagUpdateIn):
    tag = get_object_or_404(Tag, id=tag_id)
    for attr, value in payload.dict().items():
        setattr(tag, attr, value)
    tag.save()
    return 200, tag


@api.delete("/tags/{tag_id}", response={204: None})
def delete_tag(request, tag_id: int):
    tag = get_object_or_404(Tag, id=tag_id)
    tag.delete()
    return 204, None
