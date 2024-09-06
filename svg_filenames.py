import os

def rename_svg_files(directory):
    # Loop through all files in the given directory
    for filename in os.listdir(directory):
        # Check if the file is an SVG
        if filename.endswith(".svg"):
            # Create the new filename: lowercase and replace spaces with hyphens
            new_filename = filename.lower().replace(" ", "-")
            
            # Get the full paths for the old and new filenames
            old_file = os.path.join(directory, filename)
            new_file = os.path.join(directory, new_filename)
            
            # Rename the file
            os.rename(old_file, new_file)
            print(f"Renamed: {filename} -> {new_filename}")

# Provide the path to the directory containing your SVG files
directory_path = './icons/filled'

# Call the function to rename SVG files
rename_svg_files(directory_path)