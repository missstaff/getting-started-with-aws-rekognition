# getting-started-with-aws-rekognition

### The following instructions contain steps for getting started using AWS Rekognition api

## ⚙ Getting Setup:
- Create an AWS developer account, if you do not alreday have one 
- 🔗 to create a developer account: https://developer.amazon.com/en-US/docs/alexa/ask-overviews/create-developer-account.html 

## ✔ Set IAM role:
- In your AWS dev dashboard type IAM into the search bar and select the IAM result 
- Select roles and then create new role 
- Select AWS service and Lambda options 
- Use the search bar to locate and select: AmazonRekognitionFullAccess, AmazonS3ReadOnlyAccess, AWSLambdaExecute apis follow the prompts to create the IAM role 

- Create an S3 storage bucket 
- Upload images to populate the index of faces to compare photos against 

## 🏃‍♀️ Get Running:
- clone this repo 
- open a terminal 
- cd into reKognition 
- run npm install to install the @aws-sdk/client-rekognition and aws-sdk npms 

## 🚶‍♂️ Next Steps:
- inspect the index.js file 
- index.js contains some basic code in nodejs for creating a collection and deleting a collection, for retrieving meta data labels, for comapring two supplied images and for comparing 1 image against a collection or index of faces 
- there are inputs to put your credentials/data enter that information in those places ie. bucket name
- all code examples are commented out. You will need to comment them in and out as needed 
- you will need to supply photos both uploaded in your bucket and the file path or web address of the image being uploaded/compared 
- in reKognition dir uncomment code to run and run node index.js in the terminal

# PLEASE TAKE NOTE THIS PROJECT MAY INCUR COSTS PLEASE BE SURE TO DELETE ANY BUCKETS OR RESOURCES INSTANTIATED IN THIS PROJECT TO PREVENT FUTURE COSTS.

## PLEASE FEEL FREE TO CONTRIBUTE TO THIS PROJECT
