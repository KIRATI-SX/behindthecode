import { CircleAlert } from "lucide-react";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[70vh] flex flex-col gap-5 items-center justify-center">
        <CircleAlert color="#000000" size={100} />
        <h1 className="text-headline-3 text-brown-600">Page Not Found</h1>
        <Button
          variant="primary"
          children="Go to Homepage"
          className="w-40"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </>
  );
}

export default NotFound;
