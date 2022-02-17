export const returnRange = age => age <= 30 ? "30" : age <= 50 ? "50" : "80";

export const evaluateEmotions = (emotion) => {
  let emotionValue = 0;
  let emotionType;

  if (emotion.anger > emotionValue) {
    emotionValue = emotion.anger;
    emotionType = "anger";
  }
  if (emotion.contempt > emotionValue) {
    emotionValue = emotion.contempt;
    emotionType = "contempt";
  }
  if (emotion.disgust > emotionValue) {
    emotionValue = emotion.disgust;
    emotionType = "disgust";
  }
  if (emotion.fear > emotionValue) {
    emotionValue = emotion.fear;
    emotionType = "fear";
  }
  if (emotion.happiness > emotionValue) {
    emotionValue = emotion.happiness;
    emotionType = "happiness";
  }
  if (emotion.neutral > emotionValue) {
    emotionValue = emotion.neutral;
    emotionType = "neutral";
  }
  if (emotion.sadness > emotionValue) {
    emotionValue = emotion.sadness;
    emotionType = "sadness";
  }
  if (emotion.surprise > emotionValue) {
    emotionValue = emotion.sadness;
    emotionType = "surprise";
  }

  return { emotionType, emotionValue };
}