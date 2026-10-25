/* eslint-disable */
import {
    type GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthorizationTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationTime  ::=  GeneralizedTime
 * ```
 */
export
type AuthorizationTime = GeneralizedTime; // GeneralizedTime
export const _decode_AuthorizationTime: $.ASN1Decoder<Date> = $._decodeGeneralizedTime;
export const _encode_AuthorizationTime: $.ASN1Encoder<Date> = $._encodeGeneralizedTime;


/* eslint-enable */
