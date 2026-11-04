import { isDigit, isHex, isAlphaNum } from "./chars.mjs";

/**
 * RFC 3986 `dec-octet`: 0-255 with no leading zero, except for the
 * value 0 itself.
 */
export
function isIpv4Address (value: string): boolean {
    const parts: string[] = value.split(".");
    if (parts.length !== 4) {
        return false;
    }
    for (const part of parts) {
        if (part.length === 0 || part.length > 3) {
            return false;
        }
        if (part.length > 1 && part.charCodeAt(0) === 0x30) {
            return false;
        }
        for (let i = 0; i < part.length; i++) {
            if (!isDigit(part.charCodeAt(i))) {
                return false;
            }
        }
        if (Number(part) > 255) {
            return false;
        }
    }
    return true;
}

function isH16 (value: string): boolean {
    if (value.length < 1 || value.length > 4) {
        return false;
    }
    for (let i = 0; i < value.length; i++) {
        if (!isHex(value.charCodeAt(i))) {
            return false;
        }
    }
    return true;
}

/**
 * Count `h16` groups on one side of `::`. An IPv4 tail counts as two
 * groups and is only legal at the end of the address.
 */
function countIpv6Side (side: string, allowIpv4Tail: boolean): number | undefined {
    if (side === "") {
        return 0;
    }
    const parts: string[] = side.split(":");
    let groups: number = 0;
    for (let i = 0; i < parts.length; i++) {
        const part: string = parts[i];
        const last: boolean = i === parts.length - 1;
        if (last && part.includes(".")) {
            if (!allowIpv4Tail || !isIpv4Address(part)) {
                return undefined;
            }
            groups += 2;
            continue;
        }
        if (!isH16(part)) {
            return undefined;
        }
        groups++;
    }
    return groups;
}

/**
 * RFC 3986 `IPv6address`, including a dotted IPv4 tail (`ls32`).
 */
export
function isIpv6Address (value: string): boolean {
    if (value.length === 0 || value.includes(":::")) {
        return false;
    }
    const halves: string[] = value.split("::");
    if (halves.length > 2) {
        return false;
    }
    if (halves.length === 1) {
        return countIpv6Side(halves[0], true) === 8;
    }
    const left: number | undefined = countIpv6Side(halves[0], false);
    const right: number | undefined = countIpv6Side(halves[1], true);
    if (left === undefined || right === undefined) {
        return false;
    }
    // `::` must replace at least one 16-bit group.
    return left + right < 8;
}

function isUnreservedAscii (code: number): boolean {
    return isAlphaNum(code)
        || code === 0x2D
        || code === 0x2E
        || code === 0x5F
        || code === 0x7E;
}

function isSubDelim (code: number): boolean {
    return code === 0x21
        || code === 0x24
        || code === 0x26
        || code === 0x27
        || code === 0x28
        || code === 0x29
        || code === 0x2A
        || code === 0x2B
        || code === 0x2C
        || code === 0x3B
        || code === 0x3D;
}

/**
 * RFC 3986 `IPvFuture`: `v` + hex version + `.` + a non-empty tail.
 */
export
function isIpvFuture (value: string): boolean {
    if (value.length < 4) {
        return false;
    }
    const first: number = value.charCodeAt(0);
    if (first !== 0x76 && first !== 0x56) {
        return false;
    }
    let i: number = 1;
    if (!isHex(value.charCodeAt(i))) {
        return false;
    }
    while (i < value.length && isHex(value.charCodeAt(i))) {
        i++;
    }
    if (i >= value.length || value.charCodeAt(i) !== 0x2E) {
        return false;
    }
    i++;
    if (i >= value.length) {
        return false;
    }
    for (; i < value.length; i++) {
        const code: number = value.charCodeAt(i);
        if (!isUnreservedAscii(code) && !isSubDelim(code) && code !== 0x3A) {
            return false;
        }
    }
    return true;
}
