/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SHAKENFailureStatusCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SHAKENFailureStatusCode  ::=  INTEGER
 * ```
 */
export
type SHAKENFailureStatusCode = INTEGER;
export const _decode_SHAKENFailureStatusCode: $.ASN1Decoder<SHAKENFailureStatusCode> = $._decodeInteger;
export const _encode_SHAKENFailureStatusCode: $.ASN1Encoder<SHAKENFailureStatusCode> = $._encodeInteger;


/* eslint-enable */
