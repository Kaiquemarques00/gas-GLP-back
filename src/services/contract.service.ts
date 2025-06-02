import { prisma } from "../config/prisma";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import crypto from "crypto";

export const contractService = {
  create: async (data: { companyId: string }) => {
    const company = await prisma.company.findUnique({
      where: { id: data.companyId },
    });

    if (!company) {
      throw new Error("Empresa não encontrada");
    }

    const contractText = `
Contrato firmado com ${company.razaoSocial} (${company.nomeFantasia}),
CNPJ ${company.cnpj}, localizada em ${company.endereco}, ${company.numero} - ${company.cidade}/${company.estado}.
Responsável: ${company.responsavel}. Telefone: ${company.telefone}. Email: ${company.email}.
`;

    const doc = new PDFDocument({
      size: "A4",
      margin: 50,
    });

    const contractId = crypto.randomUUID();
    const pdfPath = path.resolve(
      __dirname,
      `../../contracts/${contractId}.pdf`
    );

    // Cria a pasta caso não exista
    fs.mkdirSync(path.dirname(pdfPath), { recursive: true });

    const writeStream = fs.createWriteStream(pdfPath);
    doc.pipe(writeStream);

    // Caminho das imagens (coloque as imagens em ./assets/)
    const logoPath = path.resolve(__dirname, "../../assets/logo.png");
    const backgroundPath = path.resolve(__dirname, "../../assets/fundo.png");

    // Imagem de fundo com baixa opacidade para não atrapalhar o texto
    if (fs.existsSync(backgroundPath)) {
      doc.image(backgroundPath, 0, 0, {
        width: doc.page.width,
        height: doc.page.height,
      });
    }

    // Logo no topo (se existir)
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 50, 45, { width: 150 });
    }

    doc.moveDown(5);

    // Título centralizado
    doc
      .font("Helvetica-Bold")
      .fontSize(20)
      .fillColor("#333")
      .text("Contrato de Prestação de Serviços", {
        align: "center",
      });

    doc.moveDown(2);

    // Texto do contrato
    doc.font("Helvetica").fontSize(12).fillColor("black").text(contractText, {
      align: "justify",
      lineGap: 4,
    });

    doc.end();

    await new Promise<void>((resolve, reject) => {
      writeStream.on("finish", () => resolve());
      writeStream.on("error", (err) => reject(err));
    });

    const contract = await prisma.contract.create({
      data: {
        id: contractId,
        companyId: company.id,
        pdfPath,
      },
    });

    return contract;
  },

  getAll: async () => {
    return prisma.contract.findMany({
      include: {
        company: true,
      },
    });
  },

  getByCompanyId: async (id: string) => {
    return prisma.contract.findFirst({
      where: { companyId: id },
    });
  },

  getPdfPath: async (contractId: string): Promise<string> => {
    const contract = await prisma.contract.findUnique({
      where: { id: contractId },
    });

    if (!contract) {
      throw new Error("Contrato não encontrado");
    }

    if (!fs.existsSync(contract.pdfPath)) {
      throw new Error("Arquivo PDF não encontrado");
    }

    return contract.pdfPath;
  },
};
