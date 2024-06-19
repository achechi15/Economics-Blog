import { Link } from "react-router-dom"


export const Blogs = ({ blogs }) => {

    console.log(blogs)

    if (blogs === undefined || blogs === "") return;


    const blogs1 = [
        {
            "id": 1,
            "title": 'Blog 1',
            'desc': 'Aprende como suicidarte',
            'coverIMG': 'https://images.vexels.com/media/users/3/147984/isolated/preview/9bb83f33ce47015f60bbf29d2df076db-icono-de-quema-de-billete-de-dolar.png',
            'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id.'
        },
        {
            "id": 2,
            "title": 'blog2',
            'desc': '¿Pregunta retórica?',
            'coverIMG': 'https://agenciadis.files.wordpress.com/2012/01/captura-de-pantalla-2012-01-29-a-las-17-58-04.png',
            'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id.'
        },
        {
            'id': 3,
            "title": 'Blog 3',
            'desc': 'Aprende como suicidarte',
            'coverIMG': 'https://images.vexels.com/media/users/3/147984/isolated/preview/9bb83f33ce47015f60bbf29d2df076db-icono-de-quema-de-billete-de-dolar.png',
            'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id.'
        },
    ]

    return (
        <div className="w-full bg-[#f9f9f9] py-[50px]">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid lg:grid-cols-3 xs:grid-cols-2 gap-8 px-4 text-black">

                    { (blogs.data).map( (blog) => 
                    
                            <Link to={`/blog/${blog.id}`} key={blog.id}>
                                <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                                    <img className="h-56 w-full object-contain" src={`http://localhost:1337${blog.attributes.coverIMG.data.attributes.url}`} />
                                    <div className="p-8">
                                        <h3 className="font-bold text-2xl my-1">{blog.attributes.blogTitle}</h3>
                                        <p className="text-gray-600 text-xl">{blog.attributes.blogDesc}</p>
                                    </div>
                                </div>
                            </Link>
                        )}





                    {/* { blogs1.map( (blog) => 
                        <Link to={`/blog/${blog.id}`} key={blog.id}>
                            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                                <img className="h-56 w-full object-contain" src={blog.coverIMG} />
                                <div className="p-8">
                                    <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                                    <p className="text-gray-600 text-xl">{blog.desc}</p>
                                </div>
                            </div>
                        </Link>
                    )} */}

                </div>
            </div>
        </div>
    )
}
