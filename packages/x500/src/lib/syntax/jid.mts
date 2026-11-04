import { isAlphaNum } from "./chars.mjs";
import { validateDomainName } from "./dnsName.mjs";
import { isIpv4Address, isIpv6Address, isIpvFuture } from "./ip.mjs";
import { utf8ByteLength } from "./utf8.mjs";

/**
 * Rec. ITU-T X.520 (2019), clause 6.2.17 `Jid`.
 *
 * A Jabber identifier as in IETF RFC 7622 (the recommendation cites
 * RFC 7633, which does not define the address format):
 *
 * `[ localpart "@" ] domainpart [ "/" resourcepart ]`
 *
 * Each present part is 1 to 1023 octets. The domainpart is a
 * `DomainName` without `*`, an IPv4 address, or an IP-literal
 * (`[` IPv6 / IPvFuture `]`). The localpart allows letters, digits,
 * marks, and the ASCII punctuation common to the UsernameCaseMapped
 * profile; it is not a full PRECIS table. The resourcepart rejects
 * controls and U+FFFD. Case folding and NFC enforcement are left to
 * `jidMatch`.
 *
 * @returns `true` when `value` has that form.
 */
export
function validateJid (value: string): boolean {
    if (value.length === 0) {
        return false;
    }
    let rest: string = value;
    const slash: number = rest.indexOf("/");
    if (slash >= 0) {
        const resource: string = rest.slice(slash + 1);
        rest = rest.slice(0, slash);
        if (
            resource.length === 0
            || utf8ByteLength(resource) > 1023
            || !isResourcePart(resource)
        ) {
            return false;
        }
    }
    const at: number = rest.lastIndexOf("@");
    if (at >= 0) {
        const local: string = rest.slice(0, at);
        rest = rest.slice(at + 1);
        if (
            local.length === 0
            || utf8ByteLength(local) > 1023
            || !isLocalPart(local)
        ) {
            return false;
        }
    }
    if (rest.length === 0 || utf8ByteLength(rest) > 1023) {
        return false;
    }
    return isDomainPart(rest);
}

function isLocalAscii (code: number): boolean {
    if (isAlphaNum(code)) {
        return true;
    }
    return code === 0x21 || code === 0x23 || code === 0x24 || code === 0x25
        || code === 0x2A || code === 0x2B || code === 0x2D || code === 0x2E
        || code === 0x3D || code === 0x3F || code === 0x5E || code === 0x5F
        || code === 0x60 || code === 0x7B || code === 0x7C || code === 0x7D
        || code === 0x7E;
}

function isLocalPart (value: string): boolean {
    for (const character of value) {
        const code: number = character.codePointAt(0)!;
        if (code <= 0x7F) {
            if (!isLocalAscii(code)) {
                return false;
            }
            continue;
        }
        if (code <= 0x9F || code === 0xFFFD || code === 0xFFFE || code === 0xFFFF) {
            return false;
        }
        if (!/^[\p{L}\p{M}\p{N}]$/u.test(character)) {
            return false;
        }
    }
    return true;
}

function isResourcePart (value: string): boolean {
    for (const character of value) {
        const code: number = character.codePointAt(0)!;
        if (code <= 0x1F || (code >= 0x7F && code <= 0x9F) || code === 0xFFFD) {
            return false;
        }
    }
    return true;
}

function isDomainPart (value: string): boolean {
    if (value.startsWith("[")) {
        if (!value.endsWith("]") || value.length < 3) {
            return false;
        }
        const inner: string = value.slice(1, -1);
        return isIpv6Address(inner) || isIpvFuture(inner);
    }
    if (isIpv4Address(value)) {
        return true;
    }
    return validateDomainName(value, false);
}
