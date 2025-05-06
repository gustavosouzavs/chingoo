// app/actions/contact.ts
"use server";

// Define the contact form input type
export interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  brand: string;
  message: string;
}

// Response type
export interface ContactFormResponse {
  success: boolean;
  message: string;
}

export async function submitContactForm(formData: ContactFormInputs): Promise<ContactFormResponse> {
  try {
    // Basic server-side validation
    if (!formData.name || formData.name.length < 2) {
      return {
        success: false,
        message: "Name is required and must be at least 2 characters."
      };
    }

    if (!formData.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      return {
        success: false,
        message: "A valid email address is required."
      };
    }

    if (!formData.subject || formData.subject.length < 5) {
      return {
        success: false,
        message: "Subject is required and must be at least 5 characters."
      };
    }

    if (!formData.message || formData.message.length < 10 || formData.message.length > 500) {
      return {
        success: false,
        message: "Message is required and must be between 10 and 500 characters."
      };
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the contact request
    console.log("Processing contact form submission:", formData);

    // For demonstration, we'll simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Example email sending logic (replace with actual implementation)
    // await sendEmail({
    //   to: "support@yourcompany.com",
    //   subject: `New Contact Form: ${formData.subject}`,
    //   text: `
    //     Name: ${formData.name}
    //     Email: ${formData.email}
    //     Message: ${formData.message}
    //   `
    // });

    return {
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon!"
    };
  } catch (error) {
    console.error("Error processing contact form:", error);

    // Handle other errors
    return {
      success: false,
      message: "Something went wrong while processing your request. Please try again later."
    };
  }
}