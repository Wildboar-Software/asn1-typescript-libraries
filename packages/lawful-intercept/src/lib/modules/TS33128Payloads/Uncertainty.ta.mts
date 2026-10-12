/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Uncertainty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Uncertainty  ::=  INTEGER (0..127)
 * ```
 */
export
type Uncertainty = INTEGER;
export const _decode_Uncertainty: $.ASN1Decoder<Uncertainty> = $._decodeInteger;
export const _encode_Uncertainty: $.ASN1Encoder<Uncertainty> = $._encodeInteger;


/* eslint-enable */
