/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATFrequencySelectionPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATFrequencySelectionPriority  ::=  INTEGER (1..256)
 * ```
 */
export
type RATFrequencySelectionPriority = INTEGER;
export const _decode_RATFrequencySelectionPriority: $.ASN1Decoder<RATFrequencySelectionPriority> = $._decodeInteger;
export const _encode_RATFrequencySelectionPriority: $.ASN1Encoder<RATFrequencySelectionPriority> = $._encodeInteger;


/* eslint-enable */
