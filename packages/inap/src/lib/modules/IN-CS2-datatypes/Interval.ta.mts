/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Interval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Interval  ::=  INTEGER(-1..60000)
 * ```
 */
export
type Interval = INTEGER;

export
const _decode_Interval: $.ASN1Decoder<Interval> = $._decodeInteger;

export
const _encode_Interval: $.ASN1Encoder<Interval> = $._encodeInteger;

/* eslint-enable */
