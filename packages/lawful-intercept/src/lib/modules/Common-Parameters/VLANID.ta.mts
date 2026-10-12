/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VLANID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VLANID  ::=  INTEGER (0..4095)
 * ```
 */
export
type VLANID = INTEGER;
export const _decode_VLANID: $.ASN1Decoder<VLANID> = $._decodeInteger;
export const _encode_VLANID: $.ASN1Encoder<VLANID> = $._encodeInteger;


/* eslint-enable */
