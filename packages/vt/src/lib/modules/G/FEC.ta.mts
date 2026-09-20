/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FEC
 * @description
 *
 * Field Entry Condition: taken with an entry event, predicates an
 * entry reaction. Syntax is in the register entry named by
 * VTE-parameter CO-type-identifier for this FEPCO. ISO/IEC
 * 9040:1997 §3.3.66, §14.2 c; ISO/IEC 9041-1:1997 §12.2.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FEC ::= ANY -- field entry condition
 * ```
 */
export type FEC = _Element;
export const _decode_FEC = $._decodeAny;
export const _encode_FEC = $._encodeAny;

/* eslint-enable */
