import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DateAndTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateAndTime ::= OCTET STRING (SIZE(7))
 * ```
 *
 */
export type DateAndTime = OCTET_STRING;
export const _decode_DateAndTime = (el: _Element): DateAndTime => {
    const value = $._decodeOctetString(el);
    if (value.length !== 7) {
        throw new ASN1SizeError("DateAndTime violates SIZE constraint");
    }
    return value;
};
export const _encode_DateAndTime = $._encodeOctetString;
