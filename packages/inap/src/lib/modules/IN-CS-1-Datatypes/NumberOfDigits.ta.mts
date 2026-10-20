/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberOfDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfDigits  ::=  INTEGER(1..255)
 * ```
 */
export
type NumberOfDigits = INTEGER;

export
const _decode_NumberOfDigits: $.ASN1Decoder<NumberOfDigits> = $._decodeInteger;

export
const _encode_NumberOfDigits: $.ASN1Encoder<NumberOfDigits> = $._encodeInteger;

/* eslint-enable */
