/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FER
 * @description
 *
 * Field Entry Reaction to an entry event and condition, defined in
 * terms of operations on other VTE objects. Syntax is in the
 * register entry named by VTE-parameter CO-type-identifier for this
 * FEPCO. ISO/IEC 9040:1997 §3.3.67, §14.2 c; ISO/IEC 9041-1:1997
 * §12.2.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FER ::= ANY -- field entry reaction
 * ```
 */
export type FER = _Element;
export const _decode_FER = $._decodeAny;
export const _encode_FER = $._encodeAny;

/* eslint-enable */
