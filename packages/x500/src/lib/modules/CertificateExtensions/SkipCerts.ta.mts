/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SkipCerts
 * @description
 *
 * INTEGER (0..MAX). 0 means this certificate (constraint starts here).
 * Used by policyConstraints and inhibitAnyPolicy.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SkipCerts  ::=  INTEGER(0..MAX)
 * ```
 */
export type SkipCerts = INTEGER;


export const _decode_SkipCerts: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_SkipCerts: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
