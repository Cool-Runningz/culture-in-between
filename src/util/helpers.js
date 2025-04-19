export const buildSlug = (title) => {
  return title.split('|')[0].trim().split(' ').join('-').toLocaleLowerCase()
}

export const getFormattedDate = (date) => {
  //Parse the date string manually to avoid timezone issues
  const [year, month, day] = date.split('-').map(Number)

  //Month is 0-based in the Date constructor
  const newDate = new Date(year, month - 1, day)

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
  }).format(newDate)
}

export const getSortedBlogPosts = (posts) => {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const generateTabs = (episode, transcript) => {
  return  [
    {
      id: "tab-1",
      label: "Show notes",
      value: "show-notes",
      content: (
        <div
            className="prose prose-slate mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
            dangerouslySetInnerHTML={{ __html: episode.content }}
          />
      ),
    },
    {
      id: "tab-2",
      label: "Transcript",
      value: "transcript",
      content: (
        <pre className="font-[inherit] mt-12 whitespace-pre-wrap">
        {transcript}
      </pre>    
      ),
    }
  ];
}

/* export const formatSRTToPlainText = (srt) => {
  return srt
       .split('\n\n')
       .map((block) => {
         const lines = block.split('\n');
         return lines.slice(2).join(' ');
       })
       .filter(Boolean)
       .join('\n\n'); 
} */

export const formatSRTToReadableTranscript = (srt) => {
  return srt
    .split('\n\n')
    .map((block) => {
      const lines = block.split('\n');
      if (lines.length < 3) return null;

      const timestampLine = lines[1].trim();
      const [startRaw, endRaw] = timestampLine.split(' --> ');
      const start = formatTimestamp(startRaw);
      const end = formatTimestamp(endRaw);
      const timestamp = `${start} → ${end}`;

      const text = lines.slice(2).join(' ').trim();

      return `${timestamp}\n${text}`;
    })
    .filter(Boolean)
    .join('\n\n');
};

const formatTimestamp = (time) => {
  const [hours, minutes, secondsMs] = time.split(':');
  const [seconds] = secondsMs.split(',');
  const h = parseInt(hours, 10);
  const m = parseInt(minutes, 10);
  const s = parseInt(seconds, 10);

  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  return `${m}:${s.toString().padStart(2, '0')}`;
};
