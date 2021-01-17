import sys
from pdfminer.high_level import extract_text
sys.path.append("/usr/home/username/pdfminer")


def extract_text_from_pdf(pdf_path):
    return extract_text(pdf_path)


if __name__ == '__main__':
    print(extract_text_from_pdf('/home/goodmanmcgee/JobSearchAutomator/parser/Resume_2021.pdf'))  # noqa: T001

# example_02.py
