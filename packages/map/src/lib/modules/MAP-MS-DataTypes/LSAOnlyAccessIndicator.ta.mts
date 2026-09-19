/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LSAOnlyAccessIndicator
 * @description
 *
 * Access right outside the subscribed localised service areas: allowed or
 * restricted. (3GPP TS 29.002 V19.1.0 clauses 7.6.3.56 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAOnlyAccessIndicator  ::=  ENUMERATED {
 *     accessOutsideLSAsAllowed  (0),
 *     accessOutsideLSAsRestricted (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LSAOnlyAccessIndicator {
    accessOutsideLSAsAllowed = 0,
    accessOutsideLSAsRestricted = 1,
}

/**
 * @summary LSAOnlyAccessIndicator
 * @description
 *
 * Access right outside the subscribed localised service areas: allowed or
 * restricted. (3GPP TS 29.002 V19.1.0 clauses 7.6.3.56 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAOnlyAccessIndicator  ::=  ENUMERATED {
 *     accessOutsideLSAsAllowed  (0),
 *     accessOutsideLSAsRestricted (1)}
 * ```
 * 
 * @enum {number}
 */
export
type LSAOnlyAccessIndicator = _enum_for_LSAOnlyAccessIndicator;

/**
 * @summary LSAOnlyAccessIndicator
 * @description
 *
 * Access right outside the subscribed localised service areas: allowed or
 * restricted. (3GPP TS 29.002 V19.1.0 clauses 7.6.3.56 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAOnlyAccessIndicator  ::=  ENUMERATED {
 *     accessOutsideLSAsAllowed  (0),
 *     accessOutsideLSAsRestricted (1)}
 * ```
 * 
 * @enum {number}
 */
export
const LSAOnlyAccessIndicator = _enum_for_LSAOnlyAccessIndicator;

/**
 * @summary LSAOnlyAccessIndicator_accessOutsideLSAsAllowed
 * @description
 *
 * Access outside subscribed LSAs is allowed. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.56)
 *
 * @constant
 * @type {number}
 */
export
const LSAOnlyAccessIndicator_accessOutsideLSAsAllowed: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessOutsideLSAsAllowed
 * @description
 *
 * Access outside subscribed LSAs is allowed. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.56)
 *
 * @constant
 * @type {number}
 */
export
const accessOutsideLSAsAllowed: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LSAOnlyAccessIndicator_accessOutsideLSAsRestricted
 * @description
 *
 * Access outside subscribed LSAs is restricted. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.56)
 *
 * @constant
 * @type {number}
 */
export
const LSAOnlyAccessIndicator_accessOutsideLSAsRestricted: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsRestricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessOutsideLSAsRestricted
 * @description
 *
 * Access outside subscribed LSAs is restricted. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.56)
 *
 * @constant
 * @type {number}
 */
export
const accessOutsideLSAsRestricted: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsRestricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) LSAOnlyAccessIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LSAOnlyAccessIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) LSAOnlyAccessIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSAOnlyAccessIndicator, encoded as an ASN.1 Element.
 */
export const _encode_LSAOnlyAccessIndicator = $._encodeEnumerated;


/* eslint-enable */
