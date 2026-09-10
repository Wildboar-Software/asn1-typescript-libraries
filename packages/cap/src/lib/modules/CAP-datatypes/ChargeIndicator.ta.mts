import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ChargeIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChargeIndicator ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type ChargeIndicator = OCTET_STRING;
export const _decode_ChargeIndicator = (el: _Element): ChargeIndicator => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("ChargeIndicator violates SIZE constraint");
    }
    return value;
};
export const _encode_ChargeIndicator = $._encodeOctetString;
