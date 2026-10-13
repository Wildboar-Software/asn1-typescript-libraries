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
