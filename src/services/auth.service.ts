import { prisma } from '../config/prisma';
import { UserRole } from '@prisma/client'; // 👈 Importa o enum
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const authService = {
  register: async ({
  name,
  password,
  role,
  company,
  email
}: {
  name: string;
  password: string;
  role: keyof typeof UserRole;
  email?: string;
  company?: {
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
    segmento: string;
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    endereco: string;
    numero: string;
    complemento?: string;
    responsavel: string;
    telefone: string;
    email: string; // email da empresa
  };
}) => {
  const hashed = await bcrypt.hash(password, 10);

  if (role === 'CLIENTE') {
    if (!company) throw new Error('Dados da empresa são obrigatórios para CLIENTE');

    const existing = await prisma.company.findUnique({ where: { cnpj: company.cnpj } });
    if (existing) throw new Error('Empresa já registrada com esse CNPJ');

    const createdCompany = await prisma.company.create({ data: { ...company } });

    const user = await prisma.user.create({
      data: {
        name,
        password: hashed,
        role: UserRole.CLIENTE,
        companyId: createdCompany.id
      }
    });

    return user;
  }

  // Para ADMIN/FUNC
  if (!email) throw new Error('E-mail é obrigatório para administradores e funcionários');

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
      role: UserRole[role]
    }
  });

  return user;
},


  login: async ({ email, password }: { email: string; password: string }) => {
  // Primeiro tenta encontrar um ADMIN ou FUNC
  let user = await prisma.user.findUnique({ where: { email } });

  // Se não achou, tenta achar a empresa
  if (!user) {
    const company = await prisma.company.findUnique({ where: { email } });
    if (!company) throw new Error('Credenciais inválidas');

    // Agora procura o usuário CLIENTE vinculado a essa empresa
    user = await prisma.user.findFirst({
      where: {
        role: UserRole.CLIENTE,
        companyId: company.id
      }
    });

    if (!user) throw new Error('Usuário cliente não encontrado para esta empresa');
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Senha inválida');

  const token = jwt.sign({ userId: user.id, role: user.role, companyId: user?.companyId }, process.env.JWT_SECRET!, {
    expiresIn: '1d'
  });

  return { token };
},

};
