import Card from "../ui/Card";
import { useRouter } from "next/router";

const MeetupItem = (props: any) => {
    const router = useRouter();
  function showDetailHandler() {
      router.push('/' + props.id)
  }
  return (
    <li className="m-4">
      <Card>
        <div className="w-full h-64 overflow-hidden rounded-t-sm">
          <img
            src={props.image}
            alt={props.title}
            className="w-full object-cover"
          />
        </div>
        <div className="text-center	p-4">
          <h3 className="text-xl text-black">{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className="text-center	p-6">
          <button
            onClick={showDetailHandler}
            className="cursor-pointer text-blue-400 border-solid border-2 border-light-blue-500 bg-transparent p-2 rounded-sm hover:bg-blue-500 active:bg-blue-100"
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
