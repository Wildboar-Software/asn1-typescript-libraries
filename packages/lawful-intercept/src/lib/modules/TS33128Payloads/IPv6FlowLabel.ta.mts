/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv6FlowLabel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv6FlowLabel  ::=  INTEGER(0..1048575)
 * ```
 */
export
type IPv6FlowLabel = INTEGER;
export const _decode_IPv6FlowLabel: $.ASN1Decoder<IPv6FlowLabel> = $._decodeInteger;
export const _encode_IPv6FlowLabel: $.ASN1Encoder<IPv6FlowLabel> = $._encodeInteger;


/* eslint-enable */
