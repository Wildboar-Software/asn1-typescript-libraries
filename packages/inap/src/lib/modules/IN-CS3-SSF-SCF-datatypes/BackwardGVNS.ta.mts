/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BackwardGVNS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BackwardGVNS  ::= 
 *   OCTET STRING
 * ```
 */
export
type BackwardGVNS = OCTET_STRING; // OctetStringType

export
const _decode_BackwardGVNS: $.ASN1Decoder<BackwardGVNS> = $._decodeOctetString;

export
const _encode_BackwardGVNS: $.ASN1Encoder<BackwardGVNS> = $._encodeOctetString;

/* eslint-enable */
