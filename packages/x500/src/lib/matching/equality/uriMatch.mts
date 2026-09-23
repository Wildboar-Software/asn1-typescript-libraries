import type { CharacterStringInput } from "../readValue.mjs";
import { readUTF8String } from "../readValue.mjs";
import { URL, domainToASCII } from "node:url";
import { normalize } from "node:path/posix";
import { urlSchemeDefaultPort } from "./urlSchemeDefaultPort.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.1 `uriMatch`.
 *
 * Equality of URI strings after RFC 3986 clause 6.2.2
 * normalization: percent-encoding case and unreserved decoding,
 * path-segment `.` / `..` collapse, and scheme-based removal of
 * empty or default components (including default ports).
 *
 * Each argument may be an `ASN1Element` or a string.
 */
export
function uriMatch (
    assertion: CharacterStringInput,
    value: CharacterStringInput,
): boolean {
    return uriMatchTyped(readUTF8String(assertion), readUTF8String(value));
}

/**
 * `uriMatch` on two URI strings.
 *
 * @param assertion Presented URI.
 * @param value Stored URI.
 * @returns `true` when the normalized URIs are equal.
 */
export
function uriMatchTyped (assertion: string, value: string): boolean {
    const a: URL = new URL(assertion.trim().toLowerCase());
    const v: URL = new URL(value.trim().toLowerCase());
    const protocol = a.protocol.toLowerCase();
    if (protocol !== v.protocol.toLowerCase()) {
        return false;
    }
    const hosta = domainToASCII(a.hostname).toLowerCase();
    const hostv = domainToASCII(v.hostname).toLowerCase();
    const porta = a.port || urlSchemeDefaultPort.get(protocol);
    const portv = v.port || urlSchemeDefaultPort.get(protocol);
    return (
        (a.protocol.toLowerCase() === v.protocol.toLowerCase())
        && (a.username === v.username)
        && (a.password === v.password)
        && (hosta === hostv)
        && (porta === portv)
        && (normalize(a.pathname) === normalize(v.pathname))
        && (a.search === v.search)
        && (a.hash === v.hash)
    );
}

export default uriMatch;
