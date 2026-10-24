/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UnavailabilityPeriodDuration
 * @description
 * 
 * The purpose of UnavailabilityPeriodDuration is to indicate the period
 * duration the UE is unavailable, see TS 24.501 [13] clause 8.2.6.1. Encoded as
 * GPRS Timer 3, see TS 24.008 [95] clause 10.5.7.4a, omitting the first two
 * octets.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.1A.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnavailabilityPeriodDuration  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type UnavailabilityPeriodDuration = OCTET_STRING; // OctetStringType
export const _decode_UnavailabilityPeriodDuration: $.ASN1Decoder<UnavailabilityPeriodDuration> = (el: _Element): UnavailabilityPeriodDuration => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("UnavailabilityPeriodDuration violates SIZE constraint");
    }
    return value;
};
export const _encode_UnavailabilityPeriodDuration: $.ASN1Encoder<UnavailabilityPeriodDuration> = $._encodeOctetString;


/* eslint-enable */
