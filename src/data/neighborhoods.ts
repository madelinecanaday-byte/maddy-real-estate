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
      "https://images.unsplash.com/photo-1616519649397-d3b27057ec3b?w=800&h=600&fit=crop",
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
      "https://images.unsplash.com/photo-1564234458771-ed5235be9384?w=800&h=600&fit=crop",
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
      "https://images.unsplash.com/photo-1620101571396-7f16ed67988d?w=800&h=600&fit=crop",
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
      "https://images.unsplash.com/photo-1522815802095-90abbf34b57a?w=800&h=600&fit=crop",
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
  {
    slug: "st-louis-park",
    name: "St. Louis Park",
    tagline: "First-Ring Suburb with Big Neighborhood Energy",
    description:
      "St. Louis Park is one of the Twin Cities' most popular first-ring suburbs, offering an unbeatable combination of location, affordability, and community character. Bordering Minneapolis to the west, SLP — as locals call it — provides easy access to downtown, Uptown, and the western suburbs while maintaining its own distinct identity. The housing stock ranges from charming 1950s ramblers and Cape Cods to sleek new construction condos and townhomes. The Shops at West End, Excelsior & Grand, and The West End dining district offer walkable retail and entertainment. The community's investment in parks, trails, and the future METRO Green Line extension make it a smart choice for buyers at every stage of life.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$375,000",
      avgSqft: "1,500",
      walkScore: 56,
      schools: "St. Louis Park Public Schools",
    },
    highlights: [
      "Prime first-ring suburb location bordering Minneapolis",
      "The Shops at West End and Excelsior & Grand districts",
      "Excellent park system with 55+ parks",
      "Future METRO Green Line LRT extension stop",
      "Diverse, welcoming community culture",
      "Mix of affordable mid-century homes and new construction",
    ],
    lifestyle:
      "St. Louis Park blends suburban comfort with urban accessibility. You can bike the Cedar Lake Trail into downtown Minneapolis in 15 minutes or stroll to dinner at Excelsior & Grand without touching a highway. The parks are exceptional — with over 55 to choose from, there's always a nearby green space for evening walks, playground visits, or weekend picnics. The community prides itself on inclusivity and has a thriving local business scene. For buyers who want the best of both worlds — neighborhood charm with city convenience — SLP consistently delivers.",
  },
  {
    slug: "eden-prairie",
    name: "Eden Prairie",
    tagline: "Award-Winning Suburb with Nature at Every Turn",
    description:
      "Eden Prairie is a thriving southwest suburb consistently ranked among the best places to live in Minnesota. Known for its top-tier schools, extensive trail system, and family-friendly atmosphere, Eden Prairie attracts families and professionals who want space, nature, and modern amenities. The city boasts over 170 miles of trails, 2,500 acres of parkland, and stunning views of the Minnesota River valley. The Eden Prairie Center, major employers along the I-494 corridor, and a growing dining scene round out the suburban experience. Whether you prefer a wooded lot backing to conservation land or a new townhome near shopping, Eden Prairie has something for every lifestyle.",
    image:
      "https://images.unsplash.com/photo-1592334755740-0a963662ac2c?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$525,000",
      avgSqft: "2,200",
      walkScore: 34,
      schools: "Eden Prairie Schools (top-rated)",
    },
    highlights: [
      "170+ miles of trails and 2,500 acres of parkland",
      "Top-rated Eden Prairie public schools",
      "Minnesota River valley views and nature preserves",
      "Eden Prairie Center shopping and dining",
      "Strong job market along I-494 corridor",
      "Family-friendly with excellent recreation programs",
    ],
    lifestyle:
      "Eden Prairie living means nature is never more than a few minutes away. Morning jogs wind through wooded trails, kids bike to school on dedicated paths, and weekends are spent exploring the Minnesota River bottoms or canoeing at Staring Lake. The community recreation center offers everything from swimming to hockey, and the school district consistently ranks among the state's best. Despite its suburban setting, Eden Prairie has developed a growing food and entertainment scene, and the southwest LRT line will soon connect residents directly to downtown Minneapolis.",
  },
  {
    slug: "minnetonka",
    name: "Minnetonka",
    tagline: "Lakeside Living with Room to Breathe",
    description:
      "Minnetonka is a western suburb that perfectly balances natural beauty with metropolitan convenience. Home to portions of Lake Minnetonka and dozens of smaller lakes and parks, the city offers a lifestyle centered around water, woods, and wide-open green spaces. Housing ranges from lakefront estates and executive homes on large lots to updated split-levels and newer townhome communities. The community is served by the highly rated Minnetonka and Hopkins school districts, and major employers including Cargill and UnitedHealth Group call Minnetonka home. Ridgedale Center provides premier shopping, and I-394 puts downtown Minneapolis just 20 minutes away.",
    image:
      "https://images.unsplash.com/photo-1662731326386-cd7da3b65f0c?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$550,000",
      avgSqft: "2,300",
      walkScore: 30,
      schools: "Minnetonka Public Schools (top-rated statewide)",
    },
    highlights: [
      "Lake Minnetonka access and dozens of smaller lakes",
      "Top-rated Minnetonka public school district",
      "Ridgedale Center shopping and dining",
      "Wooded lots and spacious executive homes",
      "Major employers: Cargill, UnitedHealth Group",
      "Quick access to downtown Minneapolis via I-394",
    ],
    lifestyle:
      "Life in Minnetonka revolves around the outdoors. Summer weekends are spent on the lake — boating, fishing, or hosting dock parties. Fall brings spectacular color along the wooded trails, and winter transforms the landscape into a cross-country skiing and snowshoeing paradise. Families benefit from one of the highest-rated school districts in the state, and the mix of established neighborhoods and newer developments means there's something for every budget. Minnetonka offers the space and tranquility of lake country living without sacrificing access to the city.",
  },
  {
    slug: "plymouth",
    name: "Plymouth",
    tagline: "Modern Suburb with Parks, Trails & Top Schools",
    description:
      "Plymouth is a large, well-planned northwest suburb known for its beautiful park system, excellent schools, and diverse housing options. With over 170 parks and preserves, including the scenic French Regional Park and Medicine Lake, Plymouth offers abundant outdoor recreation year-round. The housing market spans everything from starter condos and family-friendly townhomes to expansive custom-built homes on wooded lots. Wayzata and Robbinsdale school districts serve the community with consistently strong academics. Plymouth's central location, with easy access to I-494, Highway 55, and I-394, makes commuting to downtown Minneapolis, the western suburbs, or the northern metro seamless.",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$475,000",
      avgSqft: "2,100",
      walkScore: 28,
      schools: "Wayzata & Robbinsdale school districts",
    },
    highlights: [
      "170+ parks including French Regional Park",
      "Medicine Lake recreation and swimming beach",
      "Served by top-rated Wayzata school district",
      "Diverse housing from condos to custom estates",
      "Central location with easy highway access",
      "Thriving business parks and local employers",
    ],
    lifestyle:
      "Plymouth residents enjoy a perfect blend of natural beauty and suburban convenience. Mornings might start with a trail run through French Regional Park, followed by a quick commute to the office via I-494. Families take advantage of the extensive youth sports leagues, community education programs, and summer camps. The Hilde Performance Center hosts outdoor concerts and events, and the Plymouth Ice Center is a hub for hockey families. With its combination of green space, strong schools, and modern amenities, Plymouth is where families put down roots and stay.",
  },
  {
    slug: "southwest-minneapolis",
    name: "Southwest Minneapolis",
    tagline: "Established City Living with a Suburban Feel",
    description:
      "Southwest Minneapolis encompasses some of the city's most desirable residential neighborhoods, including Fulton, Lynnhurst, Kenny, and Tangletown. Known for its tree-canopied streets, well-maintained homes, and quiet, family-oriented atmosphere, this area offers the rare combination of true city living with a suburban neighborhood feel. Homes range from stately Colonials and brick Tudors to mid-century ramblers and modern renovations. Proximity to the Chain of Lakes, Minnehaha Creek, and excellent Minneapolis public schools like Burroughs and Lake Harriet make it a perennial favorite for families, professionals, and anyone who appreciates a walkable, established neighborhood.",
    image:
      "https://images.unsplash.com/photo-1587255607262-6ba8da3db7ef?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$525,000",
      avgSqft: "1,900",
      walkScore: 70,
      schools: "Minneapolis Public Schools, Southwest High School",
    },
    highlights: [
      "Tree-lined streets with stately Tudors and Colonials",
      "Close to Chain of Lakes and Minnehaha Creek",
      "Highly regarded neighborhood schools",
      "Quiet, family-oriented atmosphere within the city",
      "Walkable to local shops, cafes, and restaurants",
      "Access to Grand Rounds trail system and bike paths",
    ],
    lifestyle:
      "Southwest Minneapolis offers the best of city living without the noise. Morning walks along Minnehaha Creek, afternoon bike rides on the Grand Rounds, and evening ice cream runs to Sebastian Joe's define the pace of life here. The neighborhoods are tight-knit, with block parties, school fundraisers, and community gardens bringing residents together. Kids walk to excellent neighborhood schools, and parents appreciate the safety and stability that has defined these streets for generations. It's the kind of place where you'll know your neighbors by name and never want to leave.",
  },
  {
    slug: "northeast-minneapolis",
    name: "Northeast Minneapolis",
    tagline: "The Arts District with Brewery-Hopping Built In",
    description:
      "Northeast Minneapolis — lovingly called NordEast by locals — is the creative heart of the Twin Cities. This historically working-class neighborhood has transformed into a vibrant arts and brewery district while retaining its authentic, unpretentious character. Converted warehouses house artist studios, craft breweries like Indeed, Bauhaus, and Fair State line the streets, and the annual Art-A-Whirl event is the largest open studio tour in the country. Housing options include renovated bungalows, industrial loft conversions, and new mixed-use developments. NordEast attracts creatives, young professionals, and anyone who values culture, community, and a neighborhood with genuine character.",
    image:
      "https://images.unsplash.com/photo-1503320748329-9455bea97a68?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$350,000",
      avgSqft: "1,300",
      walkScore: 82,
      schools: "Minneapolis Public Schools",
    },
    highlights: [
      "Largest concentration of breweries in the Twin Cities",
      "Art-A-Whirl: nation's largest open studio tour",
      "Renovated bungalows and industrial loft conversions",
      "Authentic, creative neighborhood character",
      "Growing restaurant and coffee shop scene",
      "Close to the Mississippi River and St. Anthony Main",
    ],
    lifestyle:
      "NordEast is where creativity and community intersect. Weekend brewery crawls, spontaneous gallery openings, and live music at local venues keep the cultural calendar full. The neighborhood's Eastern European roots still show in legendary spots like Kramarczuk's and Surdyk's. Morning coffee at a local roaster transitions to an afternoon studio session, followed by dinner at one of the neighborhood's acclaimed restaurants. The Mississippi riverfront offers trails and views, and the proximity to downtown keeps NordEast connected without feeling corporate. This is Minneapolis at its most authentic.",
  },
  {
    slug: "excelsior",
    name: "Excelsior",
    tagline: "Charming Lakeside Small Town on Lake Minnetonka",
    description:
      "Excelsior is a picturesque small town on the south shore of Lake Minnetonka that feels like a world away from the metro while being just 25 minutes from downtown Minneapolis. Its walkable downtown is packed with locally owned shops, restaurants, and galleries along Water Street, and the public beach and dock provide direct lake access for everyone. Historic Victorian and Craftsman homes line the tree-shaded streets near downtown, while the surrounding area offers everything from lakefront properties to newer suburban developments. The town's lively calendar of events — including the beloved Apple Day festival, weekly concerts at the Commons, and holiday celebrations — creates a community spirit that is hard to match.",
    image:
      "https://images.unsplash.com/photo-1663550886635-44be9bd49df4?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$550,000",
      avgSqft: "1,800",
      walkScore: 62,
      schools: "Minnetonka Public Schools",
    },
    highlights: [
      "Walkable downtown with shops, dining, and galleries",
      "Public beach and dock on Lake Minnetonka",
      "Historic homes and charming tree-lined streets",
      "Apple Day festival and summer concert series",
      "Served by top-rated Minnetonka school district",
      "Excelsior Brewing Company and local food scene",
    ],
    lifestyle:
      "Excelsior is small-town living at its finest. Summer evenings are spent on the beach or catching a free concert at the Commons, followed by dinner on a downtown patio overlooking the lake. The Apple Day festival in fall, holiday trolley rides in winter, and a Fourth of July celebration that rivals any in the state keep the community connected year-round. Kids grow up with a freedom that's rare in the metro — biking to the beach, getting ice cream downtown, and knowing shopkeepers by name. For those who want Lake Minnetonka living with genuine small-town heart, Excelsior is the answer.",
  },
  {
    slug: "maple-grove",
    name: "Maple Grove",
    tagline: "Family-Friendly Northwest Suburb with Everything You Need",
    description:
      "Maple Grove is one of the Twin Cities' fastest-growing suburbs and for good reason. Located northwest of Minneapolis along I-94 and I-494, the city offers a master-planned mix of residential neighborhoods, top-rated schools, extensive parks, and one of the metro's best shopping and dining scenes at the Shoppes at Arbor Lakes. Housing ranges from affordable townhomes and new-construction single-family homes to executive properties on wooded lots. The Osseo school district consistently earns high marks, and the city's investment in trails, recreation centers, and community events makes Maple Grove an ideal place to raise a family or find your forever home.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    stats: {
      avgPrice: "$475,000",
      avgSqft: "2,200",
      walkScore: 32,
      schools: "Osseo Area Schools (ISD 279)",
    },
    highlights: [
      "Shoppes at Arbor Lakes dining and retail district",
      "Top-rated Osseo Area school district",
      "Extensive trail system and 60+ parks",
      "Central Park with amphitheater and events",
      "Mix of new construction and established neighborhoods",
      "Easy access to I-94 and I-494 corridors",
    ],
    lifestyle:
      "Maple Grove is built for families. Kids ride bikes on the interconnected trail system, play in one of 60+ parks, and attend schools that consistently rank among the best in the metro. The Shoppes at Arbor Lakes provides a walkable town center experience with dining, shopping, and seasonal events. Central Park hosts summer concerts and community festivals, and the Maple Grove Community Center offers year-round recreation. For commuters, I-94 and I-494 provide easy access to downtown Minneapolis and the northern suburbs. Maple Grove delivers the modern suburban lifestyle with genuine community warmth.",
  },
];
