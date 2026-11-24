/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QualityNotSupported
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QualityNotSupported  ::=  INTEGER (254)
 * ```
 */
export
type QualityNotSupported = INTEGER;

export
const _decode_QualityNotSupported: $.ASN1Decoder<QualityNotSupported> = $._decodeInteger;

export
const _encode_QualityNotSupported: $.ASN1Encoder<QualityNotSupported> = $._encodeInteger;

/* eslint-enable */
