/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SequenceNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SequenceNumber  ::=  INTEGER (1..MAX)
 * ```
 */
export
type SequenceNumber = INTEGER;

export
const _decode_SequenceNumber: $.ASN1Decoder<SequenceNumber> = $._decodeInteger;

export
const _encode_SequenceNumber: $.ASN1Encoder<SequenceNumber> = $._encodeInteger;

/* eslint-enable */
