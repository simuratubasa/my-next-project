import { getNewsDetail } from "@/app/_libs/microcms";
type Props = {
    Params: {
        slug: string;
    }
};

export default async function Page(props:Props) {
    const data =await getNewsDetail(props.params.slug);

    return <div>{data.title}</div>
}