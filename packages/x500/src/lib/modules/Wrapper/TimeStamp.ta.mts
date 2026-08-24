/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TimeStamp
 * @description
 *
 * GeneralizedTime: pure UTC with `Z`, no `T` separator, YYYYMMDD +
 * hhmmss[,frac]; accuracy 1 h / 1 min / 1 s / fraction. Used as trusted
 * time in key generation.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStamp  ::=  GeneralizedTime
 * ```
 */
export type TimeStamp = GeneralizedTime; // GeneralizedTime


export const _decode_TimeStamp = $._decodeGeneralizedTime;


export const _encode_TimeStamp = $._encodeGeneralizedTime;


/* eslint-enable */
