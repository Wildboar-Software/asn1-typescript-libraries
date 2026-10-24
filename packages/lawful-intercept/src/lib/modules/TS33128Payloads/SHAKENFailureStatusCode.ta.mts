/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SHAKENFailureStatusCode
 * @description
 * 
 * SHAKEN status code when validation fails in the terminating network. See IETF
 * RFC 8224 [70].
 *
 * 3GPP TS 33.128, clause 7.11.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
