import os
from PIL import Image

# Input and output directory (set to current folder by default)
input_dir = "."
output_dir = "./webp_converted"

# Create output folder if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Supported image formats
valid_extensions = (".png", ".jpg", ".jpeg", ".bmp", ".tiff", ".gif")

# Loop through files in directory
for filename in os.listdir(input_dir):
    if filename.lower().endswith(valid_extensions):
        file_path = os.path.join(input_dir, filename)
        try:
            # Open image
            img = Image.open(file_path).convert("RGB")  # convert to RGB to avoid issues with some formats
            # Save as webp
            new_filename = os.path.splitext(filename)[0] + ".webp"
            img.save(os.path.join(output_dir, new_filename), "WEBP")
            print(f"Converted: {filename} → {new_filename}")
        except Exception as e:
            print(f"❌ Could not convert {filename}: {e}")
