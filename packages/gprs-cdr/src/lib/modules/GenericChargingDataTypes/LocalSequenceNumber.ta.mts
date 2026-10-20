/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocalSequenceNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalSequenceNumber  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type LocalSequenceNumber = INTEGER;

export
const _decode_LocalSequenceNumber: $.ASN1Decoder<LocalSequenceNumber> = $._decodeInteger;

export
const _encode_LocalSequenceNumber: $.ASN1Encoder<LocalSequenceNumber> = $._encodeInteger;

/* eslint-enable */
