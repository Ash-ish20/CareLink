import bcrypt from "bcryptjs";

const hashPassword = async (password) => await bcrypt.hash(password, 10);
const comparePassword = async (password, hash) => await bcrypt.compare(password, hash);

export { hashPassword, comparePassword };
