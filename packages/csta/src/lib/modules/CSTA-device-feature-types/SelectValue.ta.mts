/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SelectValue
 * @description
 *
 * Route-selection preference (used with Route Select). ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectValue  ::=  ENUMERATED
 * {    normal                 (0),
 *     leastCost             (1),
 *     emergency             (2),
 *     aCD                 (3),
 *     userDefined             (4) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SelectValue {
    normal = 0,
    leastCost = 1,
    emergency = 2,
    aCD = 3,
    userDefined = 4,
}

/**
 * @summary SelectValue
 * @description
 *
 * Route-selection preference (used with Route Select). ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectValue  ::=  ENUMERATED
 * {    normal                 (0),
 *     leastCost             (1),
 *     emergency             (2),
 *     aCD                 (3),
 *     userDefined             (4) }
 * ```
 * 
 * @enum {number}
 */
export
type SelectValue = _enum_for_SelectValue;

/**
 * @summary SelectValue
 * @description
 *
 * Route-selection preference (used with Route Select). ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectValue  ::=  ENUMERATED
 * {    normal                 (0),
 *     leastCost             (1),
 *     emergency             (2),
 *     aCD                 (3),
 *     userDefined             (4) }
 * ```
 * 
 * @enum {number}
 */
export
const SelectValue = _enum_for_SelectValue;

/**
 * @summary SelectValue_normal
 * @description Normal route selection. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SelectValue_normal: SelectValue = SelectValue.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @description Alias of {@link SelectValue_normal}.
 * @constant
 * @type {number}
 */
export
const normal: SelectValue = SelectValue.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SelectValue_leastCost
 * @description Least-cost route selection. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SelectValue_leastCost: SelectValue = SelectValue.leastCost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary leastCost
 * @description Alias of {@link SelectValue_leastCost}.
 * @constant
 * @type {number}
 */
export
const leastCost: SelectValue = SelectValue.leastCost; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SelectValue_emergency
 * @description Emergency route selection. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SelectValue_emergency: SelectValue = SelectValue.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @description Alias of {@link SelectValue_emergency}.
 * @constant
 * @type {number}
 */
export
const emergency: SelectValue = SelectValue.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SelectValue_aCD
 * @description ACD route selection. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SelectValue_aCD: SelectValue = SelectValue.aCD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCD
 * @description Alias of {@link SelectValue_aCD}.
 * @constant
 * @type {number}
 */
export
const aCD: SelectValue = SelectValue.aCD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SelectValue_userDefined
 * @description User-defined route selection. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SelectValue_userDefined: SelectValue = SelectValue.userDefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userDefined
 * @description Alias of {@link SelectValue_userDefined}.
 * @constant
 * @type {number}
 */
export
const userDefined: SelectValue = SelectValue.userDefined; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SelectValue: $.ASN1Decoder<SelectValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SelectValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SelectValue (el: _Element): SelectValue {
    if (!_cached_decoder_for_SelectValue) { _cached_decoder_for_SelectValue = $._decodeEnumerated; }
    return _cached_decoder_for_SelectValue(el);
}

let _cached_encoder_for_SelectValue: $.ASN1Encoder<SelectValue> | null = null;

/**
 * @summary Encodes a(n) SelectValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectValue, encoded as an ASN.1 Element.
 */
export
function _encode_SelectValue (value: SelectValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SelectValue) { _cached_encoder_for_SelectValue = $._encodeEnumerated; }
    return _cached_encoder_for_SelectValue(value, elGetter);
}


/* eslint-enable */
