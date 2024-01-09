//@ts-nocheck
"use client";

import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { useState } from "react";

export function SimpleRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // Handle successful submission, e.g., show a success message or redirect
        console.log("Form submitted successfully!");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Card color="transparent" shadow={false} className="md:max-w-[40vw]">
      <Typography variant="h4" color="blue-gray">
        Contact Us
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        How may I help You ? I can help design a website, a new product, improve
        an existing part of your product.
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 ">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
         
            placeholder="Enter your name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            
            placeholder="name@email.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Query
          </Typography>
          <div className="">
            <Textarea
              label="Enter your Message"
            
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <Button type="submit" className="mt-6 bg-black text-white dark:bg-white dark:text-black" fullWidth>
          Send Now
        </Button>
      </form>
    </Card>
  );
}
