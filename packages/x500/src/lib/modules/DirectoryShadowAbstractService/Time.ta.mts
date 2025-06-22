/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  GeneralizedTime
 * ```
 */
export type Time = GeneralizedTime; // GeneralizedTime


export const _decode_Time = $._decodeGeneralizedTime;


export const _encode_Time = $._encodeGeneralizedTime;


/* eslint-enable */
