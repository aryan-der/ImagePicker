const query = 'coding';
const url = `https://www.reddit.com/r/memes/search.json?q=${query}&restrict_sr=1&sort=top&limit=5`;

console.log("Fetching from:", url);

try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    const json = await res.json();

    if (json.data && json.data.children) {
        json.data.children.forEach((child, index) => {
            const data = child.data;
            // Filter for images
            if (data.post_hint === 'image') {
                console.log(`\nHit ${index + 1}:`);
                console.log("  Title:", data.title);
                console.log("  Image:", data.url);
                console.log("  Thumbnail:", data.thumbnail);
            }
        });
    } else {
        console.log("No hits found or structure changed.");
    }
} catch (error) {
    console.error("Error:", error);
}
