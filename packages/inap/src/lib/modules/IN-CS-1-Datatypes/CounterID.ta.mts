/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CounterID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CounterID  ::=  INTEGER(0..99)
 * ```
 */
export
type CounterID = INTEGER;

export
const _decode_CounterID: $.ASN1Decoder<CounterID> = $._decodeInteger;

export
const _encode_CounterID: $.ASN1Encoder<CounterID> = $._encodeInteger;

/* eslint-enable */
