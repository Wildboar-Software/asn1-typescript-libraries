/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Route
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Route  ::= 
 *   OCTET STRING
 * ```
 */
export
type Route = OCTET_STRING; // OctetStringType

export
const _decode_Route: $.ASN1Decoder<Route> = $._decodeOctetString;

export
const _encode_Route: $.ASN1Encoder<Route> = $._encodeOctetString;

/* eslint-enable */
