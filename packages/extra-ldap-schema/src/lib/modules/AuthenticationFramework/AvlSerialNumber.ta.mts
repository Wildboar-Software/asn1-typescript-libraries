/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AvlSerialNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AvlSerialNumber  ::=  INTEGER (0..MAX)
 * ```
 */
export
type AvlSerialNumber = INTEGER;

export
const _decode_AvlSerialNumber: $.ASN1Decoder<AvlSerialNumber> = $._decodeInteger;

export
const _encode_AvlSerialNumber: $.ASN1Encoder<AvlSerialNumber> = $._encodeInteger;

/* eslint-enable */
