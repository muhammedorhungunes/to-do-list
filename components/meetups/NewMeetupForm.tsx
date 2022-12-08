import { useRef } from "react";

import Card from "../ui/Card";

const NewMeetupForm = (props: any) => {
  const titleInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const imageInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const addressInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const descriptionInputRef =
    useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const rowsCount = 5 as number;

  function submitHandler(event: any) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className="p-4" onSubmit={submitHandler}>
        <div className="mb-2">
          <label htmlFor="title" className="block font-bold mb-2 ">
            Meetup Title
          </label>
          <input
            type="text"
            className="block rounded-sm border-solid border-4 border-light-blue-500 p-1 w-full"
            required
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="image" className="block font-bold mb-2">
            Meetup Image
          </label>
          <input
            type="url"
            className="block rounded-sm border-solid border-4 border-light-blue-500 p-1 w-full"
            required
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="address" className="block font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            className="block rounded-sm border-solid border-4 border-light-blue-500 p-1 w-full"
            required
            id="address"
            ref={addressInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="block font-bold mb-2">
            Description
          </label>
          <textarea
            className="block rounded-sm border-solid border-4 border-light-blue-500 p-1 w-full"
            id="description"
            required
            rows={rowsCount}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="mt-4 text-right">
          <button className="cursor-pointer bg-blue-700 hover:bg-blue-900 p-2 rounded-md font-bold text-white border-solid">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
