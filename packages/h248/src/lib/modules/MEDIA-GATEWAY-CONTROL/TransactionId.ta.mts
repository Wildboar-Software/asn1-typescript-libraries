/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransactionId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionId  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type TransactionId = INTEGER;
export const _decode_TransactionId = $._decodeInteger;
export const _encode_TransactionId = $._encodeInteger;


/* eslint-enable */
