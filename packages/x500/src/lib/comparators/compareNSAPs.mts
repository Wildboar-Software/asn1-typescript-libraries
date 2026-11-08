import type { OCTET_STRING } from "@wildboar/asn1";
import { ipv4FromNSAP } from "../distributed/ipv4.mjs";
import { IPV4_AFI_IDI } from "../distributed/IPV4_AFI_IDI.mjs";
import { uriFromNSAP } from "../distributed/uri.mjs";
import { bytesEqual, stringsEqual } from "../matching/constantTime.mjs";

// Polyfill for Node.js so we can use fewer Node.js-specific APIs.
function domainToASCII(domain: string): string {
    return new URL(`http://${domain}`).hostname;
}

/**
 * DSP service type for ITOT. An omitted TCP port on this type means 102.
 * No other IPv4 NSAP service type has a default port.
 */
const ITOT_SERVICE_TYPE: number = 0x03;

function compareHostnames(a: string, b: string, constantTime: boolean | number = 0): boolean {
    return stringsEqual(
        domainToASCII(a).toLowerCase(),
        domainToASCII(b).toLowerCase(),
        constantTime,
    );
}

const defaultPorts: Map<string, string> = new Map([
    [ "idm:", "109" ],
    [ "ldap:", "389" ],
    [ "ldaps:", "636" ],
    [ "itot:", "102" ],
]);

/**
 * Scheme of an absolute URI, lowercased, or `undefined` when `uri` has none.
 * Used to reject different URL schemes before parsing or IDNA conversion.
 */
function uriScheme (uri: string): string | undefined {
    const match = /^([A-Za-z][A-Za-z0-9+.-]*):/.exec(uri);
    return match?.[1].toLowerCase();
}

function hasIpv4Prefix (nsap: OCTET_STRING): boolean {
    if (nsap.length < IPV4_AFI_IDI.length) {
        return false;
    }
    for (let i = 0; i < IPV4_AFI_IDI.length; i++) {
        if (nsap[i] !== IPV4_AFI_IDI[i]) {
            return false;
        }
    }
    return true;
}

/**
 * @summary Compare two X.213 NSAP values
 * @description
 *
 * This normalizes NSAPs for comparison, such as by adding default port numbers
 * if they are missing and comparing DNS hostnames after converting to ASCII and
 * lowercasing.
 *
 * When `constantTime` is not set, a URL mismatch returns at the first
 * differing component. Constant-time comparison still evaluates every
 * URL component.
 *
 * @param a One value
 * @param b The other
 * @param constantTime Whether to compare in constant time
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareNSAP (
    a: OCTET_STRING,
    b: OCTET_STRING,
    constantTime: boolean | number = 0,
): boolean {
    if (a[0] !== b[0]) {
        return false; // Completely different formats.
    }
    if (a[0] === 0xFF) { // It is a URL.
        try {
            const [ , uria ] = uriFromNSAP(a);
            const [ , urib ] = uriFromNSAP(b);
            if (!constantTime) {
                if (uriScheme(uria) !== uriScheme(urib)) {
                    return false;
                }
            }
            // Only scheme and hostname are case-insensitive. A whole-URI
            // case-folded shortcut would also case-fold usernames and passwords.
            const ua = URL.parse(uria);
            const ub = URL.parse(urib);
            if (!ua || !ub) {
                return false;
            }
            const protocolA = ua.protocol.toLowerCase();
            const protocolB = ub.protocol.toLowerCase();
            if (!constantTime) {
                if (
                    protocolA !== protocolB
                    || ua.username !== ub.username
                    || ua.password !== ub.password
                    || !compareHostnames(ua.hostname, ub.hostname)
                    // The path or query params don't matter for a transport address
                    // and they shouldn't even be present at all.
                    // I guess this could change if websockets are supported.
                ) {
                    return false;
                }
            } else {
                const protocolMatch = stringsEqual(protocolA, protocolB, constantTime);
                const hostMatch = compareHostnames(ua.hostname, ub.hostname, constantTime);
                const userMatch = stringsEqual(ua.username, ub.username, constantTime);
                const passMatch = stringsEqual(ua.password, ub.password, constantTime);
                if (!protocolMatch || !hostMatch || !userMatch || !passMatch) {
                    return false;
                }
            }
            const porta = ua.port || defaultPorts.get(ua.protocol);
            const portb = ub.port || defaultPorts.get(ub.protocol);
            return (porta === portb);
        } catch {
            return false;
        }
    }
    // Otherwise, the only other recognized format is the IP address.
    if (!hasIpv4Prefix(a) || !hasIpv4Prefix(b)) {
        // If it is neither an IP address, nor a URL, compare the octets directly.
        return bytesEqual(a, b, constantTime);
    }
    let [ typea, ipv4a, porta ] = ipv4FromNSAP(a);
    let [ typeb, ipv4b, portb ] = ipv4FromNSAP(b);
    const ipMatch = bytesEqual(ipv4a, ipv4b, constantTime);
    if (typea !== typeb || !ipMatch) {
        return false;
    }

    // Only the IPv4 address format for ITOT may have a missing TCP port
    // which defaults to 102.
    if (typea === ITOT_SERVICE_TYPE && !porta) {
        porta = 102;
    }
    if (typeb === ITOT_SERVICE_TYPE && !portb) {
        portb = 102;
    }
    return (porta === portb);
}

export default compareNSAP;
