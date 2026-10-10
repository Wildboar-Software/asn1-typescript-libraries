import type { ASN1Element } from "@wildboar/asn1";

/**
 * @summary Number of octets needed for a definite-form X.690 length
 * @description
 *
 * This mirrors the length encoding of `@wildboar/asn1`: lengths 0 through 126
 * use the short form (one octet), and everything else uses the long form,
 * which is one octet plus the minimum number of octets needed to hold the
 * length. (A length of 127 is written in the long form by that library, even
 * though the short form could represent it.)
 *
 * @param length The number of content octets
 * @returns The number of length octets
 * @function
 * @internal
 */
export
function definiteLengthLength (length: number): number {
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
 * @summary Total size of a definite-length TLV whose tag is a single octet
 *
 * @param tagLength The number of identifier octets
 * @param contentLength The number of content octets
 * @returns The number of octets in the tag, length, and content
 * @function
 * @internal
 */
export
function tlvLength (tagLength: number, contentLength: number): number {
    return tagLength + definiteLengthLength(contentLength) + contentLength;
}

/**
 * @summary Total size of an existing element when written with a definite length
 * @description
 *
 * Unlike `ASN1Element.tlvLength()`, this does not depend on any global length
 * encoding preference, so it never counts indefinite length overhead. It does
 * not serialize the element.
 *
 * @param el The element
 * @returns The number of octets in the tag, length, and content
 * @function
 * @internal
 */
export
function definiteElementLength (el: ASN1Element): number {
    return tlvLength(el.tagLength(), el.valueLength());
}
