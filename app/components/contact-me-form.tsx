// ContactPage.tsx
"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// Import the interface type from server action
import type { ContactFormInputs } from "@/app/actions/contact";

// Type for form status
type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

export default function ContactPage(): JSX.Element {
  const [formStatus, setFormStatus] = useState<FormStatus>(null);

  // Initialize react-hook-form
  const form = useForm<ContactFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      // Import is inside the function to avoid server/client mismatch errors in Next.js
      const { submitContactForm } = await import("@/app/actions/contact");

      // Set loading state
      setFormStatus({
        type: "success",
        message: "Sending your message...",
      });

      // Call the server action
      const response = await submitContactForm(data);

      if (response.success) {
        setFormStatus({
          type: "success",
          message: response.message,
        });
        // Reset form on success
        form.reset();
      } else {
        setFormStatus({
          type: "error",
          message: response.message,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information Column */}
        <div className="flex flex-col justify-center">
          <Card className="shadow-none border-0">
            <CardContent className="space-y-6">
              <h1 className="text-2xl lg:text-4xl font-extrabold mr-40">
                We at Chingoo are excited to help you bring your content to the
                global stage.
              </h1>
              <Button size="lg" className="text-2xl font-extrabold">
                Get a Quote Today!
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Column */}
        <div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us Form</CardTitle>
              <CardDescription>
                {`Fill out the form below and we'll get back to you as soon as
                possible.`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            {...form.register("name", {
                              required: "Name is required",
                              minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters",
                              },
                            })}
                          />
                        </FormControl>
                        <FormMessage>
                          {form.formState.errors.name?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="johndoe@example.com"
                            {...field}
                            {...form.register("email", {
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid email address",
                              },
                            })}
                          />
                        </FormControl>
                        <FormMessage>
                          {form.formState.errors.email?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name/Brand name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="How can we help you?"
                            {...field}
                            {...form.register("brand", {
                              required: "Brand is required",
                              minLength: {
                                value: 5,
                                message: "Brand must be at least 5 characters",
                              },
                            })}
                          />
                        </FormControl>
                        <FormMessage>
                          {form.formState.errors.subject?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="How can we help you?"
                            {...field}
                            {...form.register("subject", {
                              required: "Subject is required",
                              minLength: {
                                value: 5,
                                message:
                                  "Subject must be at least 5 characters",
                              },
                            })}
                          />
                        </FormControl>
                        <FormMessage>
                          {form.formState.errors.subject?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write your message here..."
                            rows={5}
                            {...field}
                            {...form.register("message", {
                              required: "Message is required",
                              minLength: {
                                value: 10,
                                message:
                                  "Message must be at least 10 characters",
                              },
                              maxLength: {
                                value: 500,
                                message:
                                  "Message must not exceed 500 characters",
                              },
                            })}
                          />
                        </FormControl>
                        <FormMessage>
                          {form.formState.errors.message?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  {formStatus && (
                    <Alert
                      variant={
                        formStatus.type === "error" ? "destructive" : "default"
                      }
                    >
                      <AlertDescription>{formStatus.message}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
