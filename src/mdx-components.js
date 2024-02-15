import { cn } from "@/lib/utils"

export function useMDXComponents(components) {
  return {
    h1: ({ children }) => <h1 className="font-heading mt-2 scroll-m-20 text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">{children}</h2>,
    h3: ({ children }) => <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">{children}</h3>,
    h4: ({ children }) => <h4 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">{children}</h4>,
    h5: ({ children }) => <h5 className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight">{children}</h5>,
    h6: ({ children }) => <h6 className="mt-8 scroll-m-20 text-base font-semibold tracking-tight">{children}</h6>,
    a: ({ children }) => <a className="font-medium underline underline-offset-4">{children}</a>,
    p: ({ children }) => <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>,
    ul: ({ children }) => <ul className="my-6 ml-6 list-disc">{children}</ul>,
    ol: ({ children }) => <ol className="my-6 ml-6 list-decimal">{children}</ol>,
    li: ({ children }) => <li className="mt-2">{children}</li>,
    blockquote: ({ children }) => <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>,
    ...components,
  }
}