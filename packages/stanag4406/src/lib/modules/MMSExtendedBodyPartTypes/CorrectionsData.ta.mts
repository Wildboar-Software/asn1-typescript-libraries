/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CorrectionsData
 * @description
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
