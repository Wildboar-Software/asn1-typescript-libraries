/* eslint-disable */
import { ASN1Element as _Element, type BOOLEAN } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MgtBoolean
 * @description
 *
 * CMIP BOOLEAN wrapper. For `prohibitChaining`, TRUE means the DSA shall not
 * chain.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtBoolean  ::=  BOOLEAN
 * ```
 */
export type MgtBoolean = BOOLEAN; // BooleanType


export const _decode_MgtBoolean: $.ASN1Decoder<boolean> = $._decodeBoolean;


export const _encode_MgtBoolean: $.ASN1Encoder<boolean> = $._encodeBoolean;


/* eslint-enable */
