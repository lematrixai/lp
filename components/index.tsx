import Image from "next/image";

export default function Index() {
  return (
    <div>
        <Image src="/logo/senjaro-pay-dark.png" alt="logo" width={100} height={100} />
    </div>
  );
}

export function Mpe() {
    return (
        <div>
            <Image src="/logo/mpe.png" alt="logo" width={100} height={100} />
        </div>
    );
}