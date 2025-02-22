"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Info } from "lucide-react";
import { generateLessonPlan } from "@/lib/gemini";

interface LessonPlan {
  topic: string;
  gradeLevel: string;
  mainConcept: string;
  materials: string;
  objectives: string;
  outline: string;
  notes: string;
}

export default function LessonPlanForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [lessonPlan, setLessonPlan] = useState<LessonPlan>({
    topic: "",
    gradeLevel: "",
    mainConcept: "",
    materials: "",
    objectives: "",
    outline: "",
    notes: ""
  });
  const [generatedPlan, setGeneratedPlan] = useState("");
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLessonPlan((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGeneratePlan = async () => {
    if (!lessonPlan.topic || !lessonPlan.gradeLevel) {
      toast({
        title: "Error",
        description: "Topic and Grade Level are required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      console.log("Generating lesson plan with data:", lessonPlan);
      const generatedContent = await generateLessonPlan(lessonPlan);
      console.log("Generated content:", generatedContent);
      setGeneratedPlan(generatedContent);
      toast({
        title: "Success",
        description: "Lesson plan generated successfully!",
      });
    } catch (error) {
      console.error("Error generating lesson plan:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate lesson plan. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadPDF = () => {
    toast({
      title: "Coming Soon",
      description: "PDF download functionality will be available soon!",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Create Lesson Plan</h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="topic" className="text-sm font-medium">
                Topic *
              </label>
              <Input
                id="topic"
                name="topic"
                value={lessonPlan.topic}
                onChange={handleInputChange}
                placeholder="e.g., Introduction to Photosynthesis"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="gradeLevel" className="text-sm font-medium">
                Grade Level *
              </label>
              <Input
                id="gradeLevel"
                name="gradeLevel"
                value={lessonPlan.gradeLevel}
                onChange={handleInputChange}
                placeholder="e.g., 8th Grade"
                required
              />
            </div>
          </div>

          {/* Main Concept */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label htmlFor="mainConcept" className="text-sm font-medium">
                Main Concept & Subtopics
              </label>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
            <Textarea
              id="mainConcept"
              name="mainConcept"
              value={lessonPlan.mainConcept}
              onChange={handleInputChange}
              placeholder="List the main concept and related subtopics that will be covered in this lesson"
              rows={3}
            />
          </div>

          {/* Materials */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label htmlFor="materials" className="text-sm font-medium">
                Materials Needed
              </label>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
            <Textarea
              id="materials"
              name="materials"
              value={lessonPlan.materials}
              onChange={handleInputChange}
              placeholder="List all required materials, equipment, and resources needed for the lesson (e.g., textbooks, handouts, lab equipment)"
              rows={3}
            />
            <p className="text-sm text-muted-foreground">
              Include both teacher and student materials
            </p>
          </div>

          {/* Learning Objectives */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label htmlFor="objectives" className="text-sm font-medium">
                Learning Objectives
              </label>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
            <Textarea
              id="objectives"
              name="objectives"
              value={lessonPlan.objectives}
              onChange={handleInputChange}
              placeholder="Write SMART objectives (Specific, Measurable, Achievable, Relevant, Time-bound) that students should achieve by the end of the lesson"
              rows={4}
            />
            <p className="text-sm text-muted-foreground">
              Start with action verbs (e.g., identify, explain, analyze, evaluate)
            </p>
          </div>

          {/* Lesson Outline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label htmlFor="outline" className="text-sm font-medium">
                Lesson Outline
              </label>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
            <Textarea
              id="outline"
              name="outline"
              value={lessonPlan.outline}
              onChange={handleInputChange}
              placeholder="Structure your lesson with:
1. Introduction/Hook (5-10 mins)
2. Main Activities/Development (20-30 mins)
3. Practice/Application (15-20 mins)
4. Assessment/Closure (5-10 mins)"
              rows={6}
            />
            <p className="text-sm text-muted-foreground">
              Include timing for each section and specific activities
            </p>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label htmlFor="notes" className="text-sm font-medium">
                Additional Notes
              </label>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
            <Textarea
              id="notes"
              name="notes"
              value={lessonPlan.notes}
              onChange={handleInputChange}
              placeholder="Add any additional notes, differentiation strategies, or special considerations for the lesson"
              rows={3}
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              onClick={handleGeneratePlan}
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate Lesson Plan
            </Button>
            <Button
              type="button"
              onClick={handleDownloadPDF}
              variant="outline"
              className="flex-1"
              disabled={!generatedPlan}
            >
              Download as PDF
            </Button>
          </div>
        </form>
      </Card>

      {generatedPlan && (
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Generated Lesson Plan</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="content">
              <AccordionTrigger>View Generated Content</AccordionTrigger>
              <AccordionContent>
                <Textarea
                  value={generatedPlan}
                  onChange={(e) => setGeneratedPlan(e.target.value)}
                  className="min-h-[400px] mt-4"
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      )}
    </div>
  );
}