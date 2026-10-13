/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SchemeOutput
 * @description
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
