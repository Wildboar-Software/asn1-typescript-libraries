/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventParamValue
 * @description
 * 
 * One octet string of a double-wrapped event-parameter value (Annex A, note 3).
 * The octets are the BER encoding of the package type.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParamValue  ::=  OCTET STRING
 * ```
 */
export
type EventParamValue = OCTET_STRING; // OctetStringType
export const _decode_EventParamValue = $._decodeOctetString;
export const _encode_EventParamValue = $._encodeOctetString;


/* eslint-enable */
