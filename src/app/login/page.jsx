"use client";
import { useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
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
import { completeSoftNavigation } from "next/dist/client/components/segment-cache/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import Link from "next/link";

export default function SignInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();


        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log({ email, password });

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/"
        })

        // console.log({data,error})

        if (error) {
            // console.log("Login failed:", error);
            toast.error("Login failed: " + error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: 'google'
        })
    }
    return (
        <div className="p-4 py-18 mt-20">
            <Card className="border mx-auto w-full sm:w-96 md:w-125 lg:w-125 py-5 sm:py-8 md:py-10 lg:py-10 mt-2 sm:mt-5 md:mt-5 lg:mt-5 bg-[#242020] text-white px-4 sm:px-6 md:px-8 lg:px-8">
                <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold">Sign In</h1>

                <Form className="flex w-full sm:w-80 md:w-96 lg:w-96 mx-auto flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4" onSubmit={onSubmit}>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label className="text-white">Email</Label>
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
                        <Label className="text-white">Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-1 sm:gap-2 md:gap-2 lg:gap-2 flex-col sm:flex-row">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
                <p className="text-center text-2xl font-semibold">or</p>
                <Button variant="secondary" className="w-full bg-[#00D3BB] text-white font-bold" onClick={handleGoogleSignIn}>
                    <FaGoogle />
                    Sign in with Google
                </Button>
                <Link href={"/signup"}>
                    <Button className={"w-full"} variant="secondary">
                            Don't have an account? Sign Up
                    </Button>
                </Link>
            </Card>
        </div>
    );
}