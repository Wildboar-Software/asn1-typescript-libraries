/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResultCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultCode  ::=  INTEGER
 * ```
 */
export
type ResultCode = INTEGER;

export
const _decode_ResultCode: $.ASN1Decoder<ResultCode> = $._decodeInteger;

export
const _encode_ResultCode: $.ASN1Encoder<ResultCode> = $._encodeInteger;

/* eslint-enable */
