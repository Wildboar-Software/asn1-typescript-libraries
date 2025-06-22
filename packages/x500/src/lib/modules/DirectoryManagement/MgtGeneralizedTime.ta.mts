/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MgtGeneralizedTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtGeneralizedTime  ::=  GeneralizedTime
 * ```
 */
export type MgtGeneralizedTime = GeneralizedTime; // GeneralizedTime


export const _decode_MgtGeneralizedTime = $._decodeGeneralizedTime;


export const _encode_MgtGeneralizedTime = $._encodeGeneralizedTime;


/* eslint-enable */
