import { useState, useEffect } from "react";
import Project from "../types/Project";
import axios from "axios";

const useFetchProjects = () => {
  const [projects, setProjects] = useState<Project[]>(new Array<Project>());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProjects = async () => {
    await axios.get(process.env.REACT_APP_API_URL + "").then((res) => {
      setProjects(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, isLoading };
};

export default useFetchProjects;
