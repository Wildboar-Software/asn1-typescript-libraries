/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AssociationEstablishment
 * @description
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
