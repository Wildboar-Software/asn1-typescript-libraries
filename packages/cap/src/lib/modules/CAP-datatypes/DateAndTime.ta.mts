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
 * BCD-encoded. Per octet, bits 0-3 hold the first digit and bits 4-7 the second
 * (same packing as `TimeAndTimezone`). Octet 1: millenium, century; 2: decade,
 * year; 3: month; 4: day; 5: hours; 6: minutes; 7: seconds.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
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
