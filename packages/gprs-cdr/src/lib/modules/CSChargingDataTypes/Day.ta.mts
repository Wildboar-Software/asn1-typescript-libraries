/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Day
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Day         ::=  INTEGER ( 1 .. 31 )
 * ```
 */
export
type Day = INTEGER;

export
const _decode_Day: $.ASN1Decoder<Day> = $._decodeInteger;

export
const _encode_Day: $.ASN1Encoder<Day> = $._encodeInteger;

/* eslint-enable */
