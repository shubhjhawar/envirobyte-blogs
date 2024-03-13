type Meta = {
    id:string,
    title:string,
    date:string,
    tags: string[],
    banner:string,
    description:string
}

type FileTree = {
    "tree":[
        {
            "path":string,
        }
    ]
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,

}