/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NumericUserIdentifier
 * @description
 *
 * Numeric identification of a user relative to the MD (ITU-T X.402 (1999), §18.3.8).
 * Presence of this attribute makes the OR-address a **numeric** name form (X.402
 * §18.5.5). Only this component is required to be numeric in a numeric OR-address
 * (§18.5.2 NOTE).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumericUserIdentifier  ::=  NumericString(SIZE (1..ub-numeric-user-id-length))
 * ```
 */
export type NumericUserIdentifier = NumericString; // NumericString
export const _decode_NumericUserIdentifier: $.ASN1Decoder<NumericUserIdentifier> = $._decodeNumericString;
export const _encode_NumericUserIdentifier: $.ASN1Encoder<NumericUserIdentifier> = $._encodeNumericString;

/* eslint-enable */
