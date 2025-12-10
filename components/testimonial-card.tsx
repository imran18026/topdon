import Image from 'next/image'
import { Star } from 'lucide-react'

interface Testimonial {
  rating: number
  ratingText: string
  badge?: string
  category: string
  daysAgo: string
  content: string
  authors: {
    name: string
    role: string
    company: string
    image: string
  }[]
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-[#1a2332] border-2 border-cyan-400 rounded-lg p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <span className="text-gray-300 font-medium">{testimonial.ratingText}</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-600 text-gray-600'
                }`}
              />
            ))}
          </div>
          {testimonial.badge && (
            <span className="text-yellow-400 text-sm">{testimonial.badge}</span>
          )}
          <span className="text-gray-400 uppercase text-sm font-semibold">
            {testimonial.category}
          </span>
        </div>
        <span className="text-gray-500 text-sm">{testimonial.daysAgo}</span>
      </div>

      {/* Review Content */}
      <p className="text-gray-300 italic mb-6 leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Divider */}
      <div className="border-t border-cyan-400/50 border-dotted mb-4"></div>

      {/* Authors Section */}
      <div className="flex gap-6">
        {testimonial.authors.map((author, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-700">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">{author.name}</h4>
              <p className="text-gray-400 text-xs">
                {author.role} at <span className="text-cyan-400">{author.company}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
