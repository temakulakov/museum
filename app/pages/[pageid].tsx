// app/pages/[pageid].tsx
import { useRouter } from 'next/router';
import Header from "@/components/header";

function Post() {
    const router = useRouter();
    const { pageid } = router.query;
console.log("WEFUWEOIFWEOIFJIOWEJOI");
    return (
        <div>
            <Header/>
            {/*<h1>Post: {arr[Number(router.query.pageid)].label}</h1>*/}
            {/* Остальное содержимое поста */}
        </div>
    );
}

export default Post;
