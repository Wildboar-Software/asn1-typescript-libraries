/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UnavailabilityPeriodDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnavailabilityPeriodDuration  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type UnavailabilityPeriodDuration = OCTET_STRING; // OctetStringType

export const _decode_UnavailabilityPeriodDuration: $.ASN1Decoder<UnavailabilityPeriodDuration> = $._decodeOctetString;

export const _encode_UnavailabilityPeriodDuration: $.ASN1Encoder<UnavailabilityPeriodDuration> = $._encodeOctetString;


/* eslint-enable */
