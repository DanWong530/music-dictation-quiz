export function sameRhythm(userMeasure, answerMeasure) {
    if (userMeasure.length !== answerMeasure.length) return false;
    return userMeasure.every((note, i) => note.duration === answerMeasure[i].duration);
  }
  
  export function samePitch(userMeasure, answerMeasure) {

    if (userMeasure.length !== answerMeasure.length) return false;
  
    return userMeasure.every((note, i) => {
      const userKey = note.keys[0];    
      const answerKey = answerMeasure[i].keys[0];
  
      let [userPitch, userOct] = userKey.split("/");
      let [answerPitch, answerOct] = answerKey.split("/");
  
      if (userPitch[1] === "n") {
        userPitch = userPitch[0]
      }
      return userPitch.toLowerCase() === answerPitch.toLowerCase();
    });
  }