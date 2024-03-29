import boto3
from botocore.exceptions import ClientError
from django.conf import settings
from django.utils import timezone

from datetime import timedelta


def s3_get_client():
    return boto3.client(
        service_name="s3",
        aws_access_key_id=settings.AWS_ACCESS_KEY,
        aws_secret_access_key=settings.AWS_SECRET_KEY,
        region_name=settings.AWS_REGION_NAME
    )


def s3_generate_presigned_post(file_path: str, file_type: str, expires_in):
    s3_client = s3_get_client()

    acl = "private"
    tags = f"<Tagging><TagSet><Tag><Key>Expiration</Key><Value>{expires_in}</Value></Tag></TagSet></Tagging>"
    post_expires_in = 10
    expire_date = str(timezone.now() + timedelta(seconds=int(expires_in)))

    presigned_data = s3_client.generate_presigned_post(
        settings.AWS_BUCKET_NAME,
        file_path,
        Fields={
            "acl": acl,
            "Content-Type": file_type,
            "Tagging": tags,
            "Expires": expire_date,
        },
        Conditions=[
            {"acl": acl},
            {"Content-Type": file_type},
            {"Tagging": tags},
            {"Expires": expire_date}
        ],
        ExpiresIn = post_expires_in,
    )

    return presigned_data


def s3_generate_presigned_url(object_key, expires_in):
    s3_client = s3_get_client()
    try:
        presigned_url = s3_client.generate_presigned_url(
            'get_object',
            Params={
                'Bucket': settings.AWS_BUCKET_NAME,
                'Key': object_key
            },
            ExpiresIn=expires_in)
    except ClientError as e:
        print(e)
        return None
    
    return presigned_url