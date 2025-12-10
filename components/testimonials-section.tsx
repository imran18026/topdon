import { TestimonialCard } from './testimonial-card'

const testimonials = [
  {
    rating: 5,
    ratingText: 'Very Good',
    badge: '⭐',
    category: 'PILOT',
    daysAgo: '4 days ago',
    content:
      "Awesome service, next day delivery, friendly staff that know their stuff. Reassured support is always available should it be needed. It was like dealing with someone you've known 20 years.",
    authors: [
      {
        name: 'PAUL L',
        role: 'Creative Director',
        company: 'CompanyName',
        image: '/PAUL.png',
      },
      {
        name: 'DAVID G',
        role: 'Creative Director',
        company: 'CompanyName',
        image: '/DAVID.png',
      },
      {
        name: 'LEE W',
        role: 'Creative Director',
        company: 'CompanyName',
        image: '/LEE.png',
      },
    ],
  },
  // Add more testimonials here
]

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-[#0f1821]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
