# generate-keys-


aws ssm put-parameter \                                                                                
    --region us-east-1 \
    --name command2 \
    --type String \
    --value file://test.text \
--overwrite
{
    "Version": 3
}
