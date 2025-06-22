import type { OCTET_STRING } from "@wildboar/asn1";
import { ipv4FromNSAP } from "../distributed/ipv4.mjs";
import { uriFromNSAP } from "../distributed/uri.mjs";

const commonPrefix: number[] = [
    0x54, // The AFI
    0x00, 0x72, 0x87, 0x22, // The IDI
];

// TODO: Add port number to IDM URL if it is not specified.
/**
 * @summary Compare two X.213 NSAP values
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareNSAP (a: OCTET_STRING, b: OCTET_STRING): boolean {
    if (a[0] !== b[0]) {
        return false; // Completely different formats.
    }
    if (a[0] === 0xFF) { // It is a URL.
        try {
            const [ , uria ] = uriFromNSAP(a);
            const [ , urib ] = uriFromNSAP(b);
            return (uria.toLowerCase() === urib.toLowerCase());
        } catch {
            return false;
        }
    }
    // Otherwise, the only other recognized format is the IP address.
    for (let i = 0; i < commonPrefix.length; i++) {
        if (a[i] !== commonPrefix[i]) {
            // If it is neither an IP address, nor a URL, we just do a byte-for-byte comparison.
            return (a.toString() === b.toString());
        }
    }
    const [ , ipv4a ] = ipv4FromNSAP(a);
    const [ , ipv4b ] = ipv4FromNSAP(b);
    const ipa: string = Array.from(ipv4a).join(".");
    const ipb: string = Array.from(ipv4b).join(".");
    return (ipa === ipb);
}

export default compareNSAP;
