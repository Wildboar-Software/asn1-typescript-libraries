/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LengthOfTimeUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LengthOfTimeUnit  ::=  INTEGER (0..16777215)
 * ```
 */
export
type LengthOfTimeUnit = INTEGER;

export
const _decode_LengthOfTimeUnit: $.ASN1Decoder<LengthOfTimeUnit> = $._decodeInteger;

export
const _encode_LengthOfTimeUnit: $.ASN1Encoder<LengthOfTimeUnit> = $._encodeInteger;

/* eslint-enable */
