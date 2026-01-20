const PIXBAY_KEY = '54105651-7ddcb9ae4f59a34efa01d2369';
const query = 'dog';
const url = `https://pixabay.com/api/videos/?key=${PIXBAY_KEY}&q=${encodeURIComponent(query)}&per_page=3`;

console.log("Fetching from:", url);

try {
    const res = await fetch(url);
    const json = await res.json();

    console.log("Total Hits:", json.totalHits);
    if (json.hits && json.hits.length > 0) {
        json.hits.forEach((hit, index) => {
            console.log(`\nHit ${index + 1}:`);
            console.log("  type:", hit.type);
            console.log("  videos:", JSON.stringify(hit.videos, null, 2));
        });
    } else {
        console.log("No hits found.");
    }
} catch (error) {
    console.error("Error:", error);
}
