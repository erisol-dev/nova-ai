import LoginCard from "@/components/auth/LoginCard";
import RegisterCard from "@/components/auth/RegisterCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator"


export default function Acount() {
  return (
    <div className="flex flex-grow flex-col justify-center items-center h-screen overflow-y-hidden">
      <Tabs defaultValue="Login" className = "w-full max-w-sm">
        <TabsList className="grid w-full grid-cols-2 my-8">
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="Login">
          <LoginCard />
        </TabsContent>
        <TabsContent value="Register">
          <RegisterCard />
        </TabsContent>
      </Tabs>

      <div className="flex flex-row mt-4 items-center justify-center w-full max-w-sm">
        <Separator className="m-4 max-w-36" />
        <p className="text-gray-50">Or</p>
        <Separator className="m-4 max-w-36" />
        {/* Buttons */}
      </div>
      <div className="flex gap-4 mt-4 w-full max-w-sm">
        <Button className="w-full rounded-full">Google</Button>
        <Button className="w-full rounded-full">Facebook</Button>
      </div>
      

    </div>
  );
}
