/**
 * @summary Case handling for the IA5 alternatives of `GeneralName`
 * @description
 *
 * RFC 5280 compares `rfc822Name` with an exact local-part and a
 * case-insensitive domain, `dNSName` case-insensitively, and a URI's scheme
 * and host case-insensitively (section 7.4) with the rest exact. These values
 * are IA5, so `toLowerCase` folds only `A`-`Z` and does not change the length.
 *
 * `bench/compareGeneralName.mjs` timed an index scan against `toLowerCase`
 * and `slice`. `toLowerCase` won on every case, including mismatches, because
 * the strings are short and the native comparison is faster than a JavaScript
 * loop. Equal `rfc822Name`s were about 31M ops/sec versus 18M for the scan;
 * equal DNS names were about 262M versus 19M. Compare still beats building a
 * key (an email compare was about 13M ops/sec, and building both keys about
 * 5.5M).
 *
 * @internal
 */

const SLASH: number = "/".charCodeAt(0);
const QUESTION_MARK: number = "?".charCodeAt(0);
const HASH: number = "#".charCodeAt(0);
const AT: number = "@".charCodeAt(0);
const OPEN_BRACKET: number = "[".charCodeAt(0);
const COLON: number = ":".charCodeAt(0);

/**
 * @summary Host span of a URI, as character indexes into `s`
 * @description
 *
 * The host is inside the authority (`//...`), after any `userinfo@`, and
 * before a port. An IPv6 host includes its brackets. Returns `null` when
 * there is no authority. `afterScheme` is the index just past the scheme's
 * colon.
 *
 * @internal
 */
export function hostSpan(
    s: string,
    afterScheme: number,
): { start: number; end: number } | null {
    if (s.charCodeAt(afterScheme) !== SLASH || s.charCodeAt(afterScheme + 1) !== SLASH) {
        return null;
    }
    const authStart: number = afterScheme + 2;
    let authEnd: number = authStart;
    while (authEnd < s.length) {
        const c: number = s.charCodeAt(authEnd);
        if (c === SLASH || c === QUESTION_MARK || c === HASH) {
            break;
        }
        authEnd += 1;
    }
    let hostStart: number = authStart;
    for (let i: number = authStart; i < authEnd; i++) {
        if (s.charCodeAt(i) === AT) {
            hostStart = i + 1;
        }
    }
    let hostEnd: number = authEnd;
    if (s.charCodeAt(hostStart) === OPEN_BRACKET) {
        const close: number = s.indexOf("]", hostStart + 1);
        if (close < 0 || close >= authEnd) {
            return null;
        }
        hostEnd = close + 1;
    } else {
        for (let i: number = hostStart; i < authEnd; i++) {
            if (s.charCodeAt(i) === COLON) {
                hostEnd = i;
                break;
            }
        }
    }
    return { start: hostStart, end: hostEnd };
}

/** @internal */
export function rfc822Equal(a: string, b: string): boolean {
    if (a.length !== b.length) {
        return false;
    }
    const at: number = a.lastIndexOf("@");
    if (b.lastIndexOf("@") !== at) {
        return false;
    }
    if (at < 0) {
        return a === b;
    }
    return a.slice(0, at) === b.slice(0, at)
        && a.slice(at + 1).toLowerCase() === b.slice(at + 1).toLowerCase();
}

/** @internal */
export function dnsEqual(a: string, b: string): boolean {
    return a.length === b.length && a.toLowerCase() === b.toLowerCase();
}

/** @internal */
export function uriEqual(a: string, b: string): boolean {
    if (a.length !== b.length) {
        return false;
    }
    const schemeEnd: number = a.indexOf(":");
    if (schemeEnd < 0 || b.indexOf(":") !== schemeEnd) {
        return a === b;
    }
    if (a.slice(0, schemeEnd).toLowerCase() !== b.slice(0, schemeEnd).toLowerCase()) {
        return false;
    }
    const hostA = hostSpan(a, schemeEnd + 1);
    const hostB = hostSpan(b, schemeEnd + 1);
    if (!hostA || !hostB || hostA.start !== hostB.start || hostA.end !== hostB.end) {
        if (!hostA && !hostB) {
            return a.slice(schemeEnd) === b.slice(schemeEnd);
        }
        return false;
    }
    return a.slice(schemeEnd, hostA.start) === b.slice(schemeEnd, hostA.start)
        && a.slice(hostA.start, hostA.end).toLowerCase() === b.slice(hostB.start, hostB.end).toLowerCase()
        && a.slice(hostA.end) === b.slice(hostB.end);
}

/** @internal */
export function rfc822Key(s: string): string {
    const at: number = s.lastIndexOf("@");
    if (at < 0) {
        return s;
    }
    return s.slice(0, at + 1) + s.slice(at + 1).toLowerCase();
}

/** @internal */
export function dnsKey(s: string): string {
    return s.toLowerCase();
}

/** @internal */
export function uriKey(s: string): string {
    const schemeEnd: number = s.indexOf(":");
    if (schemeEnd < 0) {
        return s;
    }
    const host = hostSpan(s, schemeEnd + 1);
    const scheme: string = s.slice(0, schemeEnd).toLowerCase();
    if (!host) {
        return scheme + s.slice(schemeEnd);
    }
    return scheme
        + s.slice(schemeEnd, host.start)
        + s.slice(host.start, host.end).toLowerCase()
        + s.slice(host.end);
}
