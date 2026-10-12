/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPProtocol  ::=  INTEGER (0..255)
 * ```
 */
export
type IPProtocol = INTEGER;
export const _decode_IPProtocol: $.ASN1Decoder<IPProtocol> = $._decodeInteger;
export const _encode_IPProtocol: $.ASN1Encoder<IPProtocol> = $._encodeInteger;


/* eslint-enable */
