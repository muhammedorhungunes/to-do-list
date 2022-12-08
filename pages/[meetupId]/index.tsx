import type { NextPage } from "next";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const MeetupDetails: NextPage = (props: any) => {
  return (
    <Fragment>
      <Head>
          <title>{props.meetupData.title}</title>
          <meta name='description' content={props.meetupData.description}></meta>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb://localhost:27017/to-do-list"
  );

  const db = client.db();

  const meetupCollection = db.collection("meetup");

  const meetups = await meetupCollection.find({}, { _id: 1 } as any).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context: any) {
  //fetching data for a single meetup
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb://localhost:27017/to-do-list"
  );

  const db = client.db();

  const meetupCollection = db.collection("meetup");

  const selectedMeetup = (await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  })) as any;

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
