/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FEI
 * @description
 *
 * Field Entry Instruction. Applies a rule for controlled data entry
 * into a field. Syntax is in the register entry named by
 * VTE-parameter CO-type-identifier for this FEICO. ISO/IEC
 * 9040:1997 §3.3.64, §14.2 b; ISO/IEC 9041-1:1997 §12.2.3.
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
