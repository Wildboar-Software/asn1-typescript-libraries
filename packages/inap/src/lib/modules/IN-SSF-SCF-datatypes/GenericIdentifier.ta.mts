/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GenericIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericIdentifier  ::= 
 *   OCTET STRING
 * ```
 */
export
type GenericIdentifier = OCTET_STRING; // OctetStringType

export
const _decode_GenericIdentifier: $.ASN1Decoder<GenericIdentifier> = $._decodeOctetString;

export
const _encode_GenericIdentifier: $.ASN1Encoder<GenericIdentifier> = $._encodeOctetString;

/* eslint-enable */
