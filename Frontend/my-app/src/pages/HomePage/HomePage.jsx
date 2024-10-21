import axios from "axios";
import {React, useEffect} from "react";

export function HomePage() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get('http://localhost:3000/v1/api/');
      console.log("Res: ", res);
    }
    fetchHelloWorld();
  }, []);

  return (
    <>
      <p className="homepage-title">HomePage</p>
    </>
  );
}
