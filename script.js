const fs = require('fs');

const mustTry = fs.readFileSync('NYC Must Try.csv', 'utf8').split('\n').map(line => line.split(',')[0]);
const ntt = fs.readFileSync('New York NTT.csv', 'utf8').split('\n').map(line => line.split(',')[0]);

const toRemove = ntt.filter(name => mustTry.includes(name));
console.log(JSON.stringify(toRemove));

// Uncomment, Copy, and Run this in chrome console with the list open

(async () => {
  const namesToRemove = [
    "Rollin Bagels (Food Truck)", "QQ Cafe", "Sartiano's", "Four & Twenty Blackbirds", 
    "Golden Taquitos 1", "Yume Ga Arukara", "Macario", "Verse", "Cauldron Chicken", 
    "Saint Street Cakes", "Uncle Ray's Chicken Rice", "Nana Baking", "Rice & Miso", 
    "Momo Sushi Shack", "Middle Eastern Halal Cart", "BASHIR HALAL FOOD", "Old German Bakery", 
    "The Django", "Regina Bakery", "Loved Ones Coffee", "Golden Palace", 
    "Ambassadors Clubhouse New York", "L.A. Burdick Handmade Chocolates", "Union Hall", 
    "The Bell House", "The Corner Store", "Or'esh", "Steakfreak", "Traveler", "Soso's", 
    "ARIARI", "The Residence of Mr. Moto", "Omakase Shihou (Shiro) - Midtown", "Bake Culture", 
    "Fay Da Bakery", "Russ & Daughters", "Ramen DANBO Park Slope", "Bobo", "Pastis", 
    "Amdo Momo", "Nyonya", "农耕记 · 湖南菜 Nong Geng Ji", "Umeko", "Roman's", "Strange Delight", 
    "Il Leone", "Vato", "Ambrosia Garden", "Lucky Charlie", "Meju", "L'Albero Dei Gelati", 
    "The Pho 2", "Space Karaoke Bar & Lounge | Koreatown NYC", "97 Happy KTV", 
    "Cozy Rice (小稻屋肠粉店）", "Ops", "Mari - Korean Handroll", "Lenny's Clam Bar", 
    "Daphne's", "Park Side Restaurant", "Café Carmellini", "Bonnie's", "Lori Jayne", "Shuka", 
    "Curley's Bagels", "Toriya", "Sal Tang's", "Bake Shop", "Bagel Hole", "King’s Kitchen", 
    "Nuyores", "Papa San", "Tim Ho Wan East Village", "Lisbonata", "Ichiran", "Noodle Pudding", 
    "Moonrise Bagels", "Hungry Thirsty", "Mari.ne Handroll", "LÀ LÁ Bakeshop NYC", "Le Chêne", 
    "Adda", "Taiwan Pork Chop House", "Musaafer", "Fabrique Artisan Bakery", "Taishoken NYC", 
    "Mommy Pai’s", "Sappe", "I Cavallini", "Spicy Village", "San Carlo Osteria Piemonte", 
    "dell'anima", "Song' E Napule", "Milu", "Pig and Khao - UWS", "Lou Yau Kee", 
    "Kai Feng Fu Dumpling House", "King’s Kitchen", "Dolly's Coffee Shop", 
    "Brooklyn Roots Italian", "1915 Lanzhou Hand Pulled Noodles", "Santi", "Seed + Mill", 
    "Surreal Creamery", "Tasti D-Lite", "Salt Hank’s", "Darjeeling Kitchen & Café", 
    "Txikito", "Paloma the Bakery", "Leon's", "Sushi Ouji", "Chez Fifi", "Great NY Noodletown", 
    "Borgo", "Abuqir", "OMG Shawarma", "Caleta 111", "Taku Parlor", "Max & Mina's Ice Cream", 
    "Milkflower", "Kanyakumari NYC", "Parksanbal", "Cervo's", "Smithereens", "Ha’s Snack Bar", 
    "Mia's Brooklyn Bakery", "Cafe Xochimilco", "Bolivian Llama Party", "Susuru Ramen", 
    "Daesung korean Noodle", "Mapo BBQ | Korean BBQ in Flushing, 맛집", "Mariscos El Submarino", 
    "Tsubame | Kaiseki Inspired Omakase", "Red Gate Bakery", "Kora", "AYAM", "Paisley", 
    "Terina", "Karakatta", "Golden Manna Bakery", "Miss Ada", "Shaxian Delicacies", 
    "Il Mulino - Downtown (West 3rd)", "Casa Lever", "Osteria Delbianco", "Frenchette", 
    "Au Cheval", "Bánh", "Sauced", "Bamboo Garden", "Elbow Bread", "Tong", "Hibino", 
    "Çka Ka Qëllue", "Catania Bakery", "Yemenat", "La Dong", "Cemitas El Tigre", "Untable", 
    "Lord’s", "Mahmoud's Corner Halal Food Cart", "Secchu Yokota 折衷よこ田", "Tsukimi", 
    "The Portrait Bar", "Hani’s bakery + café", "OKDONGSIK New York", "Lakruwana Restaurant", 
    "Sigiri", "Kaew Jao Jorm", "sendo", "The Dead Rabbit", "Tortas Neza", "Ovenly Greenpoint", 
    "Chrissy’s Pizza", "Supermoon Bakehouse", "North Dumpling", "Sala Thai", "Thai Villa", 
    "Shanghai 21", "Ramen By Ra", "SALSWEE", "Burmese Bites", "Katsu-Hama", "Bungalow", 
    "Läderach", "A&A Bake Doubles and Roti", "Kebab aur Sharab", 
    "OKONOMI / YUJI Ramen Manhattan Pop-up", "OKONOMI // YUJI Ramen", "Afuri ramen + dumpling", 
    "KRU Brooklyn", "Chalong NYC", "DOMODOMO New York", "Bamonte's", "Breeze", 
    "Ample Hills Creamery", "Yumpling", "Cafe Spaghetti", "Phayul", "Llama San", "Jora", 
    "St. Anselm", "Birds of a Feather", "Crave Fishbar", "Mermaid Oyster Bar", "Sushi W", 
    "Le French Diner", "Taste Good", "Eddie's Sweet Shop", "Utopia Bagels", "Malai", "LORE", 
    "Kopitiam", "Steve's Authentic Key Lime Pie", "Best Pizza", "Oxomoco", "Patsy's Pizzeria", 
    "Monkey Bar", "Eyval", "Hindu Temple Canteen", "Kisa", "Rubirosa", "Misi", 
    "Frankies 457 Spuntino", "Aromi", "Astoria Seafood", "Crown Shy", "Jongro BBQ", 
    "Taverna Kyclades", "Lysée", "Shiki Omakase", "Carbone New York", "John's of Bleecker Street", 
    "Sushi by M-East 5th st", "Dame", "Lowerline", "Sushi Ishikawa", "Patisserie Tomoko", 
    "Luigi's Pizza", "Place des Fêtes", "Tanoshi Sushi Sake Bar", "Hatsuhana", 
    "4 Charles Prime Rib", "Aux Merveilleux de Fred", "Hawksmoor NYC", "Katz's Delicatessen", 
    "Sushi On Me", "Raku", "The Four Horsemen", "Trinciti Roti Shop & Restaurant", 
    "Lechonera La Piraña", "Tatiana by Kwame Onwuachi", "Ci Siamo", "Jeju Noodle Bar", 
    "Jungsik", "Lucali", "Nowon East Village", "Minetta Tavern", "NR", "House of Joy", 
    "GupShup", "Junoon", "Semma", "Dhamaka", "Adda Indian Canteen", "Hamburger America", "Gazab"
  ]; // PASTE YOUR ARRAY HERE

  const scrollContainer = document.querySelector('[role="main"] div[tabindex="-1"]'); // The scrollable sidebar

  console.log("🚀 Starting scroll to load all items...");
  
  // 1. Scroll to the bottom to ensure all elements are in the DOM
  let lastHeight = 0;
  while (true) {
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
    await new Promise(r => setTimeout(r, 2000)); // Wait for lazy load
    if (scrollContainer.scrollHeight === lastHeight) break;
    lastHeight = scrollContainer.scrollHeight;
  }

  console.log("✅ All items loaded. Starting removal...");

  // 2. Find and click the 'Remove' buttons
  for (const name of namesToRemove) {
    // Find the row containing the restaurant name
    const rows = Array.from(document.querySelectorAll('div[aria-label]'));
    const targetRow = rows.find(row => row.innerText.includes(name));

    if (targetRow) {
      // Google usually puts the 'X' or 'Remove' button inside this row
      // The selector 'button[aria-label*="Remove"]' is common for the 'X' icon
      const removeBtn = targetRow.querySelector('button[aria-label*="Remove"]') || 
                        targetRow.querySelector('button[aria-label*="Unsave"]');

      if (removeBtn) {
        removeBtn.click();
        console.log(`- Removed: ${name}`);
        await new Promise(r => setTimeout(r, 500)); // Small throttle to prevent UI lag
      }
    } else {
      console.warn(`❓ Could not find: ${name}`);
    }
  }

  console.log("🎉 Cleanup complete.");
})();