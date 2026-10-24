/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingGeodeticLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingGeodeticLocation  ::= 
 *   OCTET STRING
 * ```
 */
export
type CallingGeodeticLocation = OCTET_STRING; // OctetStringType

export
const _decode_CallingGeodeticLocation: $.ASN1Decoder<CallingGeodeticLocation> = $._decodeOctetString;

export
const _encode_CallingGeodeticLocation: $.ASN1Encoder<CallingGeodeticLocation> = $._encodeOctetString;

/* eslint-enable */
