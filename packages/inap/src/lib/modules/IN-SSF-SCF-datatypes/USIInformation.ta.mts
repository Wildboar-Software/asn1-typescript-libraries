/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary USIInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * USIInformation  ::= 
 *   OCTET STRING
 * ```
 */
export
type USIInformation = OCTET_STRING; // OctetStringType

export
const _decode_USIInformation: $.ASN1Decoder<USIInformation> = $._decodeOctetString;

export
const _encode_USIInformation: $.ASN1Encoder<USIInformation> = $._encodeOctetString;

/* eslint-enable */
