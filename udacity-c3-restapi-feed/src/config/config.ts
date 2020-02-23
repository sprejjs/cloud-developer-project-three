export const config = {
  "dev": {
    "username": process.env.UDAGRAM_POSTGRESS_USERNAME,
    "password": process.env.UDAGRAM_POSTGRESS_PASSWORD,
    "database": process.env.UDAGRAM_POSTGRESS_DATABSE,
    "host": process.env.UDAGRAM_POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_reigion": process.env.UDAGRAM_AWS_REGION,
    "aws_profile": process.env.UDAGRAM_AWS_PROFILE,
    "aws_media_bucket": process.env.UDAGRAM_AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
