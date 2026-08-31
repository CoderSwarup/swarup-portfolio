import { __CONFIG__ } from '@/config';
import { logger } from '@/utils';
import Script from 'next/script';

export default function UmamiAnalytics() {
    const umamiSrc = __CONFIG__.UMAMI.SRC;
    const umamiId = __CONFIG__.UMAMI.ID;

    if (!umamiSrc || !umamiId) {
        logger.error('Umami Analytics is not configured.');
        return null;
    }

    return (
        <Script
            id="umami-analytics"
            src={umamiSrc}
            data-website-id={umamiId}
            strategy="afterInteractive"
            async
        />
    );
}