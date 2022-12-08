import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';


const MeetupList = (props : any) => {
    return (
        <ul className="m-0 p-0 list-none	">
          {props.meetups.map((meetup : any) => (
            <MeetupItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
            />
          ))}
        </ul>
      );
}

export default MeetupList