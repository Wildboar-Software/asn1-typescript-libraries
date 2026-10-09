/* eslint-disable */
import {
    ASN1Element as _Element,
    UTCTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedAuthorisationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedAuthorisationInfo  ::=  UTCTime
 * ```
 */
export
type ExtendedAuthorisationInfo = UTCTime; // UTCTime
export const _decode_ExtendedAuthorisationInfo = $._decodeUTCTime;
export const _encode_ExtendedAuthorisationInfo = $._encodeUTCTime;


/* eslint-enable */
