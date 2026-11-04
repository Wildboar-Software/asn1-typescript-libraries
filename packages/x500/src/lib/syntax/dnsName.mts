import { domainToASCII, domainToUnicode } from "node:url";
import { isLdhCode } from "./chars.mjs";

/**
 * A domain name whose labels are LDH labels, A-labels, or U-labels.
 *
 * `wildcard` permits a single `*` as an additional leftmost label.
 * That form is allowed on `dnsName` and forbidden on the domain-part
 * of `intEmail` and on a JID domainpart.
 */
export
function validateDomainName (value: string, wildcard: boolean): boolean {
    if (value.length === 0) {
        return false;
    }
    let body: string = value;
    if (body.endsWith(".")) {
        body = body.slice(0, -1);
        if (body.length === 0 || body.endsWith(".")) {
            return false;
        }
    }
    const labels: string[] = body.split(".");
    let aceLength: number = 0;
    for (let i = 0; i < labels.length; i++) {
        const label: string = labels[i];
        if (label === "*") {
            if (!wildcard || i !== 0 || labels.length < 2) {
                return false;
            }
            aceLength += 1;
            continue;
        }
        const ace: string | undefined = aceLabel(label);
        if (ace === undefined) {
            return false;
        }
        aceLength += ace.length;
    }
    // Dots between labels. The 253-octet cap is the RFC 1035
    // presentation form of a name whose wire encoding fits in 255.
    aceLength += labels.length - 1;
    return aceLength <= 253;
}

/**
 * Rec. ITU-T X.520 (2019), clause 6.2.15 `DomainName`.
 *
 * A sequence of labels separated by dots. Each label is one of:
 *
 * - an NR-LDH label (ASCII letters, digits, and hyphen; hyphen not
 *   first or last; no `--` in the third and fourth characters;
 *   at most 63 octets; does not start with `xn--`);
 * - an A-label (`xn--` plus Punycode of a U-label, at most 63 octets);
 * - a U-label in NFC that converts to such an A-label.
 *
 * One trailing dot, denoting the DNS root, is accepted. Empty labels
 * are not. A single `*` is accepted only as an additional leftmost
 * label (`*.example.com`), which clause 6.2.15 allows on an FQDN.
 *
 * Conversion of A-labels and U-labels uses the same IDNA operation as
 * `dnsNameMatch` (`domainToASCII` / `domainToUnicode`). That operation
 * follows UTS 46, which is wider than the RFC 5892 repertoire cited
 * by clause 6.2.15, so a label that converts cleanly is accepted even
 * when RFC 5892 would disallow a character in it. Assigned-name
 * existence (whether the name is delegated) is not checked.
 *
 * @returns `true` when `value` conforms to that syntax.
 */
export
function validateDnsName (value: string): boolean {
    return validateDomainName(value, true);
}

function isLdhLabel (label: string): boolean {
    if (label.length === 0 || label.length > 63) {
        return false;
    }
    for (let i = 0; i < label.length; i++) {
        if (!isLdhCode(label.charCodeAt(i))) {
            return false;
        }
    }
    return true;
}

function containsNonAscii (value: string): boolean {
    for (const character of value) {
        if (character.codePointAt(0)! > 0x7F) {
            return true;
        }
    }
    return false;
}

/**
 * ACE form of one label, or `undefined` when the label is not an
 * NR-LDH label, A-label, or U-label.
 */
function aceLabel (label: string): string | undefined {
    if (label.length === 0 || label.startsWith("-") || label.endsWith("-")) {
        return undefined;
    }
    if (isLdhLabel(label)) {
        const lower: string = label.toLowerCase();
        if (lower.length >= 4 && lower[2] === "-" && lower[3] === "-") {
            return aceOfALabel(lower);
        }
        return lower;
    }
    return aceOfULabel(label);
}

function aceOfALabel (lower: string): string | undefined {
    if (lower.length <= 4 || lower.length > 63 || !lower.startsWith("xn--")) {
        return undefined;
    }
    if (domainToASCII(lower) !== lower) {
        return undefined;
    }
    const unicode: string = domainToUnicode(lower);
    if (!unicode || unicode.includes(".") || !containsNonAscii(unicode)) {
        return undefined;
    }
    if (domainToASCII(unicode) !== lower) {
        return undefined;
    }
    return lower;
}

function aceOfULabel (label: string): string | undefined {
    if (label.normalize("NFC") !== label) {
        return undefined;
    }
    for (let i = 0; i < label.length; i++) {
        const code: number = label.charCodeAt(i);
        if (code <= 0x7F && !isLdhCode(code)) {
            return undefined;
        }
    }
    const ascii: string = domainToASCII(label);
    if (
        !ascii
        || ascii.length > 63
        || !ascii.startsWith("xn--")
        || ascii.includes(".")
    ) {
        return undefined;
    }
    const unicode: string = domainToUnicode(ascii);
    if (!unicode || domainToASCII(unicode) !== ascii) {
        return undefined;
    }
    return ascii;
}
