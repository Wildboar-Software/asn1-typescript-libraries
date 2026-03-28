import type { OCTET_STRING } from "@wildboar/asn1";
import { ipv4FromNSAP } from "../distributed/ipv4.mjs";
import { uriFromNSAP } from "../distributed/uri.mjs";
import { Buffer } from "node:buffer";
import { URL, domainToASCII } from "node:url";

const commonPrefix: number[] = [
    0x54, // The AFI
    0x00, 0x72, 0x87, 0x22, // The IDI
];

function compareHostnames(a: string, b: string): boolean {
    return (domainToASCII(a).toLowerCase() === domainToASCII(b).toLowerCase());
}

const defaultPorts: Map<string, string> = new Map([
    [ "idm:", "109" ],
    [ "ldap:", "389" ],
    [ "ldaps:", "636" ],
    [ "itot:", "102" ],
]);

/**
 * @summary Compare two X.213 NSAP values
 * @description
 *
 * This normalizes NSAPs for comparison, such as by adding default port numbers
 * if they are missing and comparing DNS hostnames after converting to ASCII and
 * lowercasing.
 *
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
            if (uria.toLowerCase() === urib.toLowerCase()) {
                return true;
            }
            const ua = URL.parse(uria);
            const ub = URL.parse(urib);
            if (!ua || !ub) {
                return false;
            }
            const protocol = ua.protocol.toLowerCase();
            if (
                (protocol !== ub.protocol.toLowerCase())
                || !compareHostnames(ua.hostname, ub.hostname)
                || (ua.username !== ub.username)
                || (ua.password !== ub.password)
                // The path or query params don't matter for a transport address
                // and they shouldn't even be present at all.
                // I guess this could change if websockets are supported.
            ) {
                return false;
            }
            const porta = ua.port || defaultPorts.get(ua.protocol);
            const portb = ub.port || defaultPorts.get(ub.protocol);
            return (porta === portb);
        } catch {
            return false;
        }
    }
    // Otherwise, the only other recognized format is the IP address.
    for (let i = 0; i < commonPrefix.length; i++) {
        if (a[i] !== commonPrefix[i]) {
            // If it is neither an IP address, nor a URL, we just do a byte-for-byte comparison.
            return !Buffer.compare(a, b);
        }
    }
    let [ typea, ipv4a, porta ] = ipv4FromNSAP(a);
    let [ typeb, ipv4b, portb ] = ipv4FromNSAP(b);
    if (typea !== typeb || Buffer.compare(ipv4a, ipv4b)) {
        return false;
    }

    // Only the IPv4 address format for ITOT may have a missing TCP port
    // which defaults to 102. 0x03 is the DSP prefix for ITOT.
    if (typea === 0x03 && !porta) {
        porta = 102;
    }
    if (typeb === 0x03 && !portb) {
        portb = 102;
    }
    return (porta === portb);
}

export default compareNSAP;
