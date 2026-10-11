/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * Stand-in for symbols imported from IPMultimediaPDU (ETSI TS 102 232-5).
 * That module is not part of this package. Each value is kept as the
 * encoded ASN.1 element so the surrounding CHOICE can still be encoded
 * and decoded.
 */

export type IPMMCC = _Element;
export const _decode_IPMMCC: $.ASN1Decoder<IPMMCC> = $._decodeAny;
export const _encode_IPMMCC: $.ASN1Encoder<IPMMCC> = $._encodeAny;

export type IPMMIRI = _Element;
export const _decode_IPMMIRI: $.ASN1Decoder<IPMMIRI> = $._decodeAny;
export const _encode_IPMMIRI: $.ASN1Encoder<IPMMIRI> = $._encodeAny;

/* eslint-enable */
