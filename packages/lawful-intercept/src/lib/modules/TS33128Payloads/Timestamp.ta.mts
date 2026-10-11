/* eslint-disable */
import {
    GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Timestamp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Timestamp  ::=  GeneralizedTime
 * ```
 */
export
type Timestamp = GeneralizedTime; // GeneralizedTime

export const _decode_Timestamp: $.ASN1Decoder<Timestamp> = $._decodeGeneralizedTime;

export const _encode_Timestamp: $.ASN1Encoder<Timestamp> = $._encodeGeneralizedTime;

/* eslint-enable */
