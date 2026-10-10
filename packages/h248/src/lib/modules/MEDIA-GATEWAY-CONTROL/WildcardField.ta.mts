/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WildcardField
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WildcardField  ::=  OCTET STRING(SIZE(1))
 * ```
 */
export
type WildcardField = OCTET_STRING; // OctetStringType
export const _decode_WildcardField = (el: _Element): WildcardField => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("WildcardField violates SIZE constraint");
    }
    return value;
};
export const _encode_WildcardField = $._encodeOctetString;


/* eslint-enable */
