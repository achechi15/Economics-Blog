import { Navbar, Blogs, Footer } from "../components"

export const Homepages = ({ blogs }) => {

    return (
        <>
            <Navbar />
            <Blogs blogs={blogs?blogs:""} />
            <Footer />
        </>
    )
}
