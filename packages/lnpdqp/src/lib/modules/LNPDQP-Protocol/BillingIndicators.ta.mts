/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BillingIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BillingIndicators  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type BillingIndicators = OCTET_STRING; // OctetStringType
export const _decode_BillingIndicators = $._decodeOctetString;
export const _encode_BillingIndicators = $._encodeOctetString;


/* eslint-enable */
