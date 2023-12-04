// SuffleButton component
"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";

const SuffleButton = ({ roomId }: { roomId: string }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSuffleClick = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/updateGiveTo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomId: roomId }),
      });

      if (response.ok) {
        const result = await response.json();
        toast({
          description: "Shuffled successfully!",
        });
      } else {
        console.error("Error updating GiveTo fields:", response.statusText);
        toast({
          variant: "destructive",
          description: "Shuffled Failed!",
        });
      }
    } catch (error) {
      console.error("Error updating GiveTo fields:", error);
      toast({
        variant: "destructive",
        description: "Shuffled Failed!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleSuffleClick} disabled={loading} className="w-full">
      {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Shuffle"}
    </Button>
  );
};

export default SuffleButton;
