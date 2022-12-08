import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';
import ToDoListForm from '../../components/todolist/ToDoListForm';

const NewMeetupPage: NextPage = () => {
  const router = useRouter();

  return (<Fragment>
    <Head>
      <title>To Do List From</title>
      <meta name='description' content="Add your own meetups and create amazing networking oppurtunities."></meta>
    </Head>
    <ToDoListForm></ToDoListForm>
    </Fragment>
  )
}

export default NewMeetupPage