"use client"

import React from "react";
import { Register } from "@/lib/actions"; // Your server action
import {Form, Input, Button} from "@nextui-org/react";

export default function RegisterCard() {
  return (
      <Form
      className="flex-grow flex-col gap-4"
      validationBehavior="native"
      action = {Register}
    >
      <Input
        isClearable
        isRequired
        variant="bordered"
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="username"
        type="text"
      />
      
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
        placeholder="password"
        type="password"
      />

      <Input
        isClearable
        isRequired
        variant="bordered"
        label="Confirm Password"
        labelPlacement="outside"
        name="confirmPassword"
        placeholder="confirm"
        type="password"
      />

      <div className="flex gap-2 w-full">
        <Button color="primary" type="submit" size="lg" className="w-full rounded-full">
          Sign Up
        </Button>
      </div>
    </Form>
  );
}
