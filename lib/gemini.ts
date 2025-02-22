const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export async function generateLessonPlan(lessonPlan: any) {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API key is not configured");
  }

  console.log("Using API key:", GEMINI_API_KEY); // Debug log

  const prompt = `
    Generate a detailed lesson plan based on the following information:
    
    Topic: ${lessonPlan.topic}
    Grade Level: ${lessonPlan.gradeLevel}
    Main Concept & Subtopics: ${lessonPlan.mainConcept}
    Materials Needed: ${lessonPlan.materials}
    Learning Objectives: ${lessonPlan.objectives}
    Lesson Outline: ${lessonPlan.outline}

    Please provide a structured lesson plan that includes:
    1. Introduction and Hook
    2. Main Activities
    3. Assessment Strategies
    4. Closure
    5. Extensions and Modifications
    6. Assessment Questions
    
    Format the response with clear sections and bullet points.
  `;

  try {
    console.log("Sending request to Gemini API..."); // Debug log
    const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    console.log("Response status:", response.status); // Debug log
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData); // Debug log
      throw new Error(`API Error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log("API Response:", data); // Debug log
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error("Invalid response format from API");
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error in generateLessonPlan:", error);
    throw error;
  }
}