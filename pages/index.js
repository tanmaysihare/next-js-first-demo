import MeetupList from "@/components/meetups/MeetupList";


const DUMMY_MEETUPS =[
    {
        id:'m1',
        title: 'A First Meetup',
        image: 'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
        address: 'some address',
        description: 'This is a first meetup !!',
    },
    {
        id:'m2',
        title: 'A Second Meetup',
        image: 'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
        address: 'some second address',
        description: 'This is a second meetup !!',
    }
]
function HomePage(props) {

  return (
    <div>
      <MeetupList meetups={props.meetups}/>
    </div>
  )
}
export async function getStaticProps(){
  return {
    props:{
      meetups: DUMMY_MEETUPS
    },
    revalidate:1
  };
}

export default HomePage;
