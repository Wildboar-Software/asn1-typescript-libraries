import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SGSNCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SGSNCapabilities ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type SGSNCapabilities = OCTET_STRING;
export const _decode_SGSNCapabilities = (el: _Element): SGSNCapabilities => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("SGSNCapabilities violates SIZE constraint");
    }
    return value;
};
export const _encode_SGSNCapabilities = $._encodeOctetString;
