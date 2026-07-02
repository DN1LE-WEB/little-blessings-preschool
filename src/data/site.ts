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
  tagline: 'A Christ-centered Pre-K in Madison, Minnesota',
  ministryOf: 'Faith Lutheran Church',
  description:
    'Little Blessings is a Christ-centered Pre-K in Madison, MN, for children ages 4 to 5. We keep just 10 spots, so every child is known and loved. A ministry of Faith Lutheran Church, now enrolling.',
  spots: 10,
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
  // Class days/times — placeholder pattern for a part-day church Pre-K.
  // Confirm the real schedule with the director before launch.
  hours: [
    { day: 'Pre-K (ages 4–5)', time: 'Monday to Thursday · 9:00 AM to 12:00 PM' },
    { day: 'Office', time: 'Weekdays · 9:00 AM to 3:00 PM' },
  ],
};

// In-page anchor navigation — this is a single-page landing site.
export const nav = [
  { label: 'Welcome', href: '#welcome' },
  { label: 'Our Day', href: '#day' },
  { label: 'Why Us', href: '#why' },
  { label: 'Visit', href: '#visit' },
];

// Reasons families choose Little Blessings (rendered as a flowing feature list).
export const reasons = [
  {
    icon: 'cross',
    title: 'Christ-Centered Every Day',
    text: 'Faith isn’t just one lesson. It’s in our songs, our prayers, and the kind way we treat each other.',
  },
  {
    icon: 'heart',
    title: 'Just 10 Spots',
    text: 'With only 10 children in the class, every child is known by name and gets real attention.',
  },
  {
    icon: 'blocks',
    title: 'Learning Through Play',
    text: 'Hands-on centers, stories, art, and music turn play into real learning.',
  },
  {
    icon: 'star',
    title: 'Kindergarten Ready',
    text: 'We build the letters, numbers, and social skills your child needs to thrive in kindergarten.',
  },
  {
    icon: 'users',
    title: 'All Families Welcome',
    text: 'Children of every faith and background are welcome here.',
  },
  {
    icon: 'church',
    title: 'Rooted in Community',
    text: 'As a ministry of Faith Lutheran Church, we’ve cared for Madison’s families for years.',
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
  { n: '4', title: 'First Day', text: 'Bring your little blessing for a joyful start. We can’t wait to welcome them!' },
];

export const stats = [
  { value: '10', label: 'Pre-K spots this year' },
  { value: 'Christ', label: 'At the center of all we do' },
  { value: '4–5', label: 'The ages we serve' },
  { value: 'Now', label: 'Enrolling for the new year' },
];
