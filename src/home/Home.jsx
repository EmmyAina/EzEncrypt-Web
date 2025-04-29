import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import Encryption from "../components/Encryption";

export const Home = () => (
	<main className="container mx-auto py-2 px-6">
		<h1 className="text-3xl font-bold text-center">
			File Encryption & Decryption Tool
		</h1>

		<div className="grid md:grid-cols-2 gap-6">
			<Card className="p-3">
				<CardHeader className="flex-col items-start">
					<h2 className="text-xl font-bold">Encrypt Files</h2>
					<p className=" " color="#ffff">
						Upload a file, select an encryption algorithm, and
						provide a password to encrypt your file.
					</p>
				</CardHeader>
				<CardBody>
					<Encryption />
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<h2 className="text-xl font-bold">Decrypt Files</h2>
					<p className="" color="#ffff">
						Upload a file, select an encryption algorithm, and
						provide a password to encrypt your file.
					</p>
				</CardHeader>
				<CardBody>
					{/* <Encryption /> */}
				</CardBody>
			</Card>

			<Button color="primary"> A Button</Button>
			{/* 
				<Decryption /> */}
		</div>
	</main>
);
