/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary STSIInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * STSIInformation  ::= 
 *   OCTET STRING
 * ```
 */
export
type STSIInformation = OCTET_STRING; // OctetStringType

export
const _decode_STSIInformation: $.ASN1Decoder<STSIInformation> = $._decodeOctetString;

export
const _encode_STSIInformation: $.ASN1Encoder<STSIInformation> = $._encodeOctetString;

/* eslint-enable */
