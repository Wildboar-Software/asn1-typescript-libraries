/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SelectedGSM_Algorithm
 * @description
 *
 * GSM algorithm selected by the GSM BSC controlled by MSC-B. Coded as the
 * Algorithm identifier octet from Chosen Encryption Algorithm in 3GPP TS
 * 48.008. A node shall mark only the selected GSM algorithm.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.6.15 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectedGSM-Algorithm  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type SelectedGSM_Algorithm = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) SelectedGSM_Algorithm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SelectedGSM_Algorithm = (el: _Element): SelectedGSM_Algorithm => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("SelectedGSM_Algorithm violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SelectedGSM_Algorithm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectedGSM_Algorithm, encoded as an ASN.1 Element.
 */
export const _encode_SelectedGSM_Algorithm = $._encodeOctetString;


/* eslint-enable */
