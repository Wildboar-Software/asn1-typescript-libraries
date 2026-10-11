/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InnerRadius
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InnerRadius  ::=  INTEGER (0..327675)
 * ```
 */
export
type InnerRadius = INTEGER;

export const _decode_InnerRadius: $.ASN1Decoder<InnerRadius> = $._decodeInteger;

export const _encode_InnerRadius: $.ASN1Encoder<InnerRadius> = $._encodeInteger;


/* eslint-enable */
