/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * Stand-in for symbols imported from PstnIsdnPDU (ETSI TS 102 232-6).
 * That module is not part of this package. Each value is kept as the
 * encoded ASN.1 element so the surrounding CHOICE can still be encoded
 * and decoded.
 */

export type PstnIsdnCC = _Element;
export const _decode_PstnIsdnCC: $.ASN1Decoder<PstnIsdnCC> = $._decodeAny;
export const _encode_PstnIsdnCC: $.ASN1Encoder<PstnIsdnCC> = $._encodeAny;

export type PstnIsdnIRI = _Element;
export const _decode_PstnIsdnIRI: $.ASN1Decoder<PstnIsdnIRI> = $._decodeAny;
export const _encode_PstnIsdnIRI: $.ASN1Encoder<PstnIsdnIRI> = $._encodeAny;

/* eslint-enable */
