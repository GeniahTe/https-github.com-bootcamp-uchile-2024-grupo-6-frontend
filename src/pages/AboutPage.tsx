import Main from "../components/Main";
import { MainLayout } from "../layouts/MainLayout";

interface AboutProps {
    title: string;
    body: string;
}

export const AboutPage = (props: AboutProps) => {
    document.title = props.title;

    return (
        <MainLayout>
            <Main/>
        </MainLayout>      
    )
}