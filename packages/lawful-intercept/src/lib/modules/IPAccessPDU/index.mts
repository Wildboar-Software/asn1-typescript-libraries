/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * Stand-in for symbols imported from IPAccessPDU (ETSI TS 102 232-3).
 * That module is not part of this package. Each value is kept as the
 * encoded ASN.1 element so the surrounding CHOICE can still be encoded
 * and decoded.
 */

export type IPCC = _Element;
export const _decode_IPCC: $.ASN1Decoder<IPCC> = $._decodeAny;
export const _encode_IPCC: $.ASN1Encoder<IPCC> = $._encodeAny;

export type IPIRI = _Element;
export const _decode_IPIRI: $.ASN1Decoder<IPIRI> = $._decodeAny;
export const _encode_IPIRI: $.ASN1Encoder<IPIRI> = $._encodeAny;

export type IPIRIOnly = _Element;
export const _decode_IPIRIOnly: $.ASN1Decoder<IPIRIOnly> = $._decodeAny;
export const _encode_IPIRIOnly: $.ASN1Encoder<IPIRIOnly> = $._encodeAny;

export type IPIRIPacketReport = _Element;
export const _decode_IPIRIPacketReport: $.ASN1Decoder<IPIRIPacketReport> = $._decodeAny;
export const _encode_IPIRIPacketReport: $.ASN1Encoder<IPIRIPacketReport> = $._encodeAny;

/* eslint-enable */
