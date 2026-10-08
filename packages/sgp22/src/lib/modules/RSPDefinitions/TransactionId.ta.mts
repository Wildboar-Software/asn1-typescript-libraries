/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransactionId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionId  ::=  OCTET STRING (SIZE(1..16))
 * ```
 */
export
type TransactionId = OCTET_STRING; // OctetStringType
export function _decode_TransactionId (el: _Element): TransactionId {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 16) {
        throw new ASN1SizeError("TransactionId violates SIZE constraint");
    }
    return value;
}
export const _encode_TransactionId = $._encodeOctetString;


/* eslint-enable */
