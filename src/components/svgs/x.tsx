import * as React from 'react';

export default function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...props}>
            <path
                fill="currentColor"
                d="M3 2h5.05l4.4 6.34L16.78 2H21l-6.93 8.64L21 22h-5.05l-4.69-6.67L7.22 22H3l7.05-8.79Z"
            />
        </svg>
    );
}
