import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // grab :id from URL
  return <h2>Blog Post ID: {id}</h2>;
};
