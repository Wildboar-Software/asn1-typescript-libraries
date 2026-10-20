/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResultCodeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultCodeType  ::=  INTEGER ( 0 .. MAX )
 * ```
 */
export
type ResultCodeType = INTEGER;

export
const _decode_ResultCodeType: $.ASN1Decoder<ResultCodeType> = $._decodeInteger;

export
const _encode_ResultCodeType: $.ASN1Encoder<ResultCodeType> = $._encodeInteger;

/* eslint-enable */
