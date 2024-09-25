export default function handler(req, res) {
    const { key1, key2 } = req.body; // match frontend

    const validKey1 = "CYPHERCHASE(Ransomware)";
    
    // Check the key combinations
    if ((key1 === validKey1)) {
        return res.status(200).json({ success: true, redirectUrl: 'https://website-2-ctf.vercel.app/' });
    } else {
        return res.status(401).json({ success: false, redirectUrl: '/w22.html' });
    }
}
