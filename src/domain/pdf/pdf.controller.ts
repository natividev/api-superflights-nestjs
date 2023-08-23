import { Controller, Get, Res } from '@nestjs/common';
import Docxtemplater from 'docxtemplater';
import * as fs from 'fs';
import * as path from 'path';
import * as PizZip from 'pizzip';

@Controller('word')
export class PdfController {
  @Get()
  async generateWordDocument(@Res() res) {
    // Carga la plantilla DOCX
    try {
      const templateContent = fs.readFileSync(
        path.join(
          '/home/nati/developer/proyectos-nestjs/api-superflights/src/domain/pdf',
          'simple.docx',
        ),
        'binary',
      );
      const zip = new PizZip(templateContent);
      const doc = new Docxtemplater();
      doc.loadZip(zip);

      // Datos dinámicos para reemplazar los marcadores
      const dynamicData = {
        last_name: 'Doe',
        first_name: 'John',
        phone: '123-456-7890',
        description: 'Un texto descriptivo...',
      };

      // Rellena la plantilla con los datos dinámicos
      doc.setData(dynamicData);
      doc.render();

      // Genera el contenido del documento
      const generatedDoc = doc.getZip().generate({ type: 'nodebuffer' });

      // Envía el documento como respuesta
      res.set({
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename="generated_document.docx"',
      });
      res.send(generatedDoc);
    } catch (error) {
      console.log(error);
    }
  }
}
