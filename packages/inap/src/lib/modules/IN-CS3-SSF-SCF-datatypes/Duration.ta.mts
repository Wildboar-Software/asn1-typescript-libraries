/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Duration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Duration  ::=  INTEGER(-2..86400)
 * ```
 */
export
type Duration = INTEGER;

export
const _decode_Duration: $.ASN1Decoder<Duration> = $._decodeInteger;

export
const _encode_Duration: $.ASN1Encoder<Duration> = $._encodeInteger;

/* eslint-enable */
