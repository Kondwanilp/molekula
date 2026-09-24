import fitz


def extract_text_from_pdf(file_path: str) -> dict:
    document = fitz.open(file_path)

    pages = []
    pages_with_text = 0
    pages_without_text = 0

    for page_number, page in enumerate(document, start=1):
        text = page.get_text().strip()

        if text:
            pages_with_text += 1
        else:
            pages_without_text += 1

        pages.append(
            {
                "page": page_number,
                "text": text,
            }
        )

    result = {
        "total_pages": len(pages),
        "pages_with_text": pages_with_text,
        "pages_without_text": pages_without_text,
        "pages": pages,
    }

    document.close()

    return result