/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardGVNS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardGVNS  ::= 
 *   OCTET STRING
 * ```
 */
export
type ForwardGVNS = OCTET_STRING; // OctetStringType

export
const _decode_ForwardGVNS: $.ASN1Decoder<ForwardGVNS> = $._decodeOctetString;

export
const _encode_ForwardGVNS: $.ASN1Encoder<ForwardGVNS> = $._encodeOctetString;

/* eslint-enable */
