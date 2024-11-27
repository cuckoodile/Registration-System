import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import  ArrowUp  from "../assets/upArrow.svg"
import { useState } from "react"


const BubbleProvider = ({className, ...props}) => (
    <div className="bg-red-600 fixed bottom-0 right-0 p-1 flex flex-col"></div>
)
BubbleProvider.displayName - "BubbleProvider"

function BubbleTrigger() {
    const [open, setOpen] = useState(false)

    return (
        <div className="">
            <Avatar className="bg-primary cursor-pointer flex justify-center items-center">
                <AvatarImage src={ArrowUp} alt="img.." />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}
BubbleTrigger.displayName = "BubbleTrigger"

function BubbleItem() {
    return (
        <div className="fixed bottom-0 right-0 rounded-full h-12 w-12">
            <Avatar className="bg-primary cursor-pointer flex justify-center items-center">
                <AvatarImage src={ArrowUp} alt="img.." />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}
BubbleItem.displayName = "BubbleItem"

export {
    BubbleProvider,
    BubbleTrigger,
    BubbleItem,
}