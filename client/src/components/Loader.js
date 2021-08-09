import React from "react";
import { StyledLoader } from "../styled components/styledLoader";
import { useSelector, useDispatch } from "react-redux";
import { getRecommendations, currStep } from "../redux/actions";
import axios from "axios";

export default function Loader() {
  const genre = useSelector((state) => state.genre);
  const dance = useSelector((state) => state.dance);
  const instrument = useSelector((state) => state.instrument);
  const mode = useSelector((state) => state.mode);
  const tempo = useSelector((state) => state.tempo);
  const popularity = useSelector((state) => state.popularity);
  const valance = useSelector((state) => state.valance);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    // axios
    //   .get("/api/query", "test")
    axios({
      url: "/api/query",
      method: "POST",

      data: {
        genre,
        dance,
        instrument,
        mode,
        tempo,
        popularity,
        valance,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(getRecommendations(res.data));
        dispatch(currStep("Player"));
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <div>
      <StyledLoader>Loading...</StyledLoader>
    </div>
  );
}
