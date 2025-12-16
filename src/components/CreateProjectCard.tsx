"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ChevronDownIcon, Plus } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Spinner } from "@/components/ui/spinner"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { Textarea } from "./ui/textarea"

export default function CreateProjectCard() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="flex items-center justify-between gap-5">
                <h2 className="md:text-3xl text-2xl font-semibold">Projects</h2>
                <Dialog open={open} onOpenChange={setOpen}>
                    <div className="flex ite gap-2">
                        <Button>Draft</Button>
                        <DialogTrigger asChild>
                            <Button variant="outline"> <Plus /> Create Project</Button>
                        </DialogTrigger>
                    </div>
                    <DialogContent className="sm:max-w-[800px]">
                        <DialogHeader>
                            <DialogTitle>Create Project</DialogTitle>
                            <DialogDescription>
                                Create a new project in one-click.
                            </DialogDescription>
                        </DialogHeader>
                        <CreateProjectForm setOpen={setOpen} />
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}

function CreateProjectForm({ setOpen }: { setOpen: (open: boolean) => void }) {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [time, setTime] = useState<string>("")
    const [framework, setFramework] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [isActive, setIsActive] = useState<boolean>(true)
    const [popoverOpen, setPopoverOpen] = useState(false)

    return (
        <Card className="w-full shadow-none border-0 py-4">
            <div>
                <CardContent className="p-0">
                    <div className="grid w-full gap-4">
                        {/* Project Name */}
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                required
                                id="name"
                                placeholder="Project name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* Date & Time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7 gap-5 md:mt-5 mt-1.5">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="date">Date</Label>
                                <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-full justify-between font-normal"
                                        >
                                            {date ? date.toLocaleDateString() : "Select date"}
                                            <ChevronDownIcon />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            captionLayout="dropdown"
                                            onSelect={(d) => {
                                                setDate(d)
                                                setPopoverOpen(false)
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="time">Time</Label>
                                <Input
                                    type="time"
                                    id="time"
                                    step="1"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                                />
                            </div>
                        </div>

                        {/* Framework & Price */}
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7 gap-5 md:mt-5 mt-1.5">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Framework</Label>
                                <Select
                                    required
                                    value={framework}
                                    onValueChange={(value) => setFramework(value)}
                                >
                                    <SelectTrigger className="w-full" id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="w-full">
                                        <SelectItem value="html">HTML</SelectItem>
                                        <SelectItem value="react">React</SelectItem>
                                        <SelectItem value="nextjs">Nextjs</SelectItem>
                                        <SelectItem value="nodejs">Nodejs</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="price">Price</Label>
                                <Input
                                    type="number"
                                    id="price"
                                    placeholder="3000"
                                    required
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                />
                            </div>
                        </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="price">Notes</Label>
                                <Textarea
                                    placeholder="Optinal notes"
                                />
                            </div>
                    </div>
                </CardContent>

                <CardFooter className="flex gap-2 mt-8 px-0 justify-end">
                    <Button variant="outline"
                    >Save draft</Button>
                    <Button type="submit">Create</Button>
                </CardFooter>
            </div>
        </Card>
    )
}
