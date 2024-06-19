import { Navbar, Footer, BlogCont } from "../components"

export const BlogContentPage = ({ blogs }) => {
    return (
        <>
            <Navbar />
            <BlogCont blogs={blogs?blogs: ""} />
            <Footer />
        </>
    )
}
