import { Button } from "../ui/button";

export default function TodoCard() {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo tile</p>
      <p>Time</p>
      <p>description</p>
      <div className="space-x-4">
        <Button>delete </Button>
        <Button>edit </Button>
      </div>
    </div>
  );
}
