/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MaximumNumberOfCounters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaximumNumberOfCounters  ::=  INTEGER(1..numOfCounters)
 * ```
 */
export
type MaximumNumberOfCounters = INTEGER;

export
const _decode_MaximumNumberOfCounters: $.ASN1Decoder<MaximumNumberOfCounters> = $._decodeInteger;

export
const _encode_MaximumNumberOfCounters: $.ASN1Encoder<MaximumNumberOfCounters> = $._encodeInteger;

/* eslint-enable */
