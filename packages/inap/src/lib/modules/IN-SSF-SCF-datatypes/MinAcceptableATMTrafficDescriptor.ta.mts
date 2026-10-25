/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MinAcceptableATMTrafficDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MinAcceptableATMTrafficDescriptor  ::= 
 *   OCTET STRING
 * ```
 */
export
type MinAcceptableATMTrafficDescriptor = OCTET_STRING; // OctetStringType

export
const _decode_MinAcceptableATMTrafficDescriptor: $.ASN1Decoder<MinAcceptableATMTrafficDescriptor> = $._decodeOctetString;

export
const _encode_MinAcceptableATMTrafficDescriptor: $.ASN1Encoder<MinAcceptableATMTrafficDescriptor> = $._encodeOctetString;

/* eslint-enable */
