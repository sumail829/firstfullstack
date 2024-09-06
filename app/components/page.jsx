import DeletePostButton from "./DeletePostButon";


export default function Post({id,title,content,authorName})
{
    return(
        <div>
            <div className="flex flex-col border-2 ml-3 border-gray-400 max-w-sm">
                <div>{authorName}</div>
                <div>{title}</div>
                <div>{content}</div>
                <DeletePostButton postId={{id}}></DeletePostButton>
            </div>
        </div>
    )
}