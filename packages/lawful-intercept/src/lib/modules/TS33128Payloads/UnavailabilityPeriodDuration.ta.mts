/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
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
export const _decode_UnavailabilityPeriodDuration: $.ASN1Decoder<UnavailabilityPeriodDuration> = (el: _Element): UnavailabilityPeriodDuration => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("UnavailabilityPeriodDuration violates SIZE constraint");
    }
    return value;
};
export const _encode_UnavailabilityPeriodDuration: $.ASN1Encoder<UnavailabilityPeriodDuration> = $._encodeOctetString;


/* eslint-enable */
