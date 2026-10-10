/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LCLS_Negotiation
 * @description
 *
 * Requests MSC-B to indicate LCLS (3GPP TS 29.205 clause B.2.1.4). Allowed
 * combinations of bits 0 and 1 are in 3GPP TS 29.205. Bits 2-7 shall be ignored
 * if received and not understood. (3GPP TS 29.002 V19.1.0 clauses 7.6.5.22 and
 * 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCLS-Negotiation ::=  BIT STRING {
 *     permission-indicator-not-allowed-bit    (0),
 *     permission-indicator-spare-bit    (1)} (SIZE (2..8))
 * ```
 */
export
type LCLS_Negotiation = BIT_STRING;

/**
 * @summary LCLS_Negotiation_permission_indicator_not_allowed_bit
 * @description
 *
 * Permission-indicator not-allowed bit; combinations with bit 1 are in 3GPP TS
 * 29.205. (3GPP TS 29.002 V19.1.0 clauses 7.6.5.22 and 17.7.1)
 *
 * @constant
 */
export
const LCLS_Negotiation_permission_indicator_not_allowed_bit: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary permission_indicator_not_allowed_bit
 * @description
 *
 * Permission-indicator not-allowed bit; combinations with bit 1 are in 3GPP TS
 * 29.205. (3GPP TS 29.002 V19.1.0 clauses 7.6.5.22 and 17.7.1)
 *
 * @constant
 */
export
const permission_indicator_not_allowed_bit: number = LCLS_Negotiation_permission_indicator_not_allowed_bit; /* SHORT_NAMED_BIT */

/**
 * @summary LCLS_Negotiation_permission_indicator_spare_bit
 * @description
 *
 * Spare permission-indicator bit (3GPP TS 29.205). (3GPP TS 29.002 V19.1.0
 * clause 17.7.1)
 *
 * @constant
 */
export
const LCLS_Negotiation_permission_indicator_spare_bit: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary permission_indicator_spare_bit
 * @description
 *
 * Spare permission-indicator bit (3GPP TS 29.205). (3GPP TS 29.002 V19.1.0
 * clause 17.7.1)
 *
 * @constant
 */
export
const permission_indicator_spare_bit: number = LCLS_Negotiation_permission_indicator_spare_bit; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) LCLS_Negotiation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LCLS_Negotiation = (el: _Element): LCLS_Negotiation => {
    const value = $._decodeBitString(el);
    if (value.length < 2 || value.length > 8) {
        throw new ASN1SizeError("LCLS_Negotiation violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) LCLS_Negotiation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCLS_Negotiation, encoded as an ASN.1 Element.
 */
export const _encode_LCLS_Negotiation = $._encodeBitString;


/* eslint-enable */
