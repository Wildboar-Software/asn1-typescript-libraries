/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CDVTDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDVTDescriptor  ::= 
 *   OCTET STRING
 * ```
 */
export
type CDVTDescriptor = OCTET_STRING; // OctetStringType

export
const _decode_CDVTDescriptor: $.ASN1Decoder<CDVTDescriptor> = $._decodeOctetString;

export
const _encode_CDVTDescriptor: $.ASN1Encoder<CDVTDescriptor> = $._encodeOctetString;

/* eslint-enable */
