/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CorrelationNumber
 * @description
 * 
 * Correlation number for one target, one MBMS service, and one MBMS session.
 * Eight to twenty octets.
 * 
 * Correlates IRI records of that service usage. Subscription activation,
 * modification, and termination are not correlated, and their records do not
 * carry this value (clause 9.1.4).
 * 
 * 3GPP TS 33.108, clause 9.1.4 and annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationNumber  ::=  OCTET STRING (SIZE(8..20))
 * ```
 */
export
type CorrelationNumber = OCTET_STRING; // OctetStringType
export const _decode_CorrelationNumber: $.ASN1Decoder<CorrelationNumber> = (el: _Element): CorrelationNumber => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 20) {
        throw new ASN1SizeError("CorrelationNumber violates SIZE constraint");
    }
    return value;
};
export const _encode_CorrelationNumber: $.ASN1Encoder<CorrelationNumber> = $._encodeOctetString;


/* eslint-enable */
