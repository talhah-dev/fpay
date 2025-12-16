"use client"
// import UserWrapper from '@/app/wrapper/UserWrapper'
import CreateProjectCard from '@/components/CreateProjectCard'
import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardDescription, CardTitle, CardFooter, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Trash2, PlayCircle } from 'lucide-react';
import { toast } from 'sonner'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

const CreateProject = () => {
    const [status, setStatus] = useState<string>("pending")
    const [loading, setLoading] = useState<boolean>(false)
    const [id, setId] = useState<string>("")

    interface Project {
        title: string,
        amount: number,
        deadline: string,
        status: string,
        framework: string,
        isActive: boolean,
        time: string,
        _id: string,
        author: {
            name: string,
            email: string,
            avatar: string,
            _id: string,
        }
    }


    return (
        <>
            <div className="md:px-10 px-3 mt-8">
                <CreateProjectCard />
            </div>

            <div className="md:px-10 px-3">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 my-8">
                    <Card className="border-none relative">
                        <CardHeader>
                            <Link href="/dashboard/profile/author-id">
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage
                                            src="https://placehold.co/64x64"
                                            alt="John Doe"
                                        />
                                        <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                                    </Avatar>

                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-medium">John Doe</span>
                                        <span className="truncate text-xs">john@example.com</span>
                                    </div>
                                </div>
                            </Link>

                            <CardTitle className="flex mt-3 text-lg items-center justify-between">
                                Static Project Title
                                <Badge variant="default">Active</Badge>
                            </CardTitle>

                            <CardDescription className="flex items-center gap-2">
                                <Badge variant="outline">Next.js</Badge>
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="grid grid-cols-2 gap-4 items-center">
                            <div className="flex flex-col">
                                <span className="text-[0.65rem] font-medium uppercase">Price</span>
                                <span className=" font-semibold">Rs 50,000</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-[0.65rem] font-medium uppercase">Deadline</span>
                                <span className=" font-semibold">Dec 20 - 18:30</span>
                            </div>
                        </CardContent>

                        <CardFooter className="flex gap-2 justify-between items-end">
                            
                            <div className="flex flex-col w-full space-y-1.5">
                                <Label htmlFor="framework">Status</Label>

                                {/* Static Select (no onValueChange, no state) */}
                                <Select value="pending">
                                    <SelectTrigger className="w-full" id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="w-full">
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="progress">Progress</SelectItem>
                                        <SelectItem value="fail">Fail</SelectItem>
                                        <SelectItem value="completed">Completed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Static action button / icon area */}
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className="px-3 py-2 text-sm border rounded-lg"
                                >
                                    Edit
                                </button>
                            </div>
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className="px-3 py-2 text-sm border rounded-lg"
                                >
                                    Details
                                </button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default CreateProject


export function AlertDialogDemo({ projectId }: { projectId: string }) {


    if (!projectId) {
        return toast.error("Project Not Found");
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant='ghost'
                    size='icon'
                    className='text-red-500 hover:text-red-600 hover:bg-red-50 '
                >
                    <Trash2 className='w-5 h-5' />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Please confirm that you want to delete this item. This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction> Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

