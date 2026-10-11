/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AllowedServices
 * @description
 *
 * firstServiceAllowed (0) is networkSignalInfo; secondServiceAllowed (1) is
 * networkSignalInfo2. Other bits discarded. See 3GPP TS 23.172 (3GPP TS 29.002
 * V19.1.0 clauses 10.1.3 and 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllowedServices  ::=  BIT STRING {
 *     firstServiceAllowed    (0),
 *     secondServiceAllowed    (1) } (SIZE (2..8))
 * ```
 */
export
type AllowedServices = BIT_STRING;

/**
 * @summary AllowedServices_firstServiceAllowed
 * @description
 *
 * `firstServiceAllowed (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 */
export
const AllowedServices_firstServiceAllowed: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary firstServiceAllowed
 * @description
 *
 * `firstServiceAllowed (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 */
export
const firstServiceAllowed: number = AllowedServices_firstServiceAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary AllowedServices_secondServiceAllowed
 * @description
 *
 * `secondServiceAllowed (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 */
export
const AllowedServices_secondServiceAllowed: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary secondServiceAllowed
 * @description
 *
 * `secondServiceAllowed (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 */
export
const secondServiceAllowed: number = AllowedServices_secondServiceAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) AllowedServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AllowedServices = (el: _Element): AllowedServices => {
    const value = $._decodeBitString(el);
    if (value.length < 2 || value.length > 8) {
        throw new ASN1SizeError("AllowedServices violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AllowedServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedServices, encoded as an ASN.1 Element.
 */
export const _encode_AllowedServices = $._encodeBitString;


/* eslint-enable */
