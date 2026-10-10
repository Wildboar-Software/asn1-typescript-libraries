/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceIndicator
 * @description
 *
 * BIT STRING: `clir-invoked (0)`, `camel-invoked (1)`. Bits 2–31 ignored if not
 * understood (3GPP TS 29.002 V19.1.0 clause 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceIndicator  ::=  BIT STRING {
 *     clir-invoked (0),
 *     camel-invoked (1)} (SIZE(2..32))
 * ```
 */
export
type ServiceIndicator = BIT_STRING;

/**
 * @summary ServiceIndicator_clir_invoked
 * @description
 *
 * `clir-invoked (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.4).
 *
 * @constant
 */
export
const ServiceIndicator_clir_invoked: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary clir_invoked
 * @description
 *
 * `clir-invoked (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.4).
 *
 * @constant
 */
export
const clir_invoked: number = ServiceIndicator_clir_invoked; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceIndicator_camel_invoked
 * @description
 *
 * `camel-invoked (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.4).
 *
 * @constant
 */
export
const ServiceIndicator_camel_invoked: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary camel_invoked
 * @description
 *
 * `camel-invoked (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.4).
 *
 * @constant
 */
export
const camel_invoked: number = ServiceIndicator_camel_invoked; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ServiceIndicator = (el: _Element): ServiceIndicator => {
    const value = $._decodeBitString(el);
    if (value.length < 2 || value.length > 32) {
        throw new ASN1SizeError("ServiceIndicator violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) ServiceIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceIndicator, encoded as an ASN.1 Element.
 */
export const _encode_ServiceIndicator = $._encodeBitString;


/* eslint-enable */
