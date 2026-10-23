/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectionIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionIdentifier  ::= 
 *   OCTET STRING
 * ```
 */
export
type ConnectionIdentifier = OCTET_STRING; // OctetStringType

export
const _decode_ConnectionIdentifier: $.ASN1Decoder<ConnectionIdentifier> = $._decodeOctetString;

export
const _encode_ConnectionIdentifier: $.ASN1Encoder<ConnectionIdentifier> = $._encodeOctetString;

/* eslint-enable */
