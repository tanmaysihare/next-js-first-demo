import { useRouter } from 'next/router';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function NewsId() {
  const router = useRouter();
  const newsId = router.query.newsid;

 
  const detailsMap = details.find((detail) => detail.id === parseInt(newsId));

  
  if (detailsMap) {
    const { id, name, role } = detailsMap;

    return (
      <div>
        <h3>ID: {id}</h3>
        <h3>Name: {name}</h3>
        <h3>Role: {role}</h3>
      </div>
    );
  } else {
    return <div>Developer doesn't exist</div>;
  }
}

export default NewsId;
