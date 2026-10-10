/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargeUnitTimeInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeUnitTimeInterval  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type ChargeUnitTimeInterval = OCTET_STRING; // OctetStringType
export const _decode_ChargeUnitTimeInterval = $._decodeOctetString;
export const _encode_ChargeUnitTimeInterval = $._encodeOctetString;


/* eslint-enable */
