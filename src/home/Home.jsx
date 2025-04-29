import { Card, CardBody, CardHeader } from "@heroui/react";
import Encryption from "../components/Encryption";
import Decryption from "../components/Decryption";

export const Home = () => (
	<main className="container mx-auto py-2 px-6">
		<h1 className="text-3xl font-bold text-center mb-8">
			File Encryption & Decryption Tool
		</h1>

		<div className="grid md:grid-cols-2 gap-6">
			<Card className="p-3">
				<CardHeader className="flex-col items-start">
					<h2 className="text-xl font-bold">Encrypt File</h2>
					<p className=" " color="#ffff">
						Upload a file, select an encryption algorithm, and
						provide a password to encrypt your file.
					</p>
				</CardHeader>
				<CardBody>
					<Encryption />
				</CardBody>
			</Card>

			<Card className="p-3">
				<CardHeader className="flex-col items-start">
					<h2 className="text-xl font-bold">Decrypt File</h2>
					<p className=" " color="#ffff">
						Upload an encrypted file, select the same algorithm used
						for encryption, and provide the password to decrypt.
					</p>
				</CardHeader>
				<CardBody>
					<Decryption />
				</CardBody>
			</Card>
		</div>
	</main>
);
