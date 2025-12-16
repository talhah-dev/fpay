"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CameraIcon, UserIcon } from "lucide-react";
import { RequestPending } from "@/components/RequestPending";

export default function ProfileSetup() {
    const [image, setImage] = useState<string | null>(null);
    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setImage(url);
    };

    const handleSubmit = () => {
        console.log({
            image,
            username,
            fullName,
            bio,
            role,
            location,
            website,
        });
    };

    return (
        <>
            {/* <main className="mx-auto max-w-2xl min-h-screen flex flex-col justify-center space-y-8 p-6">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold">Complete your profile</h1>
                    <p className="text-muted-foreground">
                        Tell us a bit about yourself to get started.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24">
                        <AvatarImage className="rounded-full" src={image ?? undefined} />
                        <AvatarFallback>
                            <UserIcon />
                        </AvatarFallback>
                    </Avatar>

                    <label className="flex cursor-pointer items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-accent">
                        <CameraIcon className="h-4 w-4" />
                        Upload photo
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>

                <div className="space-y-4">
                    <Input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Input
                        placeholder="Full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    <Textarea
                        placeholder="Short bio about yourself"
                        className="resize-none"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />

                    <Select value={role} onValueChange={setRole}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="software-developer">
                                Software Developer
                            </SelectItem>
                            <SelectItem value="frontend-developer">
                                Frontend Developer
                            </SelectItem>
                            <SelectItem value="backend-developer">
                                Backend Developer
                            </SelectItem>
                            <SelectItem value="fullstack-developer">
                                Full Stack Developer
                            </SelectItem>
                            <SelectItem value="designer">Designer</SelectItem>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>

                    <Input
                        placeholder="Location (e.g. Pakistan)"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <Input
                        placeholder="Website or portfolio link"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>

                <Button size="lg" className="w-full" onClick={handleSubmit}>
                    Save profile
                </Button>
            </main> */}
            <div className="flex items-center justify-center h-screen">
                <RequestPending />
            </div>
        </>
    );
}
