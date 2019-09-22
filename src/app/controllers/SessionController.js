class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await user.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        if (!(await user.checkPassword(password))){
            return res.status(401).json({ message: 'Incorrect password' });
        }

        return res.json({
            token: await user.generateToken()
        });
    }
}

module.exports = new SessionController()