import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    try {

        const { name, email, password, preferences } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword, preferences });

        await newUser.save();

        res.status(201).json({ message: 'User registered' });

    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};

export const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {

            return res.status(401).json({ error: 'Invalid credentials' });

        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
        
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};
