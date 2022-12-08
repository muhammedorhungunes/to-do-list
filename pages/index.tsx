import type { NextPage } from "next";
import Head from "next/head" 
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";


const HomePage: NextPage = (props : any) => {
  

  return (
  <Fragment>
    <Head>
      <title>To Do List</title>
      <meta name='description' content="Browse a hug list of highly active React to do list!!"></meta>
    </Head>
    <MeetupList meetups={props.meetups} />
    
  </Fragment>
  )
};

// export async function getServerSideProps(context : any){
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETSUPS
//     }
//   }
// } 

export async function getStaticProps() {

  const client  = await MongoClient.connect('mongodb://localhost:27017/to-do-list');

  const db = client.db();

  const meetupCollection = db.collection('meetup')

  const result =  await meetupCollection.find().toArray();

  return {
    props: {
      meetups: result.map(meetup  => ({
        title: meetup.title ,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  } 
  
}

export default HomePage;
