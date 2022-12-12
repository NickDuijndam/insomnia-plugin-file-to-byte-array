const fs = require('fs');

module.exports.templateTags = [
    {
        name: 'fileToBytes',
        displayName: 'fileToBytes',
        description: 'Convert a file to a byte array.',
        args: [
            {
                displayName: 'File',
                description: 'File to be converted into a byte array.',
                type: 'file',
                defaultValue: false
            }
        ],
        run(context, filePath) {
			const result = [];
			const fileData = fs.readFileSync(filePath).toString('hex');
			
			for (let i = 0; i < fileData.length; i += 2) {
			  result.push(`0x${fileData[i]}${fileData[i + 1]}`);
			}
			
            return JSON.stringify(result);
        }
    }
];