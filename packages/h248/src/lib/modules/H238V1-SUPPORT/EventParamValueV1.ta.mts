/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventParamValueV1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParamValueV1  ::=  OCTET STRING
 * ```
 */
export
type EventParamValueV1 = OCTET_STRING; // OctetStringType
export const _decode_EventParamValueV1 = $._decodeOctetString;
export const _encode_EventParamValueV1 = $._encodeOctetString;


/* eslint-enable */
