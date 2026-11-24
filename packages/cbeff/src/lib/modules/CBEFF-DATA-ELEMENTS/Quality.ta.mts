/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Quality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Quality  ::=  INTEGER (0..100 | QualityNotSupported | NoValueAvailable)
 * ```
 */
export
type Quality = INTEGER;

export
const _decode_Quality: $.ASN1Decoder<Quality> = $._decodeInteger;

export
const _encode_Quality: $.ASN1Encoder<Quality> = $._encodeInteger;

/* eslint-enable */
