import { Input } from "@heroui/input";
import { Button, Select, SelectItem } from "@heroui/react";
import { algos } from "../helpers/data";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";

function Decryption() {
	const [selectedAlgo, setSelectedAlgo] = useState(new Set([]));
	const [selectedFile, setSelectedFile] = useState(null);
	const [password, setPassword] = useState("");

	const [isVisible, setisVisible] = useState(false);

	return (
		<div className="flex space-y-6 flex-col">
			<div>
				<Input
					type="file"
					label="Select a file"
					labelPlacement="outside"
					isClearable={true}
					variant="bordered"
					// value={selectedFile}
					onChange={setSelectedFile}
				/>
			</div>

			<div>
				<Select
					label="Select a decryption algorithm"
					labelPlacement="outside"
					placceholder="Select a decryption algorithm"
					value={selectedAlgo}
					onSelectionChange={setSelectedAlgo}
					defaultSelectedKeys={["aes"]}
					variant="bordered"
				>
					{algos.map((algorithm) => (
						<SelectItem
							key={algorithm.value}
							value={algorithm.value}
						>
							{algorithm.label}
						</SelectItem>
					))}
				</Select>
			</div>

			<div>
				<Input
					type={isVisible ? "text" : "password"}
					label="Enter a password"
					labelPlacement="outside"
					// isClearable={true}
					placeholder="Enter a password"
					variant="bordered"
					value={password}
					onValueChange={setPassword}
					endContent={
						<FaRegEyeSlash
							onClick={() => {
								setisVisible(!isVisible);
							}}
						/>
					}
				/>
			</div>

			<div>
				<Button
					className="w-full bg-black"
					color="primary"
					isDisabled={!selectedFile || !password}
				>
					Encrypt File
				</Button>
			</div>
		</div>
	);
}

export default Decryption;
