/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BodyPartSequenceNumber
 * @description
 * 
 * Which body part a security label applies to, in the order the originator
 * encoded the body. Omitted when every body part is labelled, because the label
 * sequence then matches the body sequence. Edition 2 does not say whether the
 * first body part is numbered 0 or 1. STANAG 4406 (Ed. 2), Annex A, A1.16.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BodyPartSequenceNumber  ::=  INTEGER
 * ```
 */
export
type BodyPartSequenceNumber = INTEGER;
export const _decode_BodyPartSequenceNumber: $.ASN1Decoder<BodyPartSequenceNumber> = $._decodeInteger;
export const _encode_BodyPartSequenceNumber: $.ASN1Encoder<BodyPartSequenceNumber> = $._encodeInteger;


/* eslint-enable */
