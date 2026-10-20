/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SliceServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SliceServiceType  ::=  INTEGER ( 0 .. 255 )
 * ```
 */
export
type SliceServiceType = INTEGER;

export
const _decode_SliceServiceType: $.ASN1Decoder<SliceServiceType> = $._decodeInteger;

export
const _encode_SliceServiceType: $.ASN1Encoder<SliceServiceType> = $._encodeInteger;

/* eslint-enable */
