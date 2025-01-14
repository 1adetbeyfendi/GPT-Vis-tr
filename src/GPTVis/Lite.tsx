import React, { memo } from 'react';
import type { Options } from 'react-markdown';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export interface GPTVisLiteProps extends Options {
  /** 自定义 markdown components样式 */
  components?:
    | Options['components']
    | {
        [key: string]: (props: any) => React.ReactNode;
      };
}

const GPTVisLite: React.FC<GPTVisLiteProps> = ({
  children,
  components,
  rehypePlugins,
  remarkPlugins,
  ...rest
}) => {
  return (
    <Markdown
      components={components}
      rehypePlugins={[rehypeRaw, ...(rehypePlugins ? rehypePlugins : [])]}
      remarkPlugins={[remarkGfm, ...(remarkPlugins ? remarkPlugins : [])]}
      {...rest}
    >
      {children}
    </Markdown>
  );
};

export default memo(GPTVisLite);
