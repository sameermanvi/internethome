
import os
import re

# Paths
base_dir = os.path.dirname(os.path.abspath(__file__))
content_file = os.path.join(base_dir, "site/content/clicks.md")
rendered_file = os.path.join(base_dir, "site/rendered/clicks.html")

def parse_photos(md_file):
    photos = []
    with open(md_file, "r") as f:
        content = f.read()
    
    # Simple regex to find urls. 
    # Matches: - url: "Downloads/filename.jpg"
    matches = re.findall(r'- url: "(.*?)"', content)
    return matches

def generate_html(photos):
    html = '<div class="gallery-grid">\n'
    for photo in photos:
        # Construct full URL
        url = f"https://pub-ff68911b5f224ee3bd1fa1651218affa.r2.dev/{photo}"
        html += f'''
    <div class="gallery-item">
        <img src="{url}" alt="" loading="lazy">
    </div>
    '''
    html += '</div>'
    return html

def update_rendered_file(html_content):
    if not os.path.exists(rendered_file):
        print(f"Error: {rendered_file} not found.")
        return

    with open(rendered_file, "r") as f:
        file_content = f.read()

    # Replace content inside <main>
    # We assume the structure is <main> ... <h2>Photography</h2> ... </main>
    # We will keep the <h2>Photography</h2> and replace what follows until </main>
    
    start_marker = "<h2>Photography</h2>"
    end_marker = "</main>"
    
    start_idx = file_content.find(start_marker)
    end_idx = file_content.find(end_marker)
    
    if start_idx != -1 and end_idx != -1:
        # Keep the header, replace the rest
        prefix = file_content[:start_idx + len(start_marker)]
        suffix = file_content[end_idx:]
        
        new_content = prefix + "\n" + html_content + "\n" + suffix
        
        with open(rendered_file, "w") as f:
            f.write(new_content)
        print(f"Successfully updated {rendered_file}")
    else:
        print("Could not find <main> or <h2>Photography</h2> block in output HTML.")

def main():
    print("Reading photos from clicks.md...")
    photos = parse_photos(content_file)
    print(f"Found {len(photos)} photos.")
    
    print("Generating HTML...")
    gallery_html = generate_html(photos)
    
    print("Updating site/rendered/clicks.html...")
    update_rendered_file(gallery_html)
    print("Done! You can now git add, commit, and push.")

if __name__ == "__main__":
    main()
