let count = 0;
export default function handler(req, res) {
    console.log(`---begin hello api--- ${new Date().toJSON()}`);
    count += 1;
    res.status(200).json({ text: 'Hello' })
    console.log(`---end hello api--- ${new Date().toJSON()}`);
    console.log(`count request ${count}`);
}