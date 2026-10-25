/* eslint-disable */
import {
    type GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ManagedObjectAccessFromTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManagedObjectAccessFromTime  ::=  GeneralizedTime
 * ```
 */
export
type ManagedObjectAccessFromTime = GeneralizedTime; // GeneralizedTime
export const _decode_ManagedObjectAccessFromTime: $.ASN1Decoder<Date> = $._decodeGeneralizedTime;
export const _encode_ManagedObjectAccessFromTime: $.ASN1Encoder<Date> = $._encodeGeneralizedTime;


/* eslint-enable */
