/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AssociationEstablishment
 * @description
 *
 * BIT STRING of association directions a DSA supports for DSP, DOP, or DISP
 * (separate attributes share this syntax). Both bits may be set. `inward`(0)
 * = accept incoming; `outward`(1) = initiate outgoing. Empty / no bits = that
 * protocol's associations are established in neither direction. MATCHES FOR
 * EQUALITY is exact bit-string match, not subset.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationEstablishment  ::=  BIT STRING {inward(0), outward(1)}
 * ```
 */
export type AssociationEstablishment = BIT_STRING;

/**
 * @summary AssociationEstablishment_inward
 * @constant
 */
export const AssociationEstablishment_inward: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary inward
 * @constant
 */
export const inward: number = AssociationEstablishment_inward; /* SHORT_NAMED_BIT */

/**
 * @summary AssociationEstablishment_outward
 * @constant
 */
export const AssociationEstablishment_outward: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary outward
 * @constant
 */
export const outward: number = AssociationEstablishment_outward; /* SHORT_NAMED_BIT */


export const _decode_AssociationEstablishment = $._decodeBitString;


export const _encode_AssociationEstablishment = $._encodeBitString;


/* eslint-enable */
