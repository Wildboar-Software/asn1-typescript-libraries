/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ApplicationTimer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationTimer  ::=  INTEGER(0..2047)
 * ```
 */
export
type ApplicationTimer = INTEGER;

export
const _decode_ApplicationTimer: $.ASN1Decoder<ApplicationTimer> = $._decodeInteger;

export
const _encode_ApplicationTimer: $.ASN1Encoder<ApplicationTimer> = $._encodeInteger;

/* eslint-enable */
