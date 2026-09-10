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
