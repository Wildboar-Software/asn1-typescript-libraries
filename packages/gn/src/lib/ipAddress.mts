import { bytesToHex } from "./hex.mjs";

/**
 * @summary `iPAddress` octet strings, as used by RFC 5280
 * @description
 *
 * Four octets are one IPv4 address and sixteen are one IPv6 address
 * (section 4.2.1.6). Eight octets are an IPv4 address followed by a mask,
 * and thirty-two are the same for IPv6: the name-constraint range form in
 * section 4.2.1.10, encoded in the style of RFC 4632 (CIDR). The octet count
 * tells the two forms apart.
 *
 * Not part of the package's public API. `generalNameToString` and
 * `generalNameFromString` are the supported way in and out.
 *
 * @internal
 */

/**
 * @summary An address and mask taken from an 8- or 32-octet `iPAddress`
 * @internal
 */
export type IPAddressRange = {
    /** The address half. Four octets for IPv4, sixteen for IPv6. */
    address: Uint8Array;
    /** The mask half, the same length as `address`. */
    mask: Uint8Array;
    /**
     * The CIDR prefix length when `mask` is a contiguous run of 1-bits
     * followed by 0-bits, or `null` when the mask has a hole in it.
     */
    prefixLength: number | null;
};

/**
 * @summary Split a name-constraint `iPAddress` into an address and a mask
 * @description
 *
 * Returns `null` unless `octets` is 8 or 32 bytes long. `prefixLength` is
 * `null` when the mask is not a contiguous CIDR prefix. This does not test
 * whether some other address falls inside the range.
 *
 * @internal
 */
export function ipAddressRangeFromOctets(octets: Uint8Array): IPAddressRange | null {
    if (octets.length !== 8 && octets.length !== 32) {
        return null;
    }
    const half: number = octets.length / 2;
    const mask: Uint8Array = octets.subarray(half);
    return {
        address: octets.subarray(0, half),
        mask,
        prefixLength: prefixLengthOf(mask),
    };
}

/**
 * @summary Print an `iPAddress` value
 * @description
 *
 * - 4 octets: dotted IPv4, such as `192.0.2.1`.
 * - 16 octets: IPv6 per RFC 5952. IPv4-mapped addresses are `::ffff:192.0.2.1`.
 * - 8 or 32 octets: `address/prefix` when the mask is contiguous, otherwise
 *   `address/mask` with the mask written out in full. Address bits that fall
 *   outside the mask are printed as they are.
 * - Any other length: `#` and lowercase hex. That length cannot be a valid
 *   `iPAddress`.
 *
 * @internal
 */
export function ipAddressToString(octets: Uint8Array): string {
    if (octets.length === 4) {
        return ipv4ToString(octets);
    }
    if (octets.length === 16) {
        return ipv6ToString(octets);
    }
    const range: IPAddressRange | null = ipAddressRangeFromOctets(octets);
    if (!range) {
        return `#${bytesToHex(octets)}`;
    }
    const address: string = octets.length === 8
        ? ipv4ToString(range.address)
        : ipv6ToString(range.address);
    if (range.prefixLength !== null) {
        return `${address}/${range.prefixLength}`;
    }
    const mask: string = octets.length === 8
        ? ipv4ToString(range.mask)
        : ipv6ToString(range.mask);
    return `${address}/${mask}`;
}

/**
 * @summary Parse an address or a CIDR range into `iPAddress` octets
 * @description
 *
 * A bare address is 4 or 16 octets. `address/prefix` and `address/mask` are
 * 8 or 32 octets. A prefix is `0` through `32` for IPv4 and `0` through `128`
 * for IPv6. Mixing an IPv4 address with an IPv6 mask, or anything else that
 * is not one of these forms, throws `SyntaxError`.
 *
 * @internal
 */
export function ipAddressFromString(text: string): Uint8Array {
    const slash: number = text.indexOf("/");
    if (slash < 0) {
        const address: Uint8Array | null = parseAddress(text);
        if (!address) {
            throw new SyntaxError(`invalid IP address: ${text}`);
        }
        return address;
    }
    if (text.indexOf("/", slash + 1) >= 0) {
        throw new SyntaxError(`invalid IP address range: ${text}`);
    }
    const address: Uint8Array | null = parseAddress(text.slice(0, slash));
    if (!address) {
        throw new SyntaxError(`invalid IP address range: ${text}`);
    }
    const rest: string = text.slice(slash + 1);
    const maxPrefix: number = address.length * 8;
    let mask: Uint8Array;
    if (/^\d+$/.test(rest)) {
        const prefix: number = Number(rest);
        if (prefix > maxPrefix) {
            throw new SyntaxError(`invalid IP address prefix length: ${text}`);
        }
        mask = maskFromPrefix(prefix, address.length);
    } else {
        const parsed: Uint8Array | null = address.length === 4
            ? parseIPv4(rest)
            : parseIPv6(rest);
        if (!parsed) {
            throw new SyntaxError(`invalid IP address mask: ${text}`);
        }
        mask = parsed;
    }
    const out: Uint8Array = new Uint8Array(address.length * 2);
    out.set(address, 0);
    out.set(mask, address.length);
    return out;
}

function parseAddress(text: string): Uint8Array | null {
    return parseIPv4(text) ?? parseIPv6(text);
}

function ipv4ToString(octets: Uint8Array): string {
    return `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
}

function parseIPv4(text: string): Uint8Array | null {
    const parts: string[] = text.split(".");
    if (parts.length !== 4) {
        return null;
    }
    const out: Uint8Array = new Uint8Array(4);
    for (let i: number = 0; i < 4; i++) {
        const part: string | undefined = parts[i];
        if (!part || !/^\d{1,3}$/.test(part)) {
            return null;
        }
        const n: number = Number.parseInt(part, 10);
        if (n > 255) {
            return null;
        }
        out[i] = n;
    }
    return out;
}

function isIpv4Mapped(octets: Uint8Array): boolean {
    for (let i: number = 0; i < 10; i++) {
        if (octets[i] !== 0) {
            return false;
        }
    }
    return octets[10] === 0xFF && octets[11] === 0xFF;
}

/**
 * RFC 5952: lowercase, no leading zeros, and the longest run of two or more
 * zero groups compressed to `::` (the leftmost run, when two are the same
 * length). A single zero group is not compressed.
 */
function ipv6ToString(octets: Uint8Array): string {
    if (isIpv4Mapped(octets)) {
        return `::ffff:${ipv4ToString(octets.subarray(12, 16))}`;
    }
    const groups: number[] = new Array(8);
    for (let i: number = 0; i < 8; i++) {
        groups[i] = ((octets[i * 2] ?? 0) << 8) | (octets[(i * 2) + 1] ?? 0);
    }
    let bestStart: number = -1;
    let bestLen: number = 0;
    let i: number = 0;
    while (i < 8) {
        if (groups[i] === 0) {
            const start: number = i;
            while (i < 8 && groups[i] === 0) {
                i += 1;
            }
            const len: number = i - start;
            if (len > bestLen) {
                bestStart = start;
                bestLen = len;
            }
        } else {
            i += 1;
        }
    }
    const hex = (g: number): string => g.toString(16);
    if (bestLen < 2) {
        return groups.map((g: number) => hex(g)).join(":");
    }
    const left: string[] = [];
    for (let g: number = 0; g < bestStart; g++) {
        left.push(hex(groups[g] ?? 0));
    }
    const right: string[] = [];
    for (let g: number = bestStart + bestLen; g < 8; g++) {
        right.push(hex(groups[g] ?? 0));
    }
    if (left.length === 0 && right.length === 0) {
        return "::";
    }
    if (left.length === 0) {
        return `::${right.join(":")}`;
    }
    if (right.length === 0) {
        return `${left.join(":")}::`;
    }
    return `${left.join(":")}::${right.join(":")}`;
}

function parseIPv6(text: string): Uint8Array | null {
    if (text.length === 0 || text.includes("%")) {
        return null;
    }
    const pieces: string[] = text.split("::");
    if (pieces.length > 2) {
        return null;
    }
    const head: number[] | null = parseIPv6Side(pieces[0] ?? "");
    if (!head) {
        return null;
    }
    if (pieces.length === 1) {
        return head.length === 8 ? groupsToBytes(head) : null;
    }
    const tail: number[] | null = parseIPv6Side(pieces[1] ?? "");
    if (!tail || (head.length + tail.length) >= 8) {
        return null;
    }
    const groups: number[] = head.slice();
    const zeros: number = (8 - head.length) - tail.length;
    for (let i: number = 0; i < zeros; i++) {
        groups.push(0);
    }
    for (let i: number = 0; i < tail.length; i++) {
        groups.push(tail[i] ?? 0);
    }
    return groupsToBytes(groups);
}

function parseIPv6Side(side: string): number[] | null {
    if (side.length === 0) {
        return [];
    }
    const parts: string[] = side.split(":");
    const groups: number[] = [];
    for (let i: number = 0; i < parts.length; i++) {
        const part: string | undefined = parts[i];
        if (!part) {
            return null;
        }
        if (part.includes(".")) {
            if (i !== parts.length - 1) {
                return null;
            }
            const v4: Uint8Array | null = parseIPv4(part);
            if (!v4) {
                return null;
            }
            groups.push(((v4[0] ?? 0) << 8) | (v4[1] ?? 0));
            groups.push(((v4[2] ?? 0) << 8) | (v4[3] ?? 0));
        } else if (!/^[0-9a-fA-F]{1,4}$/.test(part)) {
            return null;
        } else {
            groups.push(Number.parseInt(part, 16));
        }
    }
    return groups;
}

function groupsToBytes(groups: number[]): Uint8Array {
    const out: Uint8Array = new Uint8Array(16);
    for (let i: number = 0; i < 8; i++) {
        const g: number = groups[i] ?? 0;
        out[i * 2] = (g >> 8) & 0xFF;
        out[(i * 2) + 1] = g & 0xFF;
    }
    return out;
}

/**
 * @summary CIDR prefix length of `mask`, or `null` when it is not one
 * @description
 *
 * The mask is not assumed to be a CIDR subnet. A prefix length is a run of
 * 1-bits followed only by 0-bits. After the first 0-bit, a later 1-bit means
 * the mask has a hole, so this returns `null` instead of the number of
 * leading 1-bits.
 */
function prefixLengthOf(mask: Uint8Array): number | null {
    let prefix: number = 0;
    let seenZero: boolean = false;
    for (let i: number = 0; i < mask.length; i++) {
        const b: number = mask[i] ?? 0;
        for (let bit: number = 7; bit >= 0; bit--) {
            const one: boolean = (b & (1 << bit)) !== 0;
            if (one) {
                if (seenZero) {
                    return null;
                }
                prefix += 1;
            } else {
                seenZero = true;
            }
        }
    }
    return prefix;
}

function maskFromPrefix(prefix: number, byteLength: number): Uint8Array {
    const mask: Uint8Array = new Uint8Array(byteLength);
    let left: number = prefix;
    for (let i: number = 0; i < byteLength; i++) {
        if (left >= 8) {
            mask[i] = 0xFF;
            left -= 8;
        } else if (left > 0) {
            mask[i] = (0xFF << (8 - left)) & 0xFF;
            left = 0;
        }
    }
    return mask;
}
