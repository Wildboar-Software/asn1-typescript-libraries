/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CodressMessage
 * @description
 * 
 * Presence of the heading extension means the message is in codress format: the
 * entire address is encrypted in the text, and the heading carries only what
 * communicators need. Applies only to codress-encrypted messages, which are
 * restricted to a single body part. Absence means the message is not codress.
 *
 * Edition 2 does not assign meanings to the integer. STANAG 4406 (Ed. 2), Annex
 * A, A1.6 and B.110.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CodressMessage  ::=  INTEGER
 * ```
 */
export
type CodressMessage = INTEGER;
export const _decode_CodressMessage: $.ASN1Decoder<CodressMessage> = $._decodeInteger;
export const _encode_CodressMessage: $.ASN1Encoder<CodressMessage> = $._encodeInteger;


/* eslint-enable */
