import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TPValidityPeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TPValidityPeriod ::= OCTET STRING (SIZE (1..7))
 * ```
 *
 */
export type TPValidityPeriod = OCTET_STRING;
export const _decode_TPValidityPeriod = (el: _Element): TPValidityPeriod => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 7) {
        throw new ASN1SizeError("TPValidityPeriod violates SIZE constraint");
    }
    return value;
};
export const _encode_TPValidityPeriod = $._encodeOctetString;
