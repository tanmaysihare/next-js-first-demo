import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>HomePage Meetup</title>
        <meta name="description" content="Browse a huge list of highly active react meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Tanmay-Sihare:sumansihare@cluster0.tko8o8o.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = meetupsCollection.find().toArray();

  return {
    props: {
      meetups: (await meetups).map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
