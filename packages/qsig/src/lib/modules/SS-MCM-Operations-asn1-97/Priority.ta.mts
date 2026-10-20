/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  INTEGER (0..9)
 * ```
 */
export
type Priority = INTEGER;

export
const _decode_Priority: $.ASN1Decoder<Priority> = $._decodeInteger;

export
const _encode_Priority: $.ASN1Encoder<Priority> = $._encodeInteger;

/* eslint-enable */
