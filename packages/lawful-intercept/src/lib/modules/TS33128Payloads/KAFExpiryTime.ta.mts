/* eslint-disable */
import {
    ASN1Element as _Element,
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KAFExpiryTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KAFExpiryTime  ::=  GeneralizedTime
 * ```
 */
export
type KAFExpiryTime = GeneralizedTime; // GeneralizedTime

export const _decode_KAFExpiryTime: $.ASN1Decoder<KAFExpiryTime> = $._decodeGeneralizedTime;

export const _encode_KAFExpiryTime: $.ASN1Encoder<KAFExpiryTime> = $._encodeGeneralizedTime;


/* eslint-enable */
