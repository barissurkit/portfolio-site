# Accessible CV sources

These semantic HTML files are the source for the downloadable English and Turkish CV PDFs.

Generate PDF/UA-1 files with WeasyPrint 68.1 from the repository root:

```sh
weasyprint --pdf-variant pdf/ua-1 cv-source/cv-en.html Baris_Surkit_CV_EN.pdf
weasyprint --pdf-variant pdf/ua-1 cv-source/cv-tr.html Baris_Surkit_CV_TR.pdf
```

After every content update, confirm that each PDF is one A4 page, reports `Tagged: yes`, and exposes a logical heading/list/link structure:

```sh
pdfinfo Baris_Surkit_CV_EN.pdf
pdfinfo -struct-text Baris_Surkit_CV_EN.pdf
pdfinfo Baris_Surkit_CV_TR.pdf
pdfinfo -struct-text Baris_Surkit_CV_TR.pdf
```

Formal PDF/UA conformance still requires validation with veraPDF and a manual screen-reader reading-order check.
