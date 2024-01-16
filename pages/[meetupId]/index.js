import MeetupDetails from "@/components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetail(props) {
  return (
    <MeetupDetails
      image={props.meetupData.image}
      h1={props.meetupData.title}
      address={props.meetupData.address}
      p={props.meetupData.description}
    />
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Tanmay-Sihare:sumansihare@cluster0.tko8o8o.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {

  const meetupId = context.params.meetupId;
  const newMeetupId = new ObjectId(meetupId);
  const client = await MongoClient.connect(
    "mongodb+srv://Tanmay-Sihare:sumansihare@cluster0.tko8o8o.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({_id:newMeetupId});
  

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address:selectedMeetup.address,
        image:selectedMeetup.image,
        description:selectedMeetup.description,
      },
    },
  };
}
export default MeetupDetail;
