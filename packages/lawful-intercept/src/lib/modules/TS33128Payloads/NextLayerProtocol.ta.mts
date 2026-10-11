/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NextLayerProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NextLayerProtocol  ::=  INTEGER(0..255)
 * ```
 */
export
type NextLayerProtocol = INTEGER;

export const _decode_NextLayerProtocol: $.ASN1Decoder<NextLayerProtocol> = $._decodeInteger;

export const _encode_NextLayerProtocol: $.ASN1Encoder<NextLayerProtocol> = $._encodeInteger;


/* eslint-enable */
