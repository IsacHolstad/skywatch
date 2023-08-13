const people = [
    {
        name: 'Lindsay Walton',
        role: 'Developer',
        imageUrl:
            'https://www.ohchr.org/sites/default/files/styles/hero_5_image_desktop/public/2022-11/women-rights-main-image.jpg?itok=RRGl2PFb',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: "Isac Holstad",
        role: "Developer",
        imageUrl: "https://media.licdn.com/dms/image/D4D03AQEhcnS0K9_zKw/profile-displayphoto-shrink_800_800/0/1678486784950?e=2147483647&v=beta&t=UCHKAdAeh2ZWM-AlRwsRNCzwTpW5IUo8EA_ovlYR91Y"

    }

]

export default function CreatorsSection() {
    return (
        <div className="bg-white py-24 sm:py-32 mx-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                        best results for our clients.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-base leading-7 text-gray-600">{person.role}</p>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}