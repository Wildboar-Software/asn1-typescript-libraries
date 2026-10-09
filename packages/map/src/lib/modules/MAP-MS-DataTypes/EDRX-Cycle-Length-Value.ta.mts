/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EDRX_Cycle_Length_Value
 * @description
 *
 * eDRX cycle length value, encoded as specified in 3GPP TS 29.272 clause
 * 7.3.216 (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EDRX-Cycle-Length-Value  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type EDRX_Cycle_Length_Value = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) EDRX_Cycle_Length_Value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EDRX_Cycle_Length_Value = (el: _Element): EDRX_Cycle_Length_Value => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("EDRX_Cycle_Length_Value violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) EDRX_Cycle_Length_Value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDRX_Cycle_Length_Value, encoded as an ASN.1 Element.
 */
export const _encode_EDRX_Cycle_Length_Value = $._encodeOctetString;


/* eslint-enable */
