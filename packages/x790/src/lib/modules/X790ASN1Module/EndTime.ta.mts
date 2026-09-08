/* eslint-disable */
import {
    GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EndTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndTime  ::=  GeneralizedTime
 * ```
 */
export
type EndTime = GeneralizedTime; // GeneralizedTime
export const _decode_EndTime = $._decodeGeneralizedTime;
export const _encode_EndTime = $._encodeGeneralizedTime;


/* eslint-enable */
