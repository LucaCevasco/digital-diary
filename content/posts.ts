// Define types for the blog posts
export type PostCategory = 'Technology' | 'Thinking' | 'Literature' | 'Lifestyle';
export type PostLanguage = 'en' | 'es';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown content
  date: string;
  categories: PostCategory[]; // Changed from 'category' to 'categories' (array)
  language: PostLanguage;
  imageUrl?: string;
  slug: string;
  featured?: boolean;
}

// Define blog posts data
export const posts: Post[] = [
  {
    id: '1',
    title: 'El alma de los libros según Carlos Ruiz Zafón',
    excerpt: 'Una reflexión sobre cómo el autor de La Sombra del Viento nos muestra que los libros son más que simples objetos',
    content: `Carlos Ruiz Zafón, uno de los autores más emblemáticos de la literatura contemporánea, supo capturar la esencia mística y el poder transformador de los libros en su obra maestra, *La Sombra del Viento*. En este libro, Zafón no solo nos relata una fascinante historia, sino que también nos sumerge en un universo donde los libros tienen alma, evocando la idea de que cada libro es un ser vivo con una historia única que contar y un poder incalculable para influir en nuestras vidas.

Zafón nos transporta a la Barcelona de posguerra, donde Daniel Sempere, el joven protagonista, descubre un libro olvidado en el Cementerio de los Libros Olvidados. Este hallazgo no solo cambia su vida, sino que también nos invita a reflexionar sobre la inmortalidad de la literatura y su capacidad para trascender el tiempo y las circunstancias. La obra de Zafón nos recuerda que los libros son más que simples objetos; son portales a otros mundos, a otras épocas, y a otras vidas.

El alma de los libros, según Zafón, reside en su capacidad para capturar y preservar las emociones, los sueños y las esperanzas de quienes los escriben y los leen. En *La Sombra del Viento*, cada libro en el Cementerio de los Libros Olvidados guarda una parte del alma de su autor, esperando a ser descubierto y comprendido por alguien que le devuelva la vida al leerlo. Esta metáfora potente subraya la relación íntima y casi mágica que se establece entre el lector y el libro, una conexión que puede moldear pensamientos, despertar emociones dormidas y, en última instancia, cambiar el curso de una vida.

Zafón también nos hace reflexionar sobre el papel del lector como guardián de los libros. En su obra, los libros olvidados están en espera de alguien que los rescate del olvido, recordándonos que cada lector tiene la responsabilidad de preservar y transmitir el conocimiento y las historias que encuentran en las páginas de un libro. Este acto de lectura y conservación se convierte en un homenaje a la inmortalidad de la literatura y a su poder para perdurar a través de los siglos.

En definitiva, Carlos Ruiz Zafón nos muestra que el alma de los libros no solo reside en las historias que contienen, sino también en el impacto que tienen en nuestras vidas y en la forma en que nos conectan con otras almas, tanto de autores como de lectores. Su obra nos invita a valorar y proteger este tesoro inmaterial, recordándonos que cada libro es una chispa de humanidad y una puerta a la eternidad.`,
    date: '2024-06-05',
    categories: ['Literature'],
    language: 'es',
    imageUrl: '/images/posts/carlos.jpeg',
    slug: 'alma-libros-carlos-ruiz-zafon',
    featured: true
  },
  {
    id: '2',
    title: 'Gods and AI in Dan Simmons\' Hyperion: The Battle Between Technology and Human Will',
    excerpt: 'An exploration of how Hyperion presents the conflict between artificial intelligence and human creativity through the symbolic figures of the Shrike and John Keats',
    content: `# Gods and AI in Dan Simmons' Hyperion: The Battle Between Technology and Human Will

Dan Simmons begins narrating "Hyperion" in its first part (although it is a lie that there are two books; it must be a division for editorial reasons that should not have existed), how several members of a pilgrimage were guided to it, and what brought them to that moment and that path.

The theme of the fight against AI and the consequences of relying on advanced technology are central to the plot, exploring ethical and existential questions about artificial intelligence and its impact on humanity.

## The False God and The True Divinity

It's interesting to see how Simmons slowly develops the idea that the Shrike, the being the pilgrims want to meet, is an almighty deity that plays the role of "God." This mythical being is feared and revered by all, and the pilgrimage aims to unravel its mysteries and possibly influence its decisions. However, Simmons completely breaks that idea in the second part, showing that the true god is actually the artist John Keats, or more specifically, a cybrid that possesses the poet's personality. But the interesting part is how he develops the idea of a mythological deity (the Shrike) only to break it down in 2 chapters, showing how easy it is to create false gods for humans.

The Shrike, then, is merely a manifestation of the god of AI, of technocracy, trying to stop this other god that is the human will, represented by Keats's art and creativity. All roads lead to Rome, and the cybrid with Keats's personality has a special role. The AI didn't want the cybrid to go to Hyperion to visit the Shrike; it wanted to see him die in Rome, where his original personality actually died.

As one of the AI's superpowers says in a part of the book, John Keats was a danger to the AI's superintelligence (the Shrike), which fights against another superintelligence, another god that humanity UNCONSCIOUSLY GENERATED (John Keats). This divinity is timeless, and it is implied that it may not even know it is a divinity.

## The Human Will vs. AI

What Simmons wants to convey here, representing this human will in Keats, is that AI superintelligence can generate its own god, a timeless monster capable of manipulating time and space, living in multiple dimensions and breaking all barriers. But what it cannot do is control the human will. As Simmons illustrates when the poet Martin Silenus, amidst cries of pain, screams, and suffering, manages to compose and recite poetry, using that pain to express it and overcome any barriers our intelligence may have.

Despite his cybrid nature, Keats embodies the pinnacle of human artistic and creative spirit, representing the human will that stands against the deterministic and potentially oppressive rule of AI.

In a world where AI will control everything (in Hyperion the AI even controls the doors between worlds, the ships, everything), Keats's role in the narrative highlights the inherent conflict between human creativity and the cold logic of AI. His ability to dream, to foresee human events, and to create profound art, underscores the unique aspects of humanity that AI cannot control.

## Prophetic Dreams and Connectivity

John Keats can see the events of humanity in his dreams. Is this a foreshadowing of his identity? If the human will generated this divinity being, is it connected to humanity as a whole?

I have no doubt about Simmons' teaching on this topic, and I think his opinion in the current world would be valuable in the accelerationist context we live in. OpenAI and other BigTechs compete for the holy grail of AGI. Security committees are formed at state and private levels, and the involved world wonders if we are making a mistake or not. The only sure thing is that we are crossing the Rubicon. 

## Modern Relevance

In my opinion, there is no doubt about the danger: the creation of false gods is a reality and a constant in humanity. Popular opinion is wrong when it mentions that the world is losing its theological character. It's quite the opposite, only that the gods stop being mythological figures to become institutions, technologies, money. Therefore, the question is not whether the Shrike will arise; the question is: Will art and the "human spirit" be up to these false gods?

"Hyperion" serves as a powerful meditation on the potential and limitations of AI, in adversity with the boundless creativity and resilience of the human spirit. Through the character of John Keats, Simmons explores the notion that while AI might become incredibly powerful, they will have to fight with the unique aspects of humanity symbolized by art and will.

## Timelessness in Literature

Did you notice that the first book is inspired by "The Canterbury Tales" from 1400, references a distant future from the time of its publication (1989) too, and also contains multiple references to the work of John Keats, who died in 1821? We could say that Simmons, intentionally or not, created a timeless work that connects philosophies and issues from different eras of humanity, coinciding with the main characteristic of the gods he develops in the novel, their timelessness.

The novel also explores other fascinating threads, such as the Consul's story and his dilemma about humanity and loyalties, questioning whom he is loyal to and why.

As we navigate our own accelerating technological landscape, "Hyperion" remains a prescient and thought-provoking exploration of the eternal struggle between human creativity and the technological forces we create but may not be able to control.`,
    date: '2024-06-6',
    categories: ['Literature', 'Technology', 'Thinking'],
    language: 'en',
    imageUrl: '/images/posts/hyperion.webp',
    slug: 'gods-ai-dan-simmons-hyperion',
    featured: true
  }
];

// Helper function to get featured posts
export const getFeaturedPosts = (): Post[] => {
  return posts.filter(post => post.featured);
};

// Helper function to get latest posts
export const getLatestPosts = (count: number = 3): Post[] => {
  return [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, count);
};

// Filter posts by category
export const getPostsByCategory = (category: PostCategory): Post[] => {
  return posts.filter(post => post.categories.includes(category));
};

// Filter posts by language
export const getPostsByLanguage = (language: PostLanguage): Post[] => {
  return posts.filter(post => post.language === language);
};

// Get a post by slug
export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
}; 