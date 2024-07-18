import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash } from "lucide-react";

const CollectionsPage = () => {
  const [collections, setCollections] = useState([
    { id: 1, name: "UI Components", description: "Basic UI components like buttons and inputs" },
    { id: 2, name: "Layout Components", description: "Components for page layouts" },
  ]);
  const [newCollection, setNewCollection] = useState({ name: "", description: "" });

  const addCollection = () => {
    if (newCollection.name) {
      setCollections([...collections, { id: Date.now(), ...newCollection }]);
      setNewCollection({ name: "", description: "" });
    }
  };

  const deleteCollection = (id) => {
    setCollections(collections.filter(collection => collection.id !== id));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Collections</h1>
      <div className="flex space-x-4">
        <Input
          placeholder="Collection Name"
          value={newCollection.name}
          onChange={(e) => setNewCollection({ ...newCollection, name: e.target.value })}
        />
        <Input
          placeholder="Description"
          value={newCollection.description}
          onChange={(e) => setNewCollection({ ...newCollection, description: e.target.value })}
        />
        <Button onClick={addCollection}><Plus className="mr-2 h-4 w-4" /> Add Collection</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <Card key={collection.id}>
            <CardHeader>
              <CardTitle>{collection.name}</CardTitle>
              <CardDescription>{collection.description}</CardDescription>
            </CardHeader>
            <CardFooter className="justify-between">
              <Button variant="outline" size="icon"><Edit className="h-4 w-4" /></Button>
              <Button variant="destructive" size="icon" onClick={() => deleteCollection(collection.id)}>
                <Trash className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;