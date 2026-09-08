/* eslint-disable */
import {
    GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReceivedTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedTime  ::=  GeneralizedTime
 * ```
 */
export
type ReceivedTime = GeneralizedTime; // GeneralizedTime
export const _decode_ReceivedTime = $._decodeGeneralizedTime;
export const _encode_ReceivedTime = $._encodeGeneralizedTime;


/* eslint-enable */
