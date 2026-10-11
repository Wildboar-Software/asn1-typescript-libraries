/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGTMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGTMSI  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type FiveGTMSI = INTEGER;

export const _decode_FiveGTMSI: $.ASN1Decoder<FiveGTMSI> = $._decodeInteger;

export const _encode_FiveGTMSI: $.ASN1Encoder<FiveGTMSI> = $._encodeInteger;


/* eslint-enable */
