import React from "react";
import { useDispatch } from "react-redux";
import { currStep } from "../redux/actions";
import { StyledButton } from "../styled components/styledForm";
import { StyledText } from "../styled components/styledApp";
import { StyledStart } from "../styled components/styledStart";
export default function Start() {
  const dispatch = useDispatch();
  function handleStart() {
    dispatch(currStep("Form1"));
  }
  return (
    <StyledStart>
      <StyledText>
      Hey! Do you struggle with getting song recommendations like me? 
      If so, you came to the right place! Just adjust the song parameters according to your 
      mood and get wonderful recommendations. Here's the fun part, 
      you can play the song on the website itself.  <div>Enjoy!</div>
      </StyledText>
      <StyledButton start="true" onClick={handleStart}>
        Start!
      </StyledButton>
    </StyledStart>
  );
}
