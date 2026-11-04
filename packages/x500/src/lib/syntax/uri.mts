import { isAlpha, isAlphaNum, isDigit, isHex } from "./chars.mjs";
import { isIpv6Address, isIpvFuture } from "./ip.mjs";

/**
 * Absolute URI produced by the RFC 3986 parser. `scheme` keeps the
 * caller's case. `path` is the hier-part path, empty when absent.
 */
interface AbsoluteUri {
    scheme: string;
    hasAuthority: boolean;
    path: string;
}

/**
 * Rec. ITU-T X.520 (2019), clause 6.2.12 `URI`.
 *
 * An absolute URI as in IETF RFC 3986: a scheme, then a hier-part,
 * then an optional query and fragment. Relative references are not
 * URIs. Non-ASCII characters are accepted where RFC 3987 allows
 * `ucschar`, because the Directory syntax is `UTF8String`.
 *
 * @returns `true` when `value` is an absolute URI.
 */
export
function validateUri (value: string): boolean {
    return parseAbsoluteUri(value) !== undefined;
}

/**
 * Rec. ITU-T X.520 (2019), clause 6.2.14 `url`, a subtype of `uri`.
 *
 * An absolute URI that locates a resource: it is not a URN, and it
 * has an authority (`//...`) or a non-empty path. `mailto:user@host`
 * and `https://example.com` are URLs; `urn:ietf:rfc:2648` and a bare
 * `http:` are not.
 *
 * @returns `true` when `value` is a URL.
 */
export
function validateUrl (value: string): boolean {
    const uri: AbsoluteUri | undefined = parseAbsoluteUri(value);
    if (uri === undefined || uri.scheme.toLowerCase() === "urn") {
        return false;
    }
    return uri.hasAuthority || uri.path.length > 0;
}

/**
 * Rec. ITU-T X.520 (2019), clause 6.2.13 `urn`.
 *
 * A URN as in IETF RFC 3406, which uses the syntax of IETF RFC 2141:
 *
 * `urn:<NID>:<NSS>`
 *
 * The scheme is case-insensitive. NID is 1 to 32 characters, starting
 * with an alphanumeric, continuing with alphanumerics or `-`. The NID
 * `urn` is rejected (IETF RFC 8141 reserves it). NSS is at least one
 * RFC 2141 URN character; `%` introduces two hex digits. The IANA
 * namespace registry is not consulted.
 *
 * @returns `true` when `value` is a URN.
 */
export
function validateUrn (value: string): boolean {
    if (value.length < 6 || value.slice(0, 4).toLowerCase() !== "urn:") {
        return false;
    }
    const rest: string = value.slice(4);
    const colon: number = rest.indexOf(":");
    if (colon <= 0) {
        return false;
    }
    const nid: string = rest.slice(0, colon);
    const nss: string = rest.slice(colon + 1);
    return isNid(nid) && isNss(nss);
}

function isNid (nid: string): boolean {
    if (nid.length < 1 || nid.length > 32 || nid.toLowerCase() === "urn") {
        return false;
    }
    if (!isAlphaNum(nid.charCodeAt(0))) {
        return false;
    }
    for (let i = 1; i < nid.length; i++) {
        const code: number = nid.charCodeAt(i);
        if (!isAlphaNum(code) && code !== 0x2D) {
            return false;
        }
    }
    return true;
}

function isUrnChar (code: number): boolean {
    if (isAlphaNum(code)) {
        return true;
    }
    // RFC 2141 <other> and <reserved> other than "%", which is handled
    // as a percent-encoded octet.
    return code === 0x28 || code === 0x29 || code === 0x2B || code === 0x2C
        || code === 0x2D || code === 0x2E || code === 0x3A || code === 0x3D
        || code === 0x40 || code === 0x3B || code === 0x24 || code === 0x5F
        || code === 0x21 || code === 0x2A || code === 0x27
        || code === 0x2F || code === 0x3F || code === 0x23;
}

function isNss (nss: string): boolean {
    if (nss.length === 0) {
        return false;
    }
    for (let i = 0; i < nss.length; i++) {
        const code: number = nss.charCodeAt(i);
        if (code === 0x25) {
            if (
                i + 2 >= nss.length
                || !isHex(nss.charCodeAt(i + 1))
                || !isHex(nss.charCodeAt(i + 2))
            ) {
                return false;
            }
            i += 2;
            continue;
        }
        if (!isUrnChar(code)) {
            return false;
        }
    }
    return true;
}

/**
 * RFC 3987 `ucschar`, the non-ASCII characters an IRI may carry in
 * place of `unreserved`.
 */
function isUcschar (code: number): boolean {
    return (code >= 0xA0 && code <= 0xD7FF)
        || (code >= 0xF900 && code <= 0xFDCF)
        || (code >= 0xFDF0 && code <= 0xFFEF)
        || (code >= 0x10000 && code <= 0x1FFFD)
        || (code >= 0x20000 && code <= 0x2FFFD)
        || (code >= 0x30000 && code <= 0x3FFFD)
        || (code >= 0x40000 && code <= 0x4FFFD)
        || (code >= 0x50000 && code <= 0x5FFFD)
        || (code >= 0x60000 && code <= 0x6FFFD)
        || (code >= 0x70000 && code <= 0x7FFFD)
        || (code >= 0x80000 && code <= 0x8FFFD)
        || (code >= 0x90000 && code <= 0x9FFFD)
        || (code >= 0xA0000 && code <= 0xAFFFD)
        || (code >= 0xB0000 && code <= 0xBFFFD)
        || (code >= 0xC0000 && code <= 0xCFFFD)
        || (code >= 0xD0000 && code <= 0xDFFFD)
        || (code >= 0xE1000 && code <= 0xEFFFD);
}

function isUnreserved (code: number): boolean {
    return isAlphaNum(code)
        || code === 0x2D
        || code === 0x2E
        || code === 0x5F
        || code === 0x7E
        || isUcschar(code);
}

function isSubDelim (code: number): boolean {
    return code === 0x21 || code === 0x24 || code === 0x26 || code === 0x27
        || code === 0x28 || code === 0x29 || code === 0x2A || code === 0x2B
        || code === 0x2C || code === 0x3B || code === 0x3D;
}

/**
 * Consume one `pchar` (unreserved / pct-encoded / sub-delims / ":" / "@").
 * Returns the index after it, or -1.
 */
function skipPchar (value: string, index: number): number {
    const code: number | undefined = value.codePointAt(index);
    if (code === undefined) {
        return -1;
    }
    if (code === 0x25) {
        if (
            index + 2 >= value.length
            || !isHex(value.charCodeAt(index + 1))
            || !isHex(value.charCodeAt(index + 2))
        ) {
            return -1;
        }
        return index + 3;
    }
    if (isUnreserved(code) || isSubDelim(code) || code === 0x3A || code === 0x40) {
        return index + (code > 0xFFFF ? 2 : 1);
    }
    return -1;
}

function isPcharRun (value: string, allowEmpty: boolean): boolean {
    if (value.length === 0) {
        return allowEmpty;
    }
    let i: number = 0;
    while (i < value.length) {
        const next: number = skipPchar(value, i);
        if (next < 0) {
            return false;
        }
        i = next;
    }
    return true;
}

function isUserinfo (value: string): boolean {
    let i: number = 0;
    while (i < value.length) {
        const code: number = value.codePointAt(i)!;
        if (code === 0x3A) {
            i++;
            continue;
        }
        if (code === 0x40) {
            return false;
        }
        const next: number = skipPchar(value, i);
        if (next < 0) {
            return false;
        }
        i = next;
    }
    return true;
}

function isRegName (value: string): boolean {
    let i: number = 0;
    while (i < value.length) {
        const code: number = value.codePointAt(i)!;
        if (code === 0x3A || code === 0x40 || code === 0x2F || code === 0x5B || code === 0x5D) {
            return false;
        }
        const next: number = skipPchar(value, i);
        if (next < 0) {
            return false;
        }
        i = next;
    }
    return true;
}

function isPortTail (tail: string): boolean {
    if (tail === "") {
        return true;
    }
    if (tail.charCodeAt(0) !== 0x3A) {
        return false;
    }
    for (let i = 1; i < tail.length; i++) {
        if (!isDigit(tail.charCodeAt(i))) {
            return false;
        }
    }
    return true;
}

function isHostAndPort (value: string): boolean {
    if (value.startsWith("[")) {
        const end: number = value.indexOf("]");
        if (end < 0) {
            return false;
        }
        const inner: string = value.slice(1, end);
        if (!isIpv6Address(inner) && !isIpvFuture(inner)) {
            return false;
        }
        return isPortTail(value.slice(end + 1));
    }
    const colon: number = value.indexOf(":");
    if (colon < 0) {
        return isRegName(value);
    }
    return isRegName(value.slice(0, colon)) && isPortTail(value.slice(colon));
}

function isQueryOrFragment (value: string): boolean {
    let i: number = 0;
    while (i < value.length) {
        const code: number = value.codePointAt(i)!;
        if (code === 0x2F || code === 0x3F) {
            i++;
            continue;
        }
        const next: number = skipPchar(value, i);
        if (next < 0) {
            return false;
        }
        i = next;
    }
    return true;
}

function isPathAbempty (path: string): boolean {
    if (path === "") {
        return true;
    }
    if (!path.startsWith("/")) {
        return false;
    }
    const segments: string[] = path.slice(1).split("/");
    return segments.every((segment) => isPcharRun(segment, true));
}

function isPathAbsolute (path: string): boolean {
    if (!path.startsWith("/") || path.startsWith("//")) {
        return false;
    }
    if (path === "/") {
        return true;
    }
    const segments: string[] = path.slice(1).split("/");
    if (!isPcharRun(segments[0], false)) {
        return false;
    }
    for (let i = 1; i < segments.length; i++) {
        if (!isPcharRun(segments[i], true)) {
            return false;
        }
    }
    return true;
}

function isPathRootless (path: string): boolean {
    if (path.length === 0 || path.startsWith("/")) {
        return false;
    }
    const segments: string[] = path.split("/");
    if (!isPcharRun(segments[0], false)) {
        return false;
    }
    for (let i = 1; i < segments.length; i++) {
        if (!isPcharRun(segments[i], true)) {
            return false;
        }
    }
    return true;
}

function parseAbsoluteUri (value: string): AbsoluteUri | undefined {
    if (value.length === 0 || !isAlpha(value.charCodeAt(0))) {
        return undefined;
    }
    let schemeEnd: number = 1;
    while (schemeEnd < value.length) {
        const code: number = value.charCodeAt(schemeEnd);
        if (isAlphaNum(code) || code === 0x2B || code === 0x2D || code === 0x2E) {
            schemeEnd++;
            continue;
        }
        break;
    }
    if (schemeEnd >= value.length || value.charCodeAt(schemeEnd) !== 0x3A) {
        return undefined;
    }
    const scheme: string = value.slice(0, schemeEnd);
    let rest: string = value.slice(schemeEnd + 1);
    let fragment: string | undefined;
    const hash: number = rest.indexOf("#");
    if (hash >= 0) {
        fragment = rest.slice(hash + 1);
        rest = rest.slice(0, hash);
        if (!isQueryOrFragment(fragment)) {
            return undefined;
        }
    }
    let query: string | undefined;
    const question: number = rest.indexOf("?");
    if (question >= 0) {
        query = rest.slice(question + 1);
        rest = rest.slice(0, question);
        if (!isQueryOrFragment(query)) {
            return undefined;
        }
    }
    if (rest.startsWith("//")) {
        const after: string = rest.slice(2);
        const slash: number = after.indexOf("/");
        const authority: string = slash < 0 ? after : after.slice(0, slash);
        const path: string = slash < 0 ? "" : after.slice(slash);
        const at: number = authority.indexOf("@");
        const hostport: string = at < 0 ? authority : authority.slice(at + 1);
        if (at >= 0 && !isUserinfo(authority.slice(0, at))) {
            return undefined;
        }
        if (!isHostAndPort(hostport) || !isPathAbempty(path)) {
            return undefined;
        }
        return { scheme, hasAuthority: true, path };
    }
    if (rest === "") {
        return { scheme, hasAuthority: false, path: "" };
    }
    if (rest.startsWith("/")) {
        if (!isPathAbsolute(rest)) {
            return undefined;
        }
        return { scheme, hasAuthority: false, path: rest };
    }
    if (!isPathRootless(rest)) {
        return undefined;
    }
    return { scheme, hasAuthority: false, path: rest };
}
