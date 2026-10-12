/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RDSPortNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSPortNumber  ::=  INTEGER (0..15)
 * ```
 */
export
type RDSPortNumber = INTEGER;
export const _decode_RDSPortNumber: $.ASN1Decoder<RDSPortNumber> = $._decodeInteger;
export const _encode_RDSPortNumber: $.ASN1Encoder<RDSPortNumber> = $._encodeInteger;


/* eslint-enable */
