/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PulseUnits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PulseUnits  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type PulseUnits = OCTET_STRING; // OctetStringType
export const _decode_PulseUnits = $._decodeOctetString;
export const _encode_PulseUnits = $._encodeOctetString;


/* eslint-enable */
