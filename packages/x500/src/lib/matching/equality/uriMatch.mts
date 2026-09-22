import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { URL, domainToASCII } from "node:url";
import { normalize } from "node:path/posix";
import { urlSchemeDefaultPort } from "./urlSchemeDefaultPort.mjs";

function parseUri (raw: string): URL | undefined {
    try {
        return new URL(raw.trim());
    } catch {
        return undefined;
    }
}

function portOf (url: URL, protocol: string): string {
    if (url.port) {
        return url.port;
    }
    const defaultPort = urlSchemeDefaultPort.get(protocol);
    return (defaultPort === undefined) ? "" : String(defaultPort);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.1 `uriMatch`.
 *
 * Equality of URI strings after RFC 3986 clause 6.2.2
 * normalization: percent-encoding case and unreserved decoding,
 * path-segment `.` / `..` collapse, and scheme-based removal of
 * empty or default components (including default ports). Scheme and
 * host are compared case-insensitively; path, query, and fragment
 * remain case-sensitive. Invalid URIs are unequal rather than thrown.
 */
export
const uriMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    let aRaw: string;
    let vRaw: string;
    try {
        aRaw = assertion.utf8String;
        vRaw = value.utf8String;
    } catch {
        return false;
    }
    const a = parseUri(aRaw);
    const v = parseUri(vRaw);
    if (!a || !v) {
        return false;
    }
    const protocol = a.protocol.toLowerCase();
    if (protocol !== v.protocol.toLowerCase()) {
        return false;
    }
    let hosta: string;
    let hostv: string;
    try {
        hosta = domainToASCII(a.hostname).toLowerCase();
        hostv = domainToASCII(v.hostname).toLowerCase();
    } catch {
        return false;
    }
    return (
        (a.username === v.username)
        && (a.password === v.password)
        && (hosta === hostv)
        && (portOf(a, protocol) === portOf(v, protocol))
        && (normalize(a.pathname) === normalize(v.pathname))
        && (a.search === v.search)
        && (a.hash === v.hash)
    );
}

export default uriMatch;
