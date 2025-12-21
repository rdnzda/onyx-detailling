import Image from "next/image";

export default function Background() {
    return (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Image
                src="https://images.unsplash.com/photo-1696421472274-b02808f67a57?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Background Texture"
                fill
                className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-black via-onyx-black/80 to-transparent" />
        </div>
    );
}