/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * Stand-in for symbols imported from ILHIPDU (ETSI TS 103 462).
 * That module is not part of this package. Each value is kept as the
 * encoded ASN.1 element so the surrounding CHOICE can still be encoded
 * and decoded.
 */

export type ILHIPayload = _Element;
export const _decode_ILHIPayload: $.ASN1Decoder<ILHIPayload> = $._decodeAny;
export const _encode_ILHIPayload: $.ASN1Encoder<ILHIPayload> = $._encodeAny;

/* eslint-enable */
