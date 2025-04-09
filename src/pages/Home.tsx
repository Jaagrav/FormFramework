import React, { useState, useMemo, useEffect } from "react";
import { useDntelForm } from "../lib/dntel";
import verificationFormDataJson from "../data/verificationFormData.json";
import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { JsonView, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { useToast } from "../hooks/use-toast";
import { FormData } from "../lib/dntel/types";
import {
  ArrowLeft,
  Pencil,
  Maximize2,
  Minimize2,
  Moon,
  Sun,
  Check,
} from "lucide-react";
import ReactConfetti from "react-confetti";
import CodesSectionRenderer from "../lib/dntel/components/CodesSectionRenderer";

// Create a typed wrapper function for the custom section renderer
const CodesSectionWrapper = (props: any): JSX.Element => {
  return <CodesSectionRenderer {...props} />;
};

const formData = JSON.parse(
  JSON.stringify(verificationFormDataJson),
) as FormData;
if (formData.sections && "ServiceHistory" in formData.sections) {
  delete formData.sections["ServiceHistory"];
}

const Home: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("demo");
  const [darkMode, setDarkMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowConfetti = () => {
    setShowConfetti(true);
    toast({
      title: "Form Sent",
      description: "Successfully sent to auditor for review",
    });

    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };

  const {
    FormComponent,
    changes,
    activeSection,
    expandedSections,
    lastChanged,
    expandAll,
    collapseAll,
    scrollToSection,
    reset,
    setEditMode,
    editMode,
    clearLS,
  } = useDntelForm(formData as FormData, "insurance-verification");

  const handleReset = () => {
    reset();
    toast({
      title: "Form Reset",
      description: "All changes have been reset to initial values",
    });
  };

  const handleClearLS = () => {
    clearLS();
    toast({
      title: "LocalStorage Cleared",
      description: "Draft has been removed from localStorage",
    });
  };

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
    toast({
      title: `Edit Mode ${!editMode ? "Enabled" : "Disabled"}`,
      description: `Form is now ${!editMode ? "editable" : "read-only"}`,
    });
  };

  const handleCollapseAll = () => {
    collapseAll();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-10 pt-0 mt-0">
      {showConfetti && (
        <div className="fixed">
          <ReactConfetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.15}
          />
        </div>
      )}
      <div className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Form Framework
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="text-slate-700 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={expandAll}
              className="text-slate-700 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <Maximize2 className="h-3.5 w-3.5 mr-1" />
              Expand All
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleCollapseAll}
              className="text-slate-700 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <Minimize2 className="h-3.5 w-3.5 mr-1" />
              Collapse All
            </Button>

            {editMode ? (
              <Button
                variant="outline"
                size="sm"
                className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30"
                onClick={handleEditModeToggle}
              >
                Cancel Edit
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="bg-white dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700"
                onClick={handleEditModeToggle}
              >
                <Pencil className="h-3.5 w-3.5 mr-1" />
                <span>Edit Form</span>
              </Button>
            )}
            {editMode ? (
              <Button
                size="sm"
                variant="outline"
                className="bg-slate-900 dark:bg-slate-800 text-green-500 hover:text-green-500 hover:bg-slate-800 dark:hover:bg-slate-700 border-slate-700"
                onClick={handleEditModeToggle}
              >
                <Check className="h-3.5 w-3.5 mr-1" />
                Save
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="bg-slate-900 dark:bg-slate-800 text-green-500 hover:text-green-500 hover:bg-slate-800 dark:hover:bg-slate-700 border-slate-700"
                onClick={handleShowConfetti}
              >
                Send To Auditor
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="h-6"></div>

      <div className="container mx-auto px-4 py-0 max-w-screen-2xl">
        <Tabs
          defaultValue="demo"
          onValueChange={setActiveTab}
          value={activeTab}
          className="hidden"
        >
          <TabsList className="mb-6">
            <TabsTrigger value="demo">Demo</TabsTrigger>
            <TabsTrigger value="state">State</TabsTrigger>
            <TabsTrigger value="controls">Controls</TabsTrigger>
          </TabsList>

          <TabsContent value="demo">
            <FormComponent 
              customRenderMap={{
                "Codes": CodesSectionWrapper
              }}
            />
          </TabsContent>

          <TabsContent value="state">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Changes Object</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-50 p-4 rounded-md overflow-auto max-h-[500px]">
                    <JsonView
                      data={changes}
                      style={{
                        ...defaultStyles,
                        container: "overflow-auto",
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hook State</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-50 p-4 rounded-md overflow-auto max-h-[500px]">
                    <JsonView
                      data={{
                        activeSection,
                        expandedSections,
                        lastChanged,
                        editMode,
                      }}
                      style={defaultStyles}
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-md font-semibold mb-2">
                      LocalStorage Entry
                    </h3>
                    <div className="bg-slate-50 p-4 rounded-md">
                      <pre className="text-xs overflow-x-auto">
                        <code>
                          {JSON.stringify(
                            {
                              changes,
                              expandedSections,
                              lastChanged,
                            },
                            null,
                            2,
                          )}
                        </code>
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="controls">
            <Card>
              <CardHeader>
                <CardTitle>Control Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Button
                    onClick={expandAll}
                    variant="outline"
                    className="w-full"
                  >
                    <Maximize2 className="h-3.5 w-3.5 mr-1" />
                    Expand All Sections
                  </Button>

                  <Button
                    onClick={collapseAll}
                    variant="outline"
                    className="w-full"
                  >
                    <Minimize2 className="h-3.5 w-3.5 mr-1" />
                    Collapse All Sections
                  </Button>

                  <Button
                    onClick={handleEditModeToggle}
                    variant={editMode ? "default" : "outline"}
                    className="w-full"
                  >
                    {editMode ? "Disable" : "Enable"} Edit Mode
                  </Button>

                  <Button
                    onClick={handleReset}
                    variant="destructive"
                    className="w-full"
                  >
                    Reset Form
                  </Button>

                  <Button
                    onClick={handleClearLS}
                    variant="destructive"
                    className="w-full"
                  >
                    Clear LocalStorage
                  </Button>
                </div>

                <div className="mt-6">
                  <h3 className="text-md font-semibold mb-3">
                    Jump to Section
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.keys(formData.sections).map((sectionId) => (
                      <Button
                        key={sectionId}
                        onClick={() => scrollToSection(sectionId)}
                        variant="secondary"
                        className="w-full text-sm"
                      >
                        {formData.sections[sectionId].title}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="pt-0">
          <FormComponent 
            customRenderMap={{
              "Codes": CodesSectionWrapper
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
