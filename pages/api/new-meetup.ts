import { MongoClient } from 'mongodb';

async function handler(req : any , res : any){
    if(req.method === 'POST'){
        const data = req.body;

        const { title , image , address , description } = data;

        const client  = await MongoClient.connect('mongodb://localhost:27017/to-do-list');

        const db = client.db();

        const meetupCollection = db.collection('meetup')

        const result = await meetupCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({message : 'Meetup Inserted !!'})
    }
}

export default handler;
