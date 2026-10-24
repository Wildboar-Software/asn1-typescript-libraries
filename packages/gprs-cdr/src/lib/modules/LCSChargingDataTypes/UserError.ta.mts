/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserError
 * @description
 *
 * Location-service error on an LCS-GMO-CDR when the mobile
 * originated location request failed. Category C on that record:
 * present when a failure happened.
 *
 * TS 32.298 sends this from the responder when the location
 * request has failed or cannot proceed. When present, it takes one
 * of the TS 29.002 values: system failure, data missing,
 * unexpected data value, facility not supported, unidentified
 * subscriber, illegal subscriber, illegal equipment, absent
 * subscriber (diagnostic information may also be provided),
 * unauthorised requesting network, unauthorised LCS client with
 * detailed reason, or position method failure with detailed
 * reason.
 *
 * 3GPP TS 32.271 V12.1.0 clause 6.1.3.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.2.13.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserError   ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type UserError = OCTET_STRING; // OctetStringType

export const _decode_UserError = (el: _Element): UserError => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("UserError violates SIZE constraint");
    }
    return value;
};

export
const _encode_UserError: $.ASN1Encoder<UserError> = $._encodeOctetString;

/* eslint-enable */
