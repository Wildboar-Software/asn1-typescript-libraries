/* eslint-disable */
import {
    GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LastUpdateTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LastUpdateTime  ::=  GeneralizedTime
 * ```
 */
export
type LastUpdateTime = GeneralizedTime; // GeneralizedTime
export const _decode_LastUpdateTime = $._decodeGeneralizedTime;
export const _encode_LastUpdateTime = $._encodeGeneralizedTime;


/* eslint-enable */
