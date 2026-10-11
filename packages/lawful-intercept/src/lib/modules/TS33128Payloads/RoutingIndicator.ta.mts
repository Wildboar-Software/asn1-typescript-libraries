/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoutingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingIndicator  ::=  INTEGER (0..9999)
 * ```
 */
export
type RoutingIndicator = INTEGER;

export const _decode_RoutingIndicator: $.ASN1Decoder<RoutingIndicator> = $._decodeInteger;

export const _encode_RoutingIndicator: $.ASN1Encoder<RoutingIndicator> = $._encodeInteger;


/* eslint-enable */
