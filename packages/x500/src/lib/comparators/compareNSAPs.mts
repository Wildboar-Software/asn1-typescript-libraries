import type { OCTET_STRING } from "@wildboar/asn1";
import { ipv4FromNSAP } from "../distributed/ipv4.mjs";
import { IPV4_AFI_IDI } from "../distributed/IPV4_AFI_IDI.mjs";
import { uriFromNSAP } from "../distributed/uri.mjs";
import { bytesEqual, stringsEqual } from "../matching/constantTime.mjs";
import { URL, domainToASCII } from "node:url";

/**
 * DSP service type for ITOT. An omitted TCP port on this type means 102.
 * No other IPv4 NSAP service type has a default port.
 */
const ITOT_SERVICE_TYPE: number = 0x03;

/** Octet index of the service type, immediately after the AFI/IDI. */
const SERVICE_TYPE_INDEX: number = IPV4_AFI_IDI.length;

/** First octet of the six-octet BCD IPv4 address in the DSP. */
const IPV4_DSP_START: number = SERVICE_TYPE_INDEX + 1;

/** Index just past the IPv4 DSP. Also the minimum length `ipv4FromNSAP` accepts. */
const IPV4_DSP_END: number = IPV4_DSP_START + 6;

/** Length of an IPv4 NSAP that includes the three-octet TCP/UDP port. */
const IPV4_WITH_PORT_LENGTH: number = IPV4_DSP_END + 3;

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
 * Every nibble in `nsap[from..to)` is a decimal digit. The IPv4 DSP is then
 * a unique encoding, so differing octets are a different address.
 */
function nibblesAreDecimal (nsap: OCTET_STRING, from: number, to: number): boolean {
    for (let i = from; i < to; i++) {
        if ((nsap[i] >>> 4) > 9 || (nsap[i] & 0x0F) > 9) {
            return false;
        }
    }
    return true;
}

/**
 * `true` when `a` and `b` are IPv4 NSAPs that cannot match, without
 * decoding BCD. `false` means the caller still has to decode.
 */
function ipv4FastMismatch (a: OCTET_STRING, b: OCTET_STRING): boolean {
    if (a.length < IPV4_DSP_END || b.length < IPV4_DSP_END) {
        return false;
    }
    if (a[SERVICE_TYPE_INDEX] !== b[SERVICE_TYPE_INDEX]) {
        return true;
    }
    const aHasPort = a.length >= IPV4_WITH_PORT_LENGTH;
    const bHasPort = b.length >= IPV4_WITH_PORT_LENGTH;
    if (a[SERVICE_TYPE_INDEX] !== ITOT_SERVICE_TYPE && aHasPort !== bHasPort) {
        return true;
    }
    for (let i = IPV4_DSP_START; i < IPV4_DSP_END; i++) {
        if (a[i] !== b[i]) {
            return nibblesAreDecimal(a, IPV4_DSP_START, IPV4_DSP_END)
                && nibblesAreDecimal(b, IPV4_DSP_START, IPV4_DSP_END);
        }
    }
    return false;
}

/**
 * @summary Compare two X.213 NSAP values
 * @description
 *
 * This normalizes NSAPs for comparison, such as by adding default port numbers
 * if they are missing and comparing DNS hostnames after converting to ASCII and
 * lowercasing.
 *
 * When `constantTime` is not set, the first proven mismatch returns
 * immediately. Constant-time comparison still evaluates every URL component
 * and decodes both IPv4 addresses.
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
                if (uria.toLowerCase() === urib.toLowerCase()) {
                    return true;
                }
            }
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
    if (!constantTime && ipv4FastMismatch(a, b)) {
        return false;
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
