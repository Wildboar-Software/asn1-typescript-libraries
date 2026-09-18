/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FEI
 * @description
 *
 * Field entry instruction. The syntax is found in the register entry
 * pointed to by the VTE-parameter CO-type-identifier for this FEICO.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FEI ::= ANY
 * -- The syntax for FEI will be found in the register entry pointed
 * -- to by the VTE-parameter CO-type-identifier for this FEICO.
 * ```
 */
export type FEI = _Element;
export const _decode_FEI = $._decodeAny;
export const _encode_FEI = $._encodeAny;

/* eslint-enable */
