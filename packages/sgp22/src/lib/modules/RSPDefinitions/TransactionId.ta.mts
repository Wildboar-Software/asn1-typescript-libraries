/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
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
export const _decode_TransactionId = $._decodeOctetString;
export const _encode_TransactionId = $._encodeOctetString;


/* eslint-enable */
