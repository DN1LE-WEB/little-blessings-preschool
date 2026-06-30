// Single source of truth for site content.
// Little Blessings Preschool — a ministry of Faith Lutheran Church, Madison, MN.
//
// Facts below are drawn from public listings (childcarecenter.us, Daycare.com,
// the Faith Lutheran Church website, and the school's Facebook page).
//   ⚠️ VERIFY BEFORE LAUNCH: program names, exact class days/times, tuition, and
//   teacher names are reasonable placeholders for the church to confirm. The
//   address, phone (church office), Facebook page, and MN license number are
//   from public sources.

export const site = {
  name: 'Little Blessings Preschool',
  shortName: 'Little Blessings',
  tagline: 'A Christ-centered preschool in Madison, Minnesota',
  ministryOf: 'Faith Lutheran Church',
  description:
    'Little Blessings Preschool is a warm, Christ-centered preschool in Madison, MN, where children ages 2–5 grow in faith, friendship, and a love of learning. A ministry of Faith Lutheran Church — now enrolling.',
  verse: {
    text: '“Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these.”',
    ref: 'Mark 10:14',
  },
  phone: '(320) 598-3630',
  phoneHref: 'tel:+13205983630',
  // Faith Lutheran Church office / Little Blessings Preschool.
  address: {
    name: 'Faith Lutheran Church',
    street: '106 W 8th St',
    city: 'Madison',
    state: 'MN',
    zip: '56256',
  },
  mapQuery: 'Faith+Lutheran+Church,+106+W+8th+St,+Madison,+MN+56256',
  license: 'Minnesota License #1042530',
  social: {
    facebook: 'https://www.facebook.com/FaithLBP/',
    church: 'https://www.faithlutheranmadison.org/',
  },
  // Class days/times — placeholder pattern typical of part-day church preschools.
  // Confirm the real schedule with the director before launch.
  hours: [
    { day: 'Toddler class', time: 'Tuesday & Thursday · 9:00 – 11:30 AM' },
    { day: 'Preschool (3–4)', time: 'Mon / Wed / Fri · 9:00 – 11:30 AM' },
    { day: 'Pre-K (4–5)', time: 'Monday – Thursday · 9:00 AM – 12:00 PM' },
    { day: 'Office', time: 'Weekdays · 9:00 AM – 3:00 PM' },
  ],
};

// In-page anchor navigation — this is a single-page landing site.
export const nav = [
  { label: 'Welcome', href: '#welcome' },
  { label: 'Programs', href: '#programs' },
  { label: 'Our Day', href: '#day' },
  { label: 'Why Us', href: '#why' },
  { label: 'Visit', href: '#visit' },
];

// Age-based programs. Faith-themed names are suggestions — confirm with the church.
export const programs = [
  {
    name: 'Little Lambs',
    label: 'Toddlers',
    ages: 'Ages 2 – 3',
    icon: 'leaf',
    summary:
      'A gentle first step away from home. Through play, songs, and simple Bible stories, our youngest friends build confidence, language, and their very first friendships.',
    highlights: ['Play-based discovery', 'Potty-training friendly', 'Lots of cuddles & care'],
  },
  {
    name: 'Sonshine Preschool',
    label: 'Preschool',
    ages: 'Ages 3 – 4',
    icon: 'sun',
    summary:
      'Curiosity blooms here. Children explore letters, numbers, colors, and creativity while learning to share, take turns, and care for one another as God’s children.',
    highlights: ['Early literacy & numbers', 'Art, music & movement', 'Social-emotional growth'],
    featured: true,
  },
  {
    name: 'Pre-K Pathways',
    label: 'Kindergarten Prep',
    ages: 'Ages 4 – 5',
    icon: 'book',
    summary:
      'Getting ready to shine in kindergarten. We strengthen letters, sounds, counting, and listening skills so your child walks into their next year prepared and excited.',
    highlights: ['Kindergarten readiness', 'Name writing & phonics', 'Confidence & independence'],
  },
];

// Reasons families choose Little Blessings (rendered as a flowing feature list).
export const reasons = [
  {
    icon: 'cross',
    title: 'Christ-Centered Every Day',
    text: 'Faith isn’t a single lesson — it’s woven through our songs, prayers, and the gentle, loving way we treat one another.',
  },
  {
    icon: 'heart',
    title: 'Small, Nurturing Classes',
    text: 'With low child-to-teacher ratios, every child is truly known, encouraged, and cared for by name.',
  },
  {
    icon: 'blocks',
    title: 'Learning Through Play',
    text: 'Hands-on centers, stories, art, and music turn everyday play into joyful, lasting learning.',
  },
  {
    icon: 'star',
    title: 'Kindergarten Ready',
    text: 'A gentle, age-appropriate foundation in letters, numbers, and social skills sets children up to thrive.',
  },
  {
    icon: 'users',
    title: 'All Families Welcome',
    text: 'Children of every faith and background are warmly welcomed into our preschool family.',
  },
  {
    icon: 'church',
    title: 'Rooted in Community',
    text: 'As a ministry of Faith Lutheran Church, we’ve cared for Madison’s children and families for years.',
  },
];

// A typical morning — shown as a soft timeline.
export const day = [
  { time: 'Arrival', icon: 'sun', title: 'Welcome & Free Play', text: 'Warm hellos and gentle play help every child settle in and feel at home.' },
  { time: 'Circle', icon: 'heart', title: 'Circle & Bible Time', text: 'Songs, prayer, calendar, and a Bible story to start our day with joy.' },
  { time: 'Explore', icon: 'blocks', title: 'Learning Centers', text: 'Hands-on stations for letters, numbers, building, and pretend play.' },
  { time: 'Create', icon: 'palette', title: 'Art & Music', text: 'Crafts, instruments, and movement to spark creativity and coordination.' },
  { time: 'Snack', icon: 'apple', title: 'Snack & Prayer', text: 'A thankful prayer, a healthy snack, and friendly conversation together.' },
  { time: 'Outdoors', icon: 'leaf', title: 'Outdoor Play', text: 'Running, climbing, and fresh air to grow strong, happy bodies.' },
  { time: 'Closing', icon: 'book', title: 'Story & Goodbyes', text: 'A favorite story, a closing song, and hugs before heading home.' },
];

// Simple enrollment steps.
export const steps = [
  { n: '1', title: 'Reach Out', text: 'Call the church office or send us a message on Facebook to say hello and ask any questions.' },
  { n: '2', title: 'Come Visit', text: 'Schedule a tour to meet our teachers, see the classroom, and feel the warmth for yourself.' },
  { n: '3', title: 'Enroll', text: 'Complete a simple registration form to reserve your child’s spot for the school year.' },
  { n: '4', title: 'First Day', text: 'Bring your little blessing for a joyful start — we can’t wait to welcome them!' },
];

export const stats = [
  { value: '2–5', label: 'Ages we lovingly serve' },
  { value: 'Christ', label: 'At the center of all we do' },
  { value: 'Small', label: 'Classes, big-time attention' },
  { value: 'Now', label: 'Enrolling for the new year' },
];
