/* eslint-disable */
import { ASN1Element as _Element, type GeneralizedTime } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MgtGeneralizedTime
 * @description
 *
 * GeneralizedTime (not UTCTime). createTimestamp MATCHES FOR EQUALITY and
 * ORDERING; other time attributes often EQUALITY only.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtGeneralizedTime  ::=  GeneralizedTime
 * ```
 */
export type MgtGeneralizedTime = GeneralizedTime; // GeneralizedTime


export const _decode_MgtGeneralizedTime: $.ASN1Decoder<Date> = $._decodeGeneralizedTime;


export const _encode_MgtGeneralizedTime: $.ASN1Encoder<Date> = $._encodeGeneralizedTime;


/* eslint-enable */
