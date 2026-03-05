import { Neighborhood } from "@/types";

export const neighborhoods: Neighborhood[] = [
  {
    slug: "edina",
    name: "Edina",
    tagline: "Upscale Suburban Living with Top-Rated Schools",
    description:
      "Edina is one of the Twin Cities' most sought-after suburbs, renowned for its exceptional public schools, beautiful parks, and upscale shopping destinations. Tree-lined streets showcase a diverse mix of stately mid-century homes, elegant new construction, and charming post-war ramblers. The 50th & France district serves as the neighborhood's walkable village center, offering locally owned boutiques, restaurants, and services. Centennial Lakes Park, Braemar Golf Course, and the Edina Aquatic Center provide year-round recreation, while Southdale Center anchors the retail landscape as America's first indoor shopping mall.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$725,000",
      avgSqft: "2,400",
      walkScore: 48,
      schools: "Edina Public Schools (top-rated statewide)",
    },
    highlights: [
      "Consistently ranked among Minnesota's best public schools",
      "50th & France walkable shopping and dining district",
      "Centennial Lakes Park with walking paths and ice skating",
      "Braemar golf, arena, and recreation complex",
      "Mix of classic and new-construction homes",
      "Easy access to highways 62, 100, and 169",
    ],
    lifestyle:
      "Life in Edina revolves around community, education, and outdoor recreation. Weekday mornings start with a jog around Centennial Lakes or a coffee at one of the 50th & France cafes. Children thrive in schools that consistently rank among the state's best, and after-school activities range from Braemar Arena hockey to community art classes. Weekend farmers' markets in the summer, neighborhood block parties, and a deep tradition of civic engagement make Edina feel like a true hometown even as it offers all the amenities of a premier suburb.",
  },
  {
    slug: "north-loop-minneapolis",
    name: "North Loop Minneapolis",
    tagline: "Trendy Urban Living in the Warehouse District",
    description:
      "The North Loop is Minneapolis's hottest urban neighborhood, a former warehouse district transformed into a thriving hub of luxury lofts, acclaimed restaurants, and creative businesses. Exposed brick buildings house everything from craft breweries and artisan coffee shops to tech startups and design studios. The neighborhood's proximity to the Mississippi River, Target Field, and the downtown core makes it irresistible for young professionals and urban enthusiasts who want walkable convenience without sacrificing character. The North Loop Farmers' Market and a vibrant gallery scene keep the cultural calendar full.",
    image:
      "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$475,000",
      avgSqft: "1,400",
      walkScore: 94,
      schools: "Minneapolis Public Schools",
    },
    highlights: [
      "Converted warehouse lofts and modern condos",
      "Award-winning dining and craft brewery scene",
      "Walking distance to Target Field and downtown",
      "Mississippi River trails and parks",
      "Thriving arts, gallery, and creative community",
      "North Loop Farmers' Market on Saturdays",
    ],
    lifestyle:
      "Life in the North Loop revolves around convenience and culture. Start your morning with a cortado from Spyhouse Coffee, walk to work at one of the neighborhood's creative offices, and end the evening with craft cocktails and live music just steps from your front door. Saturday mornings at the North Loop Farmers' Market, afternoon bike rides along the Mississippi River trails, and spontaneous gallery openings keep the social calendar full. This is Twin Cities living at its most cosmopolitan, where the energy of the city meets the comfort of a true neighborhood.",
  },
  {
    slug: "uptown-minneapolis",
    name: "Uptown Minneapolis",
    tagline: "Vibrant, Walkable Living on the Chain of Lakes",
    description:
      "Uptown Minneapolis is a vibrant, walkable neighborhood defined by its proximity to the famous Chain of Lakes, eclectic dining scene, and lively cultural atmosphere. Centered around the Hennepin and Lake Street corridors, Uptown offers a mix of charming historic homes, renovated apartments, and modern condos. Lake Calhoun (Bde Maka Ska), Lake of the Isles, and Lake Harriet provide stunning backdrops for jogging, biking, paddleboarding, and cross-country skiing. Independent boutiques, diverse restaurants, and the historic Uptown Theatre give the neighborhood an unmistakable creative energy.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$425,000",
      avgSqft: "1,600",
      walkScore: 88,
      schools: "Minneapolis Public Schools, Southwest High School",
    },
    highlights: [
      "Steps from the Chain of Lakes and miles of trails",
      "Highly walkable with diverse dining and nightlife",
      "Mix of historic homes and modern condominiums",
      "Year-round outdoor recreation: biking, skiing, paddling",
      "Independent boutiques and the Uptown Theatre",
      "Easy access to Midtown Greenway bike trail",
    ],
    lifestyle:
      "Living in Uptown means the outdoors are always at your doorstep. Morning runs circle the Chain of Lakes, afternoon paddleboard sessions give way to patio dinners at one of dozens of restaurants along Hennepin Avenue. The Midtown Greenway connects cyclists to destinations across the city, and winter transforms the lakes into cross-country skiing and ice fishing destinations. The neighborhood strikes a rare balance between active urban living and natural beauty, attracting a diverse mix of young professionals, creatives, and anyone who values a walkable, lake-oriented lifestyle.",
  },
  {
    slug: "linden-hills",
    name: "Linden Hills",
    tagline: "Charming Village Feel on Lake Harriet",
    description:
      "Linden Hills is a beloved Minneapolis neighborhood with the feel of a small lakeside village. Centered around the intersection of 43rd Street and Upton Avenue, the Linden Hills commercial district features a curated collection of locally owned shops, cafes, and restaurants that foster a tight-knit sense of community. Steps from Lake Harriet and its iconic bandshell, the neighborhood offers tree-lined streets of beautifully maintained Craftsman bungalows, Tudor revivals, and tasteful new construction. Families are drawn to the excellent schools, safe streets, and the year-round programming at the Lake Harriet bandshell.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$575,000",
      avgSqft: "2,000",
      walkScore: 72,
      schools: "Lake Harriet Schools, Southwest High School",
    },
    highlights: [
      "Charming village shopping district on 43rd & Upton",
      "Steps from Lake Harriet and its famous bandshell",
      "Beautiful Craftsman and Tudor-style homes",
      "Strong community events and neighborhood association",
      "Excellent public schools within walking distance",
      "Access to the Minneapolis Grand Rounds trail system",
    ],
    lifestyle:
      "Linden Hills is where community meets lakeside charm. Saturday mornings begin with pastries from Bread & Pickle or browsing the neighborhood's one-of-a-kind shops. Afternoons drift toward Lake Harriet for a walk around the lake, a free bandshell concert, or a ride on the historic Como-Harriet Streetcar. Children ride bikes to Lake Harriet Elementary, and neighbors gather for block parties, art fairs, and holiday events that reinforce the village atmosphere. It is the kind of place where baristas know your name and you run into friends at every corner.",
  },
  {
    slug: "highland-park-st-paul",
    name: "Highland Park, St. Paul",
    tagline: "Established, Family-Friendly Living Along the River",
    description:
      "Highland Park is one of St. Paul's most desirable and established residential neighborhoods, offering a blend of classic housing stock, excellent schools, and a walkable village commercial district along Ford Parkway and Cleveland Avenue. The neighborhood sits along the bluffs of the Mississippi River, providing access to miles of scenic trails and parks including Crosby Farm Regional Park and Hidden Falls. The Ford site redevelopment is bringing new housing, retail, and green space that will further enhance this already thriving community. Families, professionals, and retirees alike are drawn to Highland Park's stability, safety, and welcoming atmosphere.",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$475,000",
      avgSqft: "1,800",
      walkScore: 68,
      schools: "St. Paul Public Schools, Highland Park Senior High",
    },
    highlights: [
      "Walkable Highland Village shopping and dining district",
      "Mississippi River bluffs with miles of trails",
      "Crosby Farm and Hidden Falls regional parks",
      "Ford site redevelopment bringing new amenities",
      "Classic housing stock from the 1920s-1950s",
      "Strong neighborhood identity and community events",
    ],
    lifestyle:
      "Highland Park offers a lifestyle that blends urban convenience with natural beauty. Weekend mornings start with brunch along Ford Parkway or a hike through the river bluffs at Crosby Farm. The Highland Fest summer celebration, farmers' markets, and community events bring neighbors together throughout the year. Children walk or bike to highly regarded neighborhood schools, and the village commercial district provides everyday shopping without needing to leave the neighborhood. For those who want the character of an established city neighborhood with access to nature and a genuine sense of community, Highland Park is hard to beat.",
  },
  {
    slug: "wayzata",
    name: "Wayzata",
    tagline: "Lakefront Luxury on Lake Minnetonka",
    description:
      "Wayzata is the crown jewel of the Lake Minnetonka communities, a picturesque lakefront town that combines small-town charm with world-class amenities. Its historic downtown along Lake Street features upscale boutiques, acclaimed restaurants, and art galleries, all overlooking the sparkling waters of Lake Minnetonka. Residential options range from grand lakefront estates and wooded executive homes to luxury condos and charming in-town cottages. The Wayzata public schools are among the highest-rated in the state, and the community's dedication to preserving its lakefront parks, trails, and natural beauty makes it one of the most coveted addresses in the Twin Cities metro.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$1,250,000",
      avgSqft: "3,800",
      walkScore: 42,
      schools: "Wayzata Public Schools (top-rated statewide)",
    },
    highlights: [
      "Stunning Lake Minnetonka waterfront and lake access",
      "Charming historic downtown with upscale shopping",
      "Top-rated Wayzata Public Schools",
      "Grand lakefront estates and luxury condos",
      "Year-round recreation: boating, skiing, ice fishing",
      "Vibrant dining and arts scene along Lake Street",
    ],
    lifestyle:
      "Wayzata living is synonymous with lakefront elegance. Summer days begin with a morning sail or paddleboard on Lake Minnetonka, followed by lunch at one of the downtown restaurants with lake views. Children attend some of the state's finest schools, and the sense of community is reinforced through the annual James J. Hill Days celebration, art walks, and a robust calendar of seasonal events. Winter brings cross-country skiing, ice fishing, and cozy evenings by the fire. While the pace is more relaxed than urban Minneapolis, Wayzata's location on Highway 12 and I-394 means downtown Minneapolis is never more than twenty minutes away.",
  },
];
