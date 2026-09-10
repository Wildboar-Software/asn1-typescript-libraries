import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PDPID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDPID ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type PDPID = OCTET_STRING;
export const _decode_PDPID = (el: _Element): PDPID => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("PDPID violates SIZE constraint");
    }
    return value;
};
export const _encode_PDPID = $._encodeOctetString;
