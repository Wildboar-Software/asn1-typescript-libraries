/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CorrectionsData
 * @description
 * 
 * Correction text for information that may be in another body part. Used only
 * when interworking with ACP 127. STANAG 4406 (Ed. 2), Annex A, clause
 * 7.3.12.2, B1.2, and B.114.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrectionsData  ::=  IA5String
 * ```
 */
export
type CorrectionsData = IA5String; // IA5String
export const _decode_CorrectionsData: $.ASN1Decoder<CorrectionsData> = $._decodeIA5String;
export const _encode_CorrectionsData: $.ASN1Encoder<CorrectionsData> = $._encodeIA5String;


/* eslint-enable */
