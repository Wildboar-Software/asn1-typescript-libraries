/* eslint-disable */
import {
    type GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EntryTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryTime  ::=  GeneralizedTime
 * ```
 */
export
type EntryTime = GeneralizedTime; // GeneralizedTime
export const _decode_EntryTime: $.ASN1Decoder<Date> = $._decodeGeneralizedTime;
export const _encode_EntryTime: $.ASN1Encoder<Date> = $._encodeGeneralizedTime;


/* eslint-enable */
