/*CREATE COLLECTION*/

// import { CreateCollectionCommand} from  "@aws-sdk/client-rekognition";
// import  { RekognitionClient } from "@aws-sdk/client-rekognition";

// const REGION = ""; //input your region example:  "us-west-2"
// const rekogClient = new RekognitionClient({ region: REGION });
// const collection_name = ""  // input a name for your collection


// const createCollection = async (collectionName) => {
//     try {
//        console.log(`Creating collection: ${collectionName}`)
//        const data = await rekogClient.send(new CreateCollectionCommand({CollectionId: collectionName}));
//        console.log("Collection ARN:")
//        console.log(data.CollectionARN)
//        console.log("Status Code:")
//        console.log(String(data.StatusCode))
//        console.log("Success.",  data);
//        return data;
//     } catch (err) {
//       console.log("Error", err.stack);
//     }
//   };

//   createCollection(collection_name)


/////////////////////////////////////////
/* DELETE COLLECTIOM */

// import { DeleteCollectionCommand } from  "@aws-sdk/client-rekognition";
// import  { RekognitionClient } from "@aws-sdk/client-rekognition";


// const REGION = ""; //input your region example:  "us-west-2"
// const rekogClient = new RekognitionClient({ region: REGION });
// const collection_name = ""  // input a name for your collection

// const deleteCollection = async (collectionName) => {
//     try {
//        console.log(`Attempting to delete collection named - ${collectionName}`)
//        var response = await rekogClient.send(new DeleteCollectionCommand({CollectionId: collectionName}))
//        var status_code = response.StatusCode
//        if (status_code = 200){
//            console.log("Collection successfully deleted.")
//        }
//        return response; 
//     } catch (err) {
//       console.log("Error", err.stack);
//     }
//   };

// deleteCollection(collection_name)


////////////////////////////////////////
/*COMPARE A FACE AGAINST A COLLECTION*/

// import AWS from 'aws-sdk';

// AWS.config.update({
//   accessKeyId: "", //input our aws accessKeyId
//   secretAccessKey: "", //input your aws secretAccessKey
//   region: "" //input your region example:  "us-west-2"
// });

// const rekognition = new AWS.Rekognition();
// const bucket = ""; //input thename of your s3 bucket 
// const collection_name = ""; //input the name of the collection being accessed
// const imageToCompare = "";  // input the local file path or web address of the image to compare *note there must be a face indexed in the collection that does match to yield any postive responses*

// const params = {
//   "CollectionId": collection_name,
//   "Image": {
//       "S3Object": {
//           "Bucket": bucket,
//           "Name": imageToCompare,
//       }
//   },
//   "MaxFaces": 2,
//   "FaceMatchThreshold": 70
// }

// rekognition.searchFacesByImage(params, function(error, data){
//  if(error) console.log("ERR", error);
//  console.log("DATA", data);
// })


///////////////////////////////////////////////
/* COMPARE FACE SUPPLYING TARGET AND SOURCE */

// import AWS from 'aws-sdk';

// AWS.config.update({
//   accessKeyId: "", //input our aws accessKeyId
//   secretAccessKey: "", //input your aws secretAccessKey
//   region: "" //input your region example:  "us-west-2"
// });

// const rekognition = new AWS.Rekognition();

// const bucket = ""; //input thename of your s3 bucket 
// const photo_source  = ""; //path to source photo
// const photo_target  = ""; //path to target photo


// const params = {
//   SourceImage: {
//     S3Object: {
//       Bucket: bucket,
//       Name: photo_source
//     },
//   },
//   TargetImage: {
//     S3Object: {
//       Bucket: bucket,
//       Name: photo_target
//     },
//   },
//   SimilarityThreshold: 70
// };


// rekognition.compareFaces(params, function(err, response){
//   if (err) {
//     console.log(err, err.stack); // an error occurred
//   } else {
//     response.FaceMatches.forEach(data => {
//       let position  = data.Face.BoundingBox
//       let similarity = data.Similarity
//       console.log(`The face at: ${position.Left}, ${position.Top} matches with ${similarity} % confidence`)
//     }) 
//   }
// })


/////////////////////////////
/*DETECT LABELS*/

// import AWS from 'aws-sdk';

// AWS.config.update({
//   accessKeyId: "", //input our aws accessKeyId
//   secretAccessKey: "", //input your aws secretAccessKey
//   region: "" //input your region example:  "us-west-2"
// });

// const rekognition = new AWS.Rekognition();

// const bucket = ""; //input thename of your s3 bucket 
// const photo_source  = ""; //path to source photo;

// const params = {
//   Image: {
//     S3Object: {
//       Bucket: bucket,
//       Name: photo_source
//     }
//   },
//   MaxLabels: 5,
//   MinConfidence: 80
// };
// rekognition.detectLabels(params, function(err, data){
  // if(err) console.log(err, err.stack);
  // else console.log(data);
// })
