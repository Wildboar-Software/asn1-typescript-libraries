/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FEE
 * @description
 *
 * Field entry event. The syntax is found in the register entry pointed
 * to by the VTE-parameter CO-type-identifier for this FEPCO.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FEE ::= ANY -- field entry event
 * ```
 */
export type FEE = _Element;
export const _decode_FEE = $._decodeAny;
export const _encode_FEE = $._encodeAny;

/* eslint-enable */
