import type { ASN1Element } from "@wildboar/asn1";

/**
 * @summary Definite-length size helpers
 * @description
 *
 * These mirror `@wildboar/asn1`'s definite-form length encoding, copied here
 * because `@wildboar/dn` does not export its copy. Lengths 0 through 126 use
 * the short form (one octet). A length of 127 is written in the long form by
 * that library, even though the short form could represent it.
 *
 * @internal
 */

/**
 * @summary Number of octets needed for a definite-form X.690 length
 * @internal
 */
export function definiteLengthLength(length: number): number {
    if (length < 127) {
        return 1;
    }
    if (length <= 0xFF) {
        return 2;
    }
    if (length <= 0xFFFF) {
        return 3;
    }
    if (length <= 0xFFFFFF) {
        return 4;
    }
    return 5;
}

/**
 * @summary Total size of a definite-length TLV
 * @internal
 */
export function tlvLength(tagLength: number, contentLength: number): number {
    return tagLength + definiteLengthLength(contentLength) + contentLength;
}

/**
 * @summary Total size of an existing element when written with a definite length
 * @internal
 */
export function definiteElementLength(el: ASN1Element): number {
    return tlvLength(el.tagLength(), el.valueLength());
}

/**
 * @summary Number of UTF-8 bytes in a string, without allocating them
 * @description
 *
 * `@wildboar/asn1` encodes `UTF8String`, `IA5String`, `PrintableString`, and
 * `ObjectDescriptor` with a UTF-8 conversion. For a legal IA5 or Printable
 * string every character is one byte, and this returns `s.length`.
 *
 * @internal
 */
export function utf8ByteLength(s: string): number {
    let n: number = 0;
    for (let i: number = 0; i < s.length; i++) {
        const c: number = s.charCodeAt(i);
        if (c < 0x80) {
            n += 1;
        } else if (c < 0x800) {
            n += 2;
        } else if (c >= 0xD800 && c <= 0xDBFF) {
            n += 4;
            i += 1;
        } else {
            n += 3;
        }
    }
    return n;
}

/**
 * @summary Content-octet count of an ASN.1 INTEGER, minimal two's complement
 * @internal
 */
export function integerContentLength(value: number | bigint): number {
    let n: bigint = typeof value === "bigint" ? value : BigInt(value);
    let len: number = 1;
    if (n > 127n) {
        while (n > 127n) {
            n >>= 8n;
            len += 1;
        }
    } else if (n < -128n) {
        while (n < -128n) {
            n >>= 8n;
            len += 1;
        }
    }
    return len;
}
