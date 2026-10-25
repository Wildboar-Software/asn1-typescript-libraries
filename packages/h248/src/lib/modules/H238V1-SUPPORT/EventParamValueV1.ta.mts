/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventParamValueV1
 * @description
 * 
 * The single octet-string value of a version 1 event parameter
 * (`doc/h248v1support.asn1`). Version 3 uses a sequence of octet strings
 * (`EventParamValues`).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParamValueV1  ::=  OCTET STRING
 * ```
 */
export
type EventParamValueV1 = OCTET_STRING; // OctetStringType
export const _decode_EventParamValueV1: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;
export const _encode_EventParamValueV1: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
