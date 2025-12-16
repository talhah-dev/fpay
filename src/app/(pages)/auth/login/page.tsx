"use client";

import { FloatingPaths } from "@/components/FloatingPaths";
import { Button } from "@/components/ui/button";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import {
    AtSignIcon,
    ChevronLeftIcon,
    LogOut,
    LogsIcon,
    EyeIcon,
    EyeOffIcon,
    LockKeyholeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="relative md:h-screen md:overflow-hidden lg:grid lg:grid-cols-2">
            <div className="relative hidden h-full flex-col border-r bg-secondary p-10 lg:flex dark:bg-secondary/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
                <Link href={"/"}>
                    <Image src={"/quzex.png"} className="h-10 brightness-0 w-auto" alt="logo" width={200} height={200} />
                </Link>

                <div className="z-10 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-xl">
                            &ldquo;This Platform has helped us to save time and manage our
                            payments faster than ever before.&rdquo;
                        </p>
                        <footer className="font-mono font-semibold text-sm">
                            ~ Muhammad Talha
                        </footer>
                    </blockquote>
                </div>

                <div className="absolute inset-0">
                    <FloatingPaths position={1} />
                    <FloatingPaths position={-1} />
                </div>
            </div>

            <div className="relative flex min-h-screen flex-col justify-center p-4">
                <div
                    aria-hidden
                    className="-z-10 absolute inset-0 isolate opacity-60 contain-strict"
                >
                    <div className="-translate-y-87.5 absolute top-0 right-0 h-320 w-140 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]" />
                    <div className="absolute top-0 right-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="-translate-y-87.5 absolute top-0 right-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]" />
                </div>

                <Button asChild className="absolute top-7 left-5" variant="ghost">
                    <a href="#">
                        <ChevronLeftIcon />
                        Home
                    </a>
                </Button>

                <div className="mx-auto space-y-4 sm:w-sm">
                    <LogsIcon className="h-5 lg:hidden" />

                    <div className="flex flex-col space-y-1">
                        <h1 className="font-bold text-2xl tracking-wide">Welcome back!</h1>
                        <p className="text-base text-muted-foreground">
                            Login with your account to continue.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Button className="w-full" size="lg" type="button">
                            <GoogleIcon />
                            Login with Google
                        </Button>
                        <Button className="w-full" size="lg" type="button">
                            <GithubIcon />
                            Login with GitHub
                        </Button>
                    </div>

                    <div className="flex w-full items-center justify-center">
                        <div className="h-px w-full bg-border" />
                        <span className="px-2 text-muted-foreground text-xs">OR</span>
                        <div className="h-px w-full bg-border" />
                    </div>

                    <form className="space-y-2">
                        <p className="text-start text-muted-foreground text-xs">
                            Enter your email and password to login.
                        </p>

                        {/* Email */}
                        <InputGroup>
                            <InputGroupInput
                                placeholder="your.email@example.com"
                                type="email"
                            />
                            <InputGroupAddon>
                                <AtSignIcon />
                            </InputGroupAddon>
                        </InputGroup>

                        {/* Password */}
                        <InputGroup>
                            <InputGroupInput
                                placeholder="Enter your password"
                                type={showPassword ? "text" : "password"}
                            />
                            <InputGroupAddon>
                                <LockKeyholeIcon className="mr-1" />
                            </InputGroupAddon>
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                className="inline-flex mr-2 text-[#737373] items-center justify-center"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                            </button>
                        </InputGroup>

                        <Button className="w-full" type="button">
                            Login
                        </Button>
                    </form>

                    <p className="text-muted-foreground text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link
                            className="underline underline-offset-4 hover:text-primary"
                            href="/auth/signup"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}

const GoogleIcon = (props: React.ComponentProps<"svg">) => (
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g>
            <path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669   C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62   c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401   c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
        </g>
    </svg>
);

const GithubIcon = (props: React.ComponentProps<"svg">) => (
    <svg fill="currentColor" viewBox="0 0 1024 1024" {...props}>
        <path
            clipRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
            fill="currentColor"
            fillRule="evenodd"
            transform="scale(64)"
        />
    </svg>
);
