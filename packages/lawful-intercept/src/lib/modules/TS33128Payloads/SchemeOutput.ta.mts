/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SchemeOutput
 * @description
 * 
 * Contains the characters resulting as the output of the permanent identifier
 * with the protection scheme applied. See TS 23.003 [19] clause 2.2B.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchemeOutput  ::=  OCTET STRING
 * ```
 */
export
type SchemeOutput = OCTET_STRING; // OctetStringType
export const _decode_SchemeOutput: $.ASN1Decoder<SchemeOutput> = $._decodeOctetString;
export const _encode_SchemeOutput: $.ASN1Encoder<SchemeOutput> = $._encodeOctetString;


/* eslint-enable */
