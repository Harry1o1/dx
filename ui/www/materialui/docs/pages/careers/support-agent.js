import * as React from 'react';
import TopLayoutCareers from 'docs/src/modules/components/TopLayoutCareers';
import * as pageProps from 'docs/pages/careers/support-agent.md?muiMarkdown';

export default function Page() {
  return <TopLayoutCareers {...pageProps} />;
}
