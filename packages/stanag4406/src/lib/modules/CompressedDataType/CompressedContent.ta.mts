/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CompressedContent
 * @description
 * 
 * The compressed octets. For the required X.400 wrapping this is the
 * BER-encoded envelope (P1, P3, or P7), not the unwrapped content. STANAG 4406
 * (Ed. 2), Annex E, clause 4.2.6.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressedContent  ::=  OCTET STRING
 * ```
 */
export
type CompressedContent = OCTET_STRING; // OctetStringType
export const _decode_CompressedContent: $.ASN1Decoder<CompressedContent> = $._decodeOctetString;
export const _encode_CompressedContent: $.ASN1Encoder<CompressedContent> = $._encodeOctetString;


/* eslint-enable */
