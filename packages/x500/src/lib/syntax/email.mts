import { isAlphaNum } from "./chars.mjs";
import { validateDomainName } from "./dnsName.mjs";
import { utf8ByteLength } from "./utf8.mjs";

/**
 * Rec. ITU-T X.520 (2019), clause 6.2.16 `IntEmail`.
 *
 * An internationalized mailbox: `local-part "@" domain`.
 *
 * The local-part is an RFC 5321 dot-string or quoted-string, extended
 * by RFC 6531 so that non-ASCII characters are allowed. It is at most
 * 64 octets. The domain is a `DomainName` (clause 6.2.15) and MUST NOT
 * use `*` as a label. An all-ASCII address is still syntactically an
 * `IntEmail`; clause 6.2.16 only recommends `mail` for that case.
 *
 * @returns `true` when `value` has that form.
 */
export
function validateIntEmail (value: string): boolean {
    if (value.startsWith("\"")) {
        const end: number = endOfQuotedLocal(value);
        if (end < 0 || utf8ByteLength(value.slice(0, end + 1)) > 64) {
            return false;
        }
        if (value.charCodeAt(end + 1) !== 0x40) {
            return false;
        }
        return validateDomainName(value.slice(end + 2), false);
    }
    const at: number = value.indexOf("@");
    if (at <= 0 || at !== value.lastIndexOf("@") || at === value.length - 1) {
        return false;
    }
    const local: string = value.slice(0, at);
    if (utf8ByteLength(local) > 64 || !isDotAtom(local)) {
        return false;
    }
    return validateDomainName(value.slice(at + 1), false);
}

function isAtext (code: number): boolean {
    if (isAlphaNum(code)) {
        return true;
    }
    if (code <= 0x7F) {
        return code === 0x21 || code === 0x23 || code === 0x24 || code === 0x25
            || code === 0x26 || code === 0x27 || code === 0x2A || code === 0x2B
            || code === 0x2D || code === 0x2F || code === 0x3D || code === 0x3F
            || code === 0x5E || code === 0x5F || code === 0x60 || code === 0x7B
            || code === 0x7C || code === 0x7D || code === 0x7E;
    }
    // RFC 6531 UTF8-non-ascii, excluding C1 controls and noncharacters.
    return code >= 0xA0 && code !== 0xFFFE && code !== 0xFFFF && code <= 0x10FFFF;
}

function isDotAtom (value: string): boolean {
    const atoms: string[] = value.split(".");
    if (atoms.length === 0) {
        return false;
    }
    for (const atom of atoms) {
        if (atom.length === 0) {
            return false;
        }
        for (const character of atom) {
            if (!isAtext(character.codePointAt(0)!)) {
                return false;
            }
        }
    }
    return true;
}

function isQtext (code: number): boolean {
    if (code === 0x20 || code === 0x21) {
        return true;
    }
    if ((code >= 0x23 && code <= 0x5B) || (code >= 0x5D && code <= 0x7E)) {
        return true;
    }
    return code >= 0xA0 && code !== 0xFFFE && code !== 0xFFFF && code <= 0x10FFFF;
}

function isQuotedPairChar (code: number): boolean {
    if (code >= 0x20 && code <= 0x7E) {
        return true;
    }
    return code >= 0xA0 && code !== 0xFFFE && code !== 0xFFFF && code <= 0x10FFFF;
}

/**
 * Index of the closing quote of a quoted local-part, or -1.
 * The value begins with `"`.
 */
function endOfQuotedLocal (value: string): number {
    let i: number = 1;
    while (i < value.length) {
        const code: number = value.codePointAt(i)!;
        const width: number = code > 0xFFFF ? 2 : 1;
        if (code === 0x5C) {
            const next: number | undefined = value.codePointAt(i + 1);
            if (next === undefined || !isQuotedPairChar(next)) {
                return -1;
            }
            i += 1 + (next > 0xFFFF ? 2 : 1);
            continue;
        }
        if (code === 0x22) {
            return i;
        }
        if (!isQtext(code)) {
            return -1;
        }
        i += width;
    }
    return -1;
}
