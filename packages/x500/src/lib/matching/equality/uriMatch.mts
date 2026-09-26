import type { CharacterStringInput } from "../readValue.mjs";
import { readUTF8String } from "../readValue.mjs";
import { urlSchemeDefaultPort } from "./urlSchemeDefaultPort.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.1 `uriMatch`.
 *
 * Equality of two `URI` (`UTF8String`) values after IETF RFC 3986
 * clauses 6.2.2 and 6.2.3:
 *
 * - Hex digits A-F in a percent-encoding triplet are uppercase.
 *   Scheme and host are case-insensitive. Path, query, and
 *   fragment are case-sensitive.
 * - A percent-encoded octet for an unreserved character
 *   (`ALPHA / DIGIT / "-" / "." / "_" / "~"`) is decoded. Other
 *   percent-encoded octets are left encoded.
 * - Complete path segments `"."` and `".."` are removed with the
 *   two-buffer algorithm in RFC 3986 clause 5.2.4.
 * - An empty userinfo, port, query, or fragment is omitted, as
 *   is a port equal to the scheme default. An empty path in a
 *   URI that has an authority becomes `"/"`. IPv6 literals are
 *   expanded to eight hextets. A `[` that opens a host and is
 *   never closed is not an IP-literal or a reg-name, and
 *   normalization throws.
 *
 * Normalization is of the URI reference itself, so `urn:`,
 * empty-host forms such as `ldap:///`, and relative references
 * are compared the same way.
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
    return normalizeUri(assertion) === normalizeUri(value);
}

export default uriMatch;

function isUnreserved (code: number): boolean {
    return (code >= 0x41 && code <= 0x5A)
        || (code >= 0x61 && code <= 0x7A)
        || (code >= 0x30 && code <= 0x39)
        || code === 0x2D
        || code === 0x2E
        || code === 0x5F
        || code === 0x7E;
}

function isHexDigit (character: string): boolean {
    return /^[0-9A-Fa-f]$/.test(character);
}

/**
 * RFC 3986 clauses 6.2.2.1 and 6.2.2.2: uppercase hex digits in
 * percent-encoding triplets, and decode unreserved octets.
 */
function normalizePercentEncoding (input: string): string {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        if (
            input[i] === "%"
            && i + 2 < input.length
            && isHexDigit(input[i + 1])
            && isHexDigit(input[i + 2])
        ) {
            const hex = input.slice(i + 1, i + 3).toUpperCase();
            const code = Number.parseInt(hex, 16);
            if (isUnreserved(code)) {
                output += String.fromCharCode(code);
            } else {
                output += "%" + hex;
            }
            i += 2;
            continue;
        }
        output += input[i];
    }
    return output;
}

function lowercasePreservingPercent (input: string): string {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        if (
            input[i] === "%"
            && i + 2 < input.length
            && isHexDigit(input[i + 1])
            && isHexDigit(input[i + 2])
        ) {
            output += "%" + input.slice(i + 1, i + 3).toUpperCase();
            i += 2;
            continue;
        }
        const codePoint = input.codePointAt(i)!;
        output += String.fromCodePoint(codePoint).toLowerCase();
        if (codePoint > 0xFFFF) {
            i++;
        }
    }
    return output;
}

function removeLastSegment (output: string): string {
    const slash = output.lastIndexOf("/");
    return slash < 0 ? "" : output.slice(0, slash);
}

/**
 * RFC 3986 clause 5.2.4 `remove_dot_segments`, as required by
 * X.520 clause 8.9.1 path-segment normalization.
 */
function removeDotSegments (path: string): string {
    let input = path;
    let output = "";
    while (input.length > 0) {
        if (input.startsWith("../")) {
            input = input.slice(3);
        } else if (input.startsWith("./")) {
            input = input.slice(2);
        } else if (input.startsWith("/./")) {
            input = "/" + input.slice(3);
        } else if (input === "/.") {
            input = "/";
        } else if (input.startsWith("/../")) {
            input = "/" + input.slice(4);
            output = removeLastSegment(output);
        } else if (input === "/..") {
            input = "/";
            output = removeLastSegment(output);
        } else if (input === "." || input === "..") {
            input = "";
        } else {
            const start = input.startsWith("/") ? 1 : 0;
            const next = input.indexOf("/", start);
            const end = next < 0 ? input.length : next;
            output += input.slice(0, end);
            input = input.slice(end);
        }
    }
    return output;
}

function parseIpv6Side (side: string): string[] | undefined {
    if (side === "") {
        return [];
    }
    const groups: string[] = [];
    for (const part of side.split(":")) {
        if (!/^[0-9a-f]{1,4}$/.test(part)) {
            return undefined;
        }
        groups.push(Number.parseInt(part, 16).toString(16));
    }
    return groups;
}

/**
 * Expand `::` to eight lowercase hextets so a compressed literal
 * matches the same address written in full.
 */
function expandIpv6 (address: string): string | undefined {
    const halves = address.toLowerCase().split("::");
    if (halves.length > 2) {
        return undefined;
    }
    const left = parseIpv6Side(halves[0]);
    if (left === undefined) {
        return undefined;
    }
    if (halves.length === 1) {
        return left.length === 8 ? left.join(":") : undefined;
    }
    const right = parseIpv6Side(halves[1]);
    if (right === undefined) {
        return undefined;
    }
    const missing = 8 - left.length - right.length;
    if (missing < 1) {
        return undefined;
    }
    return left.concat(Array(missing).fill("0"), right).join(":");
}

function normalizeIpLiteral (host: string): string {
    const inner = host.slice(1, -1);
    const expanded = expandIpv6(inner);
    if (expanded === undefined) {
        return "[" + inner.toLowerCase() + "]";
    }
    return "[" + expanded + "]";
}

function normalizeHost (host: string): string {
    if (host.startsWith("[") && host.endsWith("]")) {
        return normalizeIpLiteral(host);
    }
    return lowercasePreservingPercent(normalizePercentEncoding(host));
}

interface AuthorityParts {
    userinfo?: string;
    host: string;
    port?: string;
}

function parseAuthority (authority: string): AuthorityParts {
    let userinfo: string | undefined;
    let rest = authority;
    const at = rest.indexOf("@");
    if (at !== -1) {
        userinfo = rest.slice(0, at);
        rest = rest.slice(at + 1);
    }
    if (rest.startsWith("[")) {
        const end = rest.indexOf("]");
        // RFC 3986 IP-literal is "[" ... "]". "[" is not a
        // reg-name character, so an unclosed bracket is not a URI.
        if (end === -1) {
            throw new Error("Unterminated IP-literal in URI host");
        }
        const host = rest.slice(0, end + 1);
        const tail = rest.slice(end + 1);
        if (tail.startsWith(":")) {
            return { userinfo, host, port: tail.slice(1) };
        }
        return { userinfo, host };
    }
    const colon = rest.indexOf(":");
    if (colon !== -1) {
        return {
            userinfo,
            host: rest.slice(0, colon),
            port: rest.slice(colon + 1),
        };
    }
    return { userinfo, host: rest };
}

interface ParsedUri {
    scheme?: string;
    hasAuthority: boolean;
    userinfo?: string;
    host: string;
    port?: string;
    path: string;
    query?: string;
    fragment?: string;
}

function parseUriReference (input: string): ParsedUri {
    let rest = input;
    let fragment: string | undefined;
    const hash = rest.indexOf("#");
    if (hash !== -1) {
        fragment = rest.slice(hash + 1);
        rest = rest.slice(0, hash);
    }
    let query: string | undefined;
    const question = rest.indexOf("?");
    if (question !== -1) {
        query = rest.slice(question + 1);
        rest = rest.slice(0, question);
    }
    let scheme: string | undefined;
    const schemeMatch = /^([A-Za-z][A-Za-z0-9+.-]*):(.*)$/s.exec(rest);
    if (schemeMatch) {
        scheme = schemeMatch[1];
        rest = schemeMatch[2];
    }
    if (rest.startsWith("//")) {
        const after = rest.slice(2);
        const slash = after.indexOf("/");
        const authority = slash < 0 ? after : after.slice(0, slash);
        const path = slash < 0 ? "" : after.slice(slash);
        return {
            scheme,
            hasAuthority: true,
            ...parseAuthority(authority),
            path,
            query,
            fragment,
        };
    }
    return {
        scheme,
        hasAuthority: false,
        host: "",
        path: rest,
        query,
        fragment,
    };
}

function canonicalPort (
    scheme: string | undefined,
    port: string | undefined,
): string | undefined {
    if (port === undefined || port === "") {
        return undefined;
    }
    if (scheme !== undefined && /^[0-9]+$/.test(port)) {
        const stripped = port.replace(/^0+/, "") || "0";
        const defaultPort = urlSchemeDefaultPort.get(scheme + ":");
        if (defaultPort !== undefined && stripped === String(defaultPort)) {
            return undefined;
        }
    }
    return port;
}

function normalizeUri (input: string): string {
    const parsed = parseUriReference(input);
    const scheme = parsed.scheme?.toLowerCase();
    let output = "";
    if (scheme !== undefined) {
        output += scheme + ":";
    }
    if (parsed.hasAuthority) {
        output += "//";
        if (parsed.userinfo !== undefined) {
            const userinfo = normalizePercentEncoding(parsed.userinfo);
            if (userinfo !== "") {
                output += userinfo + "@";
            }
        }
        output += normalizeHost(parsed.host);
        const port = canonicalPort(scheme, parsed.port);
        if (port !== undefined) {
            output += ":" + port;
        }
    }
    let path = removeDotSegments(normalizePercentEncoding(parsed.path));
    if (parsed.hasAuthority && path === "") {
        path = "/";
    }
    output += path;
    if (parsed.query !== undefined) {
        const query = normalizePercentEncoding(parsed.query);
        if (query !== "") {
            output += "?" + query;
        }
    }
    if (parsed.fragment !== undefined) {
        const fragment = normalizePercentEncoding(parsed.fragment);
        if (fragment !== "") {
            output += "#" + fragment;
        }
    }
    return output;
}
