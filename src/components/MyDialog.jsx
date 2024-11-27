import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import LiveBg from "../assets/live-bg.gif"
import LiveBg2 from "../assets/live-bg-2.mp4"


export default function MyCustomDialog({ data, open, setOpen, children, ...props }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="flex flex-col justify-between items-center pt-[3rem] px-2 h-[70vh] w-[70vw] bg-cover bg-center" style={{ backgroundImage: `url(${LiveBg})` }}>
                <DialogHeader>
                    <DialogTitle className="text-white text-4xl text-center">{data?.title}</DialogTitle>
                    <DialogDescription className="text-white text-[1rem] text-center">{data?.description}</DialogDescription>
                </DialogHeader>
                <ScrollArea className="py-2 px-4 w-[70%] flex flex-col gap-2 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border-y border-gray-100">
                <section className="flex flex-col w-full gap-[1rem] text-white">
                    { children }
                </section>
                </ScrollArea>
                <Button onClick={() => { setOpen(false) }}>{data?.enter}</Button>
            </DialogContent>
        </Dialog>
    )
}