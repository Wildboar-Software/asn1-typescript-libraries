/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PerformanceManagementErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerformanceManagementErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     performanceLimitExceeded             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PerformanceManagementErrors {
    generic = 1,
    performanceLimitExceeded = 2,
}

/**
 * @summary PerformanceManagementErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerformanceManagementErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     performanceLimitExceeded             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
type PerformanceManagementErrors = _enum_for_PerformanceManagementErrors;

/**
 * @summary PerformanceManagementErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerformanceManagementErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     performanceLimitExceeded             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
const PerformanceManagementErrors = _enum_for_PerformanceManagementErrors;

/**
 * @summary PerformanceManagementErrors_generic
 * @constant
 * @type {number}
 */
export
const PerformanceManagementErrors_generic: PerformanceManagementErrors = PerformanceManagementErrors.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @constant
 * @type {number}
 */
export
const generic: PerformanceManagementErrors = PerformanceManagementErrors.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerformanceManagementErrors_performanceLimitExceeded
 * @constant
 * @type {number}
 */
export
const PerformanceManagementErrors_performanceLimitExceeded: PerformanceManagementErrors = PerformanceManagementErrors.performanceLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary performanceLimitExceeded
 * @constant
 * @type {number}
 */
export
const performanceLimitExceeded: PerformanceManagementErrors = PerformanceManagementErrors.performanceLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PerformanceManagementErrors: $.ASN1Decoder<PerformanceManagementErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerformanceManagementErrors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PerformanceManagementErrors (el: _Element): PerformanceManagementErrors {
    if (!_cached_decoder_for_PerformanceManagementErrors) { _cached_decoder_for_PerformanceManagementErrors = $._decodeEnumerated; }
    return _cached_decoder_for_PerformanceManagementErrors(el);
}

let _cached_encoder_for_PerformanceManagementErrors: $.ASN1Encoder<PerformanceManagementErrors> | null = null;

/**
 * @summary Encodes a(n) PerformanceManagementErrors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerformanceManagementErrors, encoded as an ASN.1 Element.
 */
export
function _encode_PerformanceManagementErrors (value: PerformanceManagementErrors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PerformanceManagementErrors) { _cached_encoder_for_PerformanceManagementErrors = $._encodeEnumerated; }
    return _cached_encoder_for_PerformanceManagementErrors(value, elGetter);
}


/* eslint-enable */
