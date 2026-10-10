/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSCSFallbackIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCSFallbackIndicator  ::=  ENUMERATED
 * {
 *     cSFallbackRequired(1),
 *     cSFallbackHighPriority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSCSFallbackIndicator {
    cSFallbackRequired = 1,
    cSFallbackHighPriority = 2,
}

/**
 * @summary EPSCSFallbackIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCSFallbackIndicator  ::=  ENUMERATED
 * {
 *     cSFallbackRequired(1),
 *     cSFallbackHighPriority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSCSFallbackIndicator = _enum_for_EPSCSFallbackIndicator;

/**
 * @summary EPSCSFallbackIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCSFallbackIndicator  ::=  ENUMERATED
 * {
 *     cSFallbackRequired(1),
 *     cSFallbackHighPriority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSCSFallbackIndicator = _enum_for_EPSCSFallbackIndicator;

/**
 * @summary EPSCSFallbackIndicator_cSFallbackRequired
 * @constant
 * @type {number}
 */
export
const EPSCSFallbackIndicator_cSFallbackRequired: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSFallbackRequired
 * @constant
 * @type {number}
 */
export
const cSFallbackRequired: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSCSFallbackIndicator_cSFallbackHighPriority
 * @constant
 * @type {number}
 */
export
const EPSCSFallbackIndicator_cSFallbackHighPriority: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackHighPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSFallbackHighPriority
 * @constant
 * @type {number}
 */
export
const cSFallbackHighPriority: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackHighPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) EPSCSFallbackIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSCSFallbackIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) EPSCSFallbackIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSCSFallbackIndicator, encoded as an ASN.1 Element.
 */
export const _encode_EPSCSFallbackIndicator = $._encodeEnumerated;


/* eslint-enable */
