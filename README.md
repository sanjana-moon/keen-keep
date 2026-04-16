# KeenKeeper 🌿

> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

KeenKeeper is a modern relationship management app that helps you stay connected with the people who matter most. Log interactions, track communication history, and never let an important friendship slip through the cracks.

---

## Features

- **Friend Dashboard** — View all your friends in a clean card layout with contact status (on-track, almost due, overdue)
- **Friend Detail Page** — See individual stats like days since contact, goal cadence, and next due date
- **Quick Check-In** — Log a call, text, or video call directly from a friend's profile
- **Timeline** — Browse your full communication history with filtering by interaction type
- **Stats** — Visualize communication habits with an interactive pie chart
- **Toast Notifications** — Instant feedback when logging interactions
- **Responsive UI** — Mobile-friendly layout with smooth loading states and a custom 404 page

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework (App Router) |
| [React](https://react.dev/) | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | Tailwind component library |
| [Recharts](https://recharts.org/) | Pie chart for stats |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon set |
| [React Spinners](https://www.davidhu.io/react-spinners/) | Loading animations |

---

## Project Structure

```
├── app/
│   ├── context/
│   │   └── TimelineContext.js       # Global state for communication history
│   ├── lib/
│   │   └── providers.js             # Context provider wrapper
│   ├── friend/[friendId]/
│   │   └── page.js                  # Dynamic friend detail page
│   ├── timeline/
│   │   └── page.js                  # Timeline page
│   ├── stats/
│   │   └── page.js                  # Stats page
│   ├── layout.js                    # Root layout with Navbar, Footer, Providers
│   ├── loading.js                   # Global loading state
│   └── not-found.js                 # Custom 404 page
│
└── component/
    ├── shared/
    │   ├── navbar/Navbar.jsx         # Responsive navbar with active link highlighting
    │   └── footer/Footer.jsx         # Footer with social links
    ├── ui/
    │   ├── FriendCard.jsx            # Friend card with status badge
    │   ├── TimelineCard.jsx          # Individual timeline entry card
    │   └── Banner.jsx                # Homepage hero with stats summary
    ├── buttons/
    │   ├── HandleCallBtn.jsx         # Logs a call interaction
    │   ├── HandleTextBtn.jsx         # Logs a text interaction
    │   └── HandleVideoCallBtn.jsx    # Logs a video call interaction
    └── pages/
        ├── AllFriendsCards.jsx       # Grid of all friend cards
        ├── TimelinePage.jsx          # Timeline view with filter
        └── Stats.jsx                 # Recharts pie chart page
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/keen-keeper.git
cd keen-keeper
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How It Works

1. Browse your friends on the dashboard and open any friend's detail page
2. Use the **Quick Check-In** buttons to log a call, text, or video call
3. All interactions are stored globally via React Context and appear on the **Timeline**
4. Filter the timeline by interaction type — if no results match, an empty state is shown
5. Visit **Stats** to see a pie chart breakdown of your communication habits

### Filtering System

The timeline supports filtering by **Call**, **Text**, or **Video Call**. `filteredSection` is initialized as `null` (not `[]`) to distinguish between "no filter applied" and "filter returned no results" — this ensures the empty state displays correctly when a filter finds nothing.

---

## Data Source

Friend data is fetched from:

```
https://keen-keeper-blush.vercel.app/data.json
```

Each friend object includes: `id`, `name`, `picture`, `bio`, `email`, `tags`, `status`, `goal`, `days_since_contact`, `next_due_date`.

---

## Known Issues / Future Improvements

- [ ] Persistent storage — communication history resets on page refresh (no database or localStorage yet)
- [ ] Add / edit / delete friends — currently read-only
- [ ] Multi-filter support on the timeline
- [ ] Snooze, Archive, and Delete actions on the friend detail page are UI-only
- [ ] Banner stats are hardcoded — should be derived from API data
- [ ] Authentication system

---

## Author

**Sanjana Moon**