/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GenericNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericNumber  ::= 
 *   OCTET STRING
 * ```
 */
export
type GenericNumber = OCTET_STRING; // OctetStringType

export
const _decode_GenericNumber: $.ASN1Decoder<GenericNumber> = $._decodeOctetString;

export
const _encode_GenericNumber: $.ASN1Encoder<GenericNumber> = $._encodeOctetString;

/* eslint-enable */
