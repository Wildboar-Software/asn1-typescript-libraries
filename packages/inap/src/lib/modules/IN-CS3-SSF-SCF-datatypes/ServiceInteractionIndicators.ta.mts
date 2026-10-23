/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceInteractionIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInteractionIndicators  ::= 
 *   OCTET STRING
 * ```
 */
export
type ServiceInteractionIndicators = OCTET_STRING; // OctetStringType

export
const _decode_ServiceInteractionIndicators: $.ASN1Decoder<ServiceInteractionIndicators> = $._decodeOctetString;

export
const _encode_ServiceInteractionIndicators: $.ASN1Encoder<ServiceInteractionIndicators> = $._encodeOctetString;

/* eslint-enable */
