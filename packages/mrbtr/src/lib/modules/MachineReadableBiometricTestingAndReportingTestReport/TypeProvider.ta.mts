/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TypeProvider
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeProvider  ::=  ENUMERATED {
 *     non-profit  (1),
 *     university  (2),
 *     corporation (3),
 *     individual  (4),
 *     government  (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TypeProvider {
    non_profit = 1,
    university = 2,
    corporation = 3,
    individual = 4,
    government = 5,
}

/**
 * @summary TypeProvider
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeProvider  ::=  ENUMERATED {
 *     non-profit  (1),
 *     university  (2),
 *     corporation (3),
 *     individual  (4),
 *     government  (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TypeProvider = _enum_for_TypeProvider;

/**
 * @summary TypeProvider
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeProvider  ::=  ENUMERATED {
 *     non-profit  (1),
 *     university  (2),
 *     corporation (3),
 *     individual  (4),
 *     government  (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TypeProvider = _enum_for_TypeProvider;

/**
 * @summary TypeProvider_non_profit
 * @constant
 * @type {number}
 */
export
const TypeProvider_non_profit: TypeProvider = TypeProvider.non_profit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_profit
 * @constant
 * @type {number}
 */
export
const non_profit: TypeProvider = TypeProvider.non_profit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeProvider_university
 * @constant
 * @type {number}
 */
export
const TypeProvider_university: TypeProvider = TypeProvider.university; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary university
 * @constant
 * @type {number}
 */
export
const university: TypeProvider = TypeProvider.university; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeProvider_corporation
 * @constant
 * @type {number}
 */
export
const TypeProvider_corporation: TypeProvider = TypeProvider.corporation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary corporation
 * @constant
 * @type {number}
 */
export
const corporation: TypeProvider = TypeProvider.corporation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeProvider_individual
 * @constant
 * @type {number}
 */
export
const TypeProvider_individual: TypeProvider = TypeProvider.individual; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary individual
 * @constant
 * @type {number}
 */
export
const individual: TypeProvider = TypeProvider.individual; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeProvider_government
 * @constant
 * @type {number}
 */
export
const TypeProvider_government: TypeProvider = TypeProvider.government; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary government
 * @constant
 * @type {number}
 */
export
const government: TypeProvider = TypeProvider.government; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) TypeProvider
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TypeProvider = $._decodeEnumerated;


/**
 * @summary Encodes a(n) TypeProvider into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeProvider, encoded as an ASN.1 Element.
 */
export const _encode_TypeProvider = $._encodeEnumerated;


/* eslint-enable */
