/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPRSCorrelationNumber
 * @description
 * 
 * Correlation number, unique per PDP context. The LEMF uses it to tie CC to
 * IRI, to tie the IRI records of one PDP context together, and to tie a LALS
 * report to the IRI of the triggering event.
 * 
 * Mandatory on PDP-context begin and end records (tables 6.10 and 6.14).
 * Conditional on an enhanced LALS report when the triggering event had one
 * (table 6.9I). A CSCF may place its own correlation value here; the layout is
 * an implementation matter. Annex B.3 allows 8..20 octets and gives the example
 * of a GGSN address plus a charging ID. It is not used for interception at the
 * HSS.
 * 
 * 3GPP TS 33.108, clause 6.1.3 and clause 7.1.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSCorrelationNumber  ::=  OCTET STRING (SIZE(8..20))
 * ```
 */
export
type GPRSCorrelationNumber = OCTET_STRING; // OctetStringType
export const _decode_GPRSCorrelationNumber: $.ASN1Decoder<GPRSCorrelationNumber> = (el: _Element): GPRSCorrelationNumber => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 20) {
        throw new ASN1SizeError("GPRSCorrelationNumber violates SIZE constraint");
    }
    return value;
};
export const _encode_GPRSCorrelationNumber: $.ASN1Encoder<GPRSCorrelationNumber> = $._encodeOctetString;


/* eslint-enable */
