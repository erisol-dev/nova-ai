"use client"

import React from "react";
import { Login } from "@/lib/actions"; // Your server action
import {Form, Input, Button} from "@nextui-org/react";
import { FloatingLabelInput } from '@/components/ui/floating-label-input';

export default function LoginCard() {
  return (
      <Form
      className="flex-grow flex-col gap-4"
      validationBehavior="native"
      action = {Login}
    >
      <Input
        isClearable
        isRequired
        variant="bordered"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="you@example.com"
        type="email"
      />

      <Input
        isClearable
        isRequired
        variant="bordered"
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="Enter your password"
        type="password"
      />



      <div className="flex gap-2 w-full">
        <Button color="primary" type="submit" size="lg" className="w-full rounded-full">
          Submit
        </Button>
      </div>
    </Form>
  );
}
