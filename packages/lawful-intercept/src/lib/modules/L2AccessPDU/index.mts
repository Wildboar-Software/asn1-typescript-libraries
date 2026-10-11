/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * Stand-in for symbols imported from L2AccessPDU (ETSI TS 102 232-4).
 * That module is not part of this package. Each value is kept as the
 * encoded ASN.1 element so the surrounding CHOICE can still be encoded
 * and decoded.
 */

export type L2CC = _Element;
export const _decode_L2CC: $.ASN1Decoder<L2CC> = $._decodeAny;
export const _encode_L2CC: $.ASN1Encoder<L2CC> = $._encodeAny;

export type L2IRI = _Element;
export const _decode_L2IRI: $.ASN1Decoder<L2IRI> = $._decodeAny;
export const _encode_L2IRI: $.ASN1Encoder<L2IRI> = $._encodeAny;

export type L2IRIOnly = _Element;
export const _decode_L2IRIOnly: $.ASN1Decoder<L2IRIOnly> = $._decodeAny;
export const _encode_L2IRIOnly: $.ASN1Encoder<L2IRIOnly> = $._encodeAny;

/* eslint-enable */
