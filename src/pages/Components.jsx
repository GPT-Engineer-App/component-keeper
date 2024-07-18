import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash } from "lucide-react";

const ComponentsPage = () => {
  const [components, setComponents] = useState([
    { id: 1, name: "Button", description: "A customizable button component" },
    { id: 2, name: "Input", description: "A flexible input component" },
  ]);
  const [newComponent, setNewComponent] = useState({ name: "", description: "" });

  const addComponent = () => {
    if (newComponent.name) {
      setComponents([...components, { id: Date.now(), ...newComponent }]);
      setNewComponent({ name: "", description: "" });
    }
  };

  const deleteComponent = (id) => {
    setComponents(components.filter(component => component.id !== id));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Components</h1>
      <div className="flex space-x-4">
        <Input
          placeholder="Component Name"
          value={newComponent.name}
          onChange={(e) => setNewComponent({ ...newComponent, name: e.target.value })}
        />
        <Input
          placeholder="Description"
          value={newComponent.description}
          onChange={(e) => setNewComponent({ ...newComponent, description: e.target.value })}
        />
        <Button onClick={addComponent}><Plus className="mr-2 h-4 w-4" /> Add Component</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Card key={component.id}>
            <CardHeader>
              <CardTitle>{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardFooter className="justify-between">
              <Button variant="outline" size="icon"><Edit className="h-4 w-4" /></Button>
              <Button variant="destructive" size="icon" onClick={() => deleteComponent(component.id)}>
                <Trash className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPage;