import { useParams } from "react-router-dom"
import Markdown from 'react-markdown';

export const BlogCont = ({ blogs }) => {
    
    const { id } = useParams()

    if (blogs === "") return;

    // const blogs = [
    //     {
    //         "id": 1,
    //         "title": 'Blog 1',
    //         'desc': 'Aprende como suicidarte',
    //         'coverIMG': 'https://images.vexels.com/media/users/3/147984/isolated/preview/9bb83f33ce47015f60bbf29d2df076db-icono-de-quema-de-billete-de-dolar.png',
    //         'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id.'
    //     },
    //     {
    //         "id": 2,
    //         "title": 'blog2',
    //         'desc': '¿Pregunta retórica?',
    //         'coverIMG': 'https://agenciadis.files.wordpress.com/2012/01/captura-de-pantalla-2012-01-29-a-las-17-58-04.png',
    //         'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id.'
    //     },
    //     {
    //         'id': 3,
    //         "title": 'Blog 3',
    //         'desc': 'Aprende como suicidarte',
    //         'coverIMG': 'https://images.vexels.com/media/users/3/147984/isolated/preview/9bb83f33ce47015f60bbf29d2df076db-icono-de-quema-de-billete-de-dolar.png',
    //         'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie risus. Morbi viverra sit amet sem a sagittis. Integer ultricies urna ut efficitur suscipit. Quisque in nulla viverra, dapibus dolor a, commodo est. Curabitur orci nibh, pellentesque ac convallis et, viverra non dolor. Ut eu nulla pretium, vehicula tortor et, sollicitudin nulla. Aliquam erat volutpat. Mauris facilisis arcu felis, ac viverra tellus auctor sed. Integer vel faucibus lacus, ac semper turpis. Curabitur vehicula enim vitae vestibulum tristique. Vivamus volutpat mattis volutpat. Aliquam et ligula sit amet mauris varius vulputate vel nec quam. In hac habitasse platea dictumst. Nulla quis nisl imperdiet urna cursus lobortis sit amet eget libero. Mauris euismod iaculis odio, a aliquet risus consequat id.'
    //     },
    // ];

    let blog = {}
    if (blog) {
        let arr = blogs.data.filter( blogPage => blogPage.id == id );
        blog = arr[0];
    } else {
        blog = {}
    }
    console.log(blog)
    
    return (
        <div className="w-full pb-10 bg-[#f9f9f9]">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 ss:grid-cols-1 xxs:grid-cols-1 md:gap-x-8 sm:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">

                    <div className="col-span-2 gap-x-8 gap-y-8">
                        <img className="h-56 w-full object-contain" src={`http://localhost:1337${blog.attributes.coverIMG.data.attributes.url}`} />
                        <h1 className="font-bold text-2xl my-1 pt-5">{blog.attributes.blogTitle}</h1>
                        <div className="pt-5">
                            <Markdown className="line-break">{blog.attributes.blogContent}</Markdown>
                        </div>
                    </div>

                    <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-sm py-5 max-h-[250px]">
                        <div>
                            <img className="p-2 w-32 h-32 rounded-full mx-auto overflow-hidden" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcTxJSKXFERrCu-cLgHwqYGPh4uk2cw0olb7O8rEZ8Q&s"}/>
                            <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">Alexis Montalvo</h1>
                            <p className="text-center text-gray-900 font-medium">Estudiante de Economía e Ingeniería informática</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
