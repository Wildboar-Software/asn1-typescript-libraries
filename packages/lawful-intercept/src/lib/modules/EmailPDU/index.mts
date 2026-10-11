/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * Stand-in for symbols imported from EmailPDU (ETSI TS 102 232-2).
 * That module is not part of this package. Each value is kept as the
 * encoded ASN.1 element so the surrounding CHOICE can still be encoded
 * and decoded.
 */

export type EmailCC = _Element;
export const _decode_EmailCC: $.ASN1Decoder<EmailCC> = $._decodeAny;
export const _encode_EmailCC: $.ASN1Encoder<EmailCC> = $._encodeAny;

export type EmailIRI = _Element;
export const _decode_EmailIRI: $.ASN1Decoder<EmailIRI> = $._decodeAny;
export const _encode_EmailIRI: $.ASN1Encoder<EmailIRI> = $._encodeAny;

export type MessagingCC = _Element;
export const _decode_MessagingCC: $.ASN1Decoder<MessagingCC> = $._decodeAny;
export const _encode_MessagingCC: $.ASN1Encoder<MessagingCC> = $._encodeAny;

export type MessagingIRI = _Element;
export const _decode_MessagingIRI: $.ASN1Decoder<MessagingIRI> = $._decodeAny;
export const _encode_MessagingIRI: $.ASN1Encoder<MessagingIRI> = $._encodeAny;

export type MessagingMMCC = _Element;
export const _decode_MessagingMMCC: $.ASN1Decoder<MessagingMMCC> = $._decodeAny;
export const _encode_MessagingMMCC: $.ASN1Encoder<MessagingMMCC> = $._encodeAny;

/* eslint-enable */
