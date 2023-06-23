# Python3 code to rename all files in a directory
import os

def main():
    folder = "rename"
    for count, filename in enumerate(os.listdir(folder)):
        sectionTitle = str(filename)[22:] # gets the section title, change if required

        dst = f"M2-Lec{chr(65+count)} {sectionTitle}.pdf"  # chr() converts to int to ASCII
        src = f"{folder}/{filename}"  # foldername/filename, if .py file is outside folder
        dst = f"{folder}/{dst}"

        # rename() function will rename all the files
        os.rename(src, dst)
 
# Driver Code
if __name__ == '__main__':
    # Calling main() function
    main()