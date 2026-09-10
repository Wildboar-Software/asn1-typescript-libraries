import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary AlertingPattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlertingPattern ::= OCTET STRING (SIZE(3))
 * ```
 *
 */
export type AlertingPattern = OCTET_STRING;
export const _decode_AlertingPattern = (el: _Element): AlertingPattern => {
    const value = $._decodeOctetString(el);
    if (value.length !== 3) {
        throw new ASN1SizeError("AlertingPattern violates SIZE constraint");
    }
    return value;
};
export const _encode_AlertingPattern = $._encodeOctetString;
