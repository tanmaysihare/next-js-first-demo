import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData);
    }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  )
}

export default NewMeetupPage;
