/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GenericName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericName  ::= 
 *   OCTET STRING
 * ```
 */
export
type GenericName = OCTET_STRING; // OctetStringType

export
const _decode_GenericName: $.ASN1Decoder<GenericName> = $._decodeOctetString;

export
const _encode_GenericName: $.ASN1Encoder<GenericName> = $._encodeOctetString;

/* eslint-enable */
