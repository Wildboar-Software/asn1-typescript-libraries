/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BlockingTimeoutPeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BlockingTimeoutPeriod       ::=    INTEGER (100 .. 100000)
 * ```
 */
export
type BlockingTimeoutPeriod = INTEGER;
export const _decode_BlockingTimeoutPeriod: $.ASN1Decoder<BlockingTimeoutPeriod> = $._decodeInteger;
export const _encode_BlockingTimeoutPeriod: $.ASN1Encoder<BlockingTimeoutPeriod> = $._encodeInteger;


/* eslint-enable */
