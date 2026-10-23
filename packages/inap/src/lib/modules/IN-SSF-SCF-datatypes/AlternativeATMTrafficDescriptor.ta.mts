/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlternativeATMTrafficDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternativeATMTrafficDescriptor  ::= 
 *   OCTET STRING
 * ```
 */
export
type AlternativeATMTrafficDescriptor = OCTET_STRING; // OctetStringType

export
const _decode_AlternativeATMTrafficDescriptor: $.ASN1Decoder<AlternativeATMTrafficDescriptor> = $._decodeOctetString;

export
const _encode_AlternativeATMTrafficDescriptor: $.ASN1Encoder<AlternativeATMTrafficDescriptor> = $._encodeOctetString;

/* eslint-enable */
