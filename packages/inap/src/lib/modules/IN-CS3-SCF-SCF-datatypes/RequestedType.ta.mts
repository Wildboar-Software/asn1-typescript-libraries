/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedType  ::=  INTEGER(0..127)
 * ```
 */
export
type RequestedType = INTEGER;

export
const _decode_RequestedType: $.ASN1Decoder<RequestedType> = $._decodeInteger;

export
const _encode_RequestedType: $.ASN1Encoder<RequestedType> = $._encodeInteger;

/* eslint-enable */
