/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FEE
 * @description
 *
 * Field Entry Event: may occur during controlled data entry and
 * cause an entry reaction. Syntax is in the register entry named by
 * VTE-parameter CO-type-identifier for this FEPCO. ISO/IEC
 * 9040:1997 §3.3.65, §14.2 c; ISO/IEC 9041-1:1997 §12.2.4.
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
