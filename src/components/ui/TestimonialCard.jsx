export default function TestimonialCard({ quote, author, role }) {
    return (
        <figure className="card-testimonial">
            <blockquote className="text-white/90">{quote}</blockquote>
                <figcaption>
                    <span className="font-medium text-white/90">{author}, {role}</span>
                </figcaption>
        </figure>
    );
}