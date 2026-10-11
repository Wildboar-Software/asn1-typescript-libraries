/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallDiversionTreatmentIndicator
 * @description
 *
 * One octet: xxxx xx01 allowed, xxxx xx10 not allowed; network default allowed
 * (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallDiversionTreatmentIndicator  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type CallDiversionTreatmentIndicator = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) CallDiversionTreatmentIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CallDiversionTreatmentIndicator = (el: _Element): CallDiversionTreatmentIndicator => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("CallDiversionTreatmentIndicator violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CallDiversionTreatmentIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallDiversionTreatmentIndicator, encoded as an ASN.1 Element.
 */
export const _encode_CallDiversionTreatmentIndicator = $._encodeOctetString;


/* eslint-enable */
