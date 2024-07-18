import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to WebComp Organizer</h1>
      <p className="text-xl text-muted-foreground">
        Collect, edit, and organize your web components and collections with ease.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Collections</CardTitle>
            <CardDescription>Organize your components into collections</CardDescription>
          </CardHeader>
          <CardContent>
            <NavLink to="/collections">
              <Button>View Collections</Button>
            </NavLink>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Components</CardTitle>
            <CardDescription>Manage your individual web components</CardDescription>
          </CardHeader>
          <CardContent>
            <NavLink to="/components">
              <Button>View Components</Button>
            </NavLink>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>Learn more about WebComp Organizer</CardDescription>
          </CardHeader>
          <CardContent>
            <NavLink to="/about">
              <Button variant="outline">About Us</Button>
            </NavLink>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;