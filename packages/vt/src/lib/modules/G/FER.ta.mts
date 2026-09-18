/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FER
 * @description
 *
 * Field entry reaction. The syntax is found in the register entry
 * pointed to by the VTE-parameter CO-type-identifier for this FEPCO.
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
