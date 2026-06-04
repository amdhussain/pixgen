 
"use client";
import { authClient } from "@/lib/auth-client";
import { GrGoogle } from "react-icons/gr";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

// import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL:'/'
    });

    console.log({ data, error });
  };

  const handleGrGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider:'google'
    })
  }

  return (
    <Card className="border mx-auto w-125 mt-5 mb-8 px-8 py-10">
      <h1 className="text-center text-2xl font-bold mb-6">Sign In</h1>

      <Form onSubmit={onSubmit} className="flex flex-col gap-6">
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-8">
          <Button type="submit">
            <Check />
            Submit
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>

      <p className="text-center">Or</p>
      <Button onClick={handleGrGoogleSignIn} variant="outline" className="w-full">
         <GrGoogle/>
           Sign in with Google
</Button>
    </Card>
  );
}





// "use client";
// import { authClient } from "@/lib/auth-client";
// import { GrGoogle } from "react-icons/gr";
// import { Check } from "@gravity-ui/icons";
// import {
//   Button,
//   Card,
//   Description,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";

// export default function SignInPage() {
//   const onSubmit = async (e) => {
//     e.preventDefault();
    
//     // FormData ব্যবহার করুন, এটি যেকোনো ফর্ম এলিমেন্টের জন্য সবচেয়ে কার্যকর
//     const formData = new FormData(e.target);
//     const email = formData.get("email");
//     const password = formData.get("password");

//     const { data, error } = await authClient.signIn.email({
//       email,
//       password,
//       callbackURL: '/', // লগইন হওয়ার পর যেখানে যাবে
//     });

//     if (error) {
//       console.error("Login Error:", error.message);
//       // এখানে আপনি একটি alert বা toast ব্যবহার করে ইউজারকে দেখাতে পারেন
//     } else {
//       console.log("Success:", data);
//     }
//   };

//   const handleGrGoogleSignIn = async () => {
//     await authClient.signIn.social({
//       provider: 'google',
//       callbackURL: '/', // এখানেও callbackURL থাকা ভালো
//     });
//   };

//   return (
//     <Card className="border mx-auto w-full max-w-md mt-5 mb-8 px-8 py-10">
//       <h1 className="text-center text-2xl font-bold mb-6">Sign In</h1>

//       <Form onSubmit={onSubmit} className="flex flex-col gap-6">
//         <TextField isRequired name="email" type="email">
//           <Label>Email</Label>
//           <Input placeholder="john@example.com" />
//           <FieldError />
//         </TextField>

//         <TextField isRequired minLength={8} name="password" type="password">
//           <Label>Password</Label>
//           <Input placeholder="Enter your password" />
//           <Description>Must be at least 8 characters</Description>
//           <FieldError />
//         </TextField>

//         <div className="flex gap-4">
//           <Button type="submit">
//             <Check /> Submit
//           </Button>
//           <Button type="reset" variant="bordered">
//             Reset
//           </Button>
//         </div>
//       </Form>

//       <div className="text-center my-4">Or</div>
      
//       <Button onClick={handleGrGoogleSignIn} variant="bordered" className="w-full">
//          <GrGoogle className="mr-2" /> Sign in with Google
//       </Button>
//     </Card>
//   );
// }