/* eslint-disable */
import {
    GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BeginTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BeginTime  ::=  GeneralizedTime
 * ```
 */
export
type BeginTime = GeneralizedTime; // GeneralizedTime
export const _decode_BeginTime = $._decodeGeneralizedTime;
export const _encode_BeginTime = $._encodeGeneralizedTime;


/* eslint-enable */
