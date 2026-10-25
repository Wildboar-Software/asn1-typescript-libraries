/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SigParamValue
 * @description
 * 
 * One octet string of a double-wrapped signal-parameter value (Annex A, note
 * 3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigParamValue  ::=  OCTET STRING
 * ```
 */
export
type SigParamValue = OCTET_STRING; // OctetStringType
export const _decode_SigParamValue: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;
export const _encode_SigParamValue: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
