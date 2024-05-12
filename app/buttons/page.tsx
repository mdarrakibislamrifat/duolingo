import { Button } from "@/components/ui/button";

const ButtonPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
    </div>
  );
};

export default ButtonPage;
