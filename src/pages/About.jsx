import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About WebComp Organizer</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            WebComp Organizer is designed to help developers collect, edit, and organize web components and component collections.
            Our goal is to streamline the process of managing reusable UI elements, making it easier for teams to create consistent and efficient web applications.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create and manage collections of web components</li>
            <li>Add, edit, and delete individual components</li>
            <li>Organize components into logical groups</li>
            <li>Search and filter components and collections</li>
            <li>Responsive design for desktop and mobile use</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            If you have any questions, suggestions, or feedback, please don't hesitate to reach out to us at:
            <br />
            <a href="mailto:support@webcomporganizer.com" className="text-blue-500 hover:underline">
              support@webcomporganizer.com
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;