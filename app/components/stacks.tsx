import Image from "next/image";


export function Stacks(){
    return(
        
            
        <div className="flex gap-5 my-4">
            <Image src="/next.svg" width={50} height={50} alt="NextJS"  className="hover:scale-110 transition-all"/>
            <Image src="/typescript.svg" width={50} height={50} alt="Typescript"  className="hover:scale-110 transition-all"/>
            <Image src="/tailwind.svg" width={50} height={50} alt="Tailwind"  className="hover:scale-110 transition-all"/>
            <Image src="/react.svg" width={50} height={50} alt="React"  className="hover:scale-110 transition-all"/>
            <Image src="/postgres.svg" width={50} height={50} alt="Postgres"  className="hover:scale-110 transition-all"/>
            <Image src="/nodejs.svg" width={50} height={50} alt="NodeJS"  className="hover:scale-110 transition-all"/>
        </div>
        
        
    )
}