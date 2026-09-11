import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary NAOliInfo
 * @description
 *
 * North American Originating Line Information; same values as ANSI T1.113-1995,
 * e.g. `'3D'H` (61) Cellular Service Type 1, `'3E'H` (62) Type 2, `'3F'H` (63)
 * Cellular Service (roaming). (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAOliInfo ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type NAOliInfo = OCTET_STRING;
export const _decode_NAOliInfo = (el: _Element): NAOliInfo => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("NAOliInfo violates SIZE constraint");
    }
    return value;
};
export const _encode_NAOliInfo = $._encodeOctetString;
