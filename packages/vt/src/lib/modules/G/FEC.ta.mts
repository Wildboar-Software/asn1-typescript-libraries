/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FEC
 * @description
 *
 * Field entry condition. The syntax is found in the register entry
 * pointed to by the VTE-parameter CO-type-identifier for this FEPCO.
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
