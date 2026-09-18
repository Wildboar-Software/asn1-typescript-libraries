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
 * @summary RoleProvider
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoleProvider  ::=  ENUMERATED {
 *     manufacturer    (1),
 *     reseller        (2),
 *     integrator      (3),
 *     other           (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RoleProvider {
    manufacturer = 1,
    reseller = 2,
    integrator = 3,
    other = 4,
}

/**
 * @summary RoleProvider
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoleProvider  ::=  ENUMERATED {
 *     manufacturer    (1),
 *     reseller        (2),
 *     integrator      (3),
 *     other           (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RoleProvider = _enum_for_RoleProvider;

/**
 * @summary RoleProvider
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoleProvider  ::=  ENUMERATED {
 *     manufacturer    (1),
 *     reseller        (2),
 *     integrator      (3),
 *     other           (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RoleProvider = _enum_for_RoleProvider;

/**
 * @summary RoleProvider_manufacturer
 * @constant
 * @type {number}
 */
export
const RoleProvider_manufacturer: RoleProvider = RoleProvider.manufacturer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manufacturer
 * @constant
 * @type {number}
 */
export
const manufacturer: RoleProvider = RoleProvider.manufacturer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoleProvider_reseller
 * @constant
 * @type {number}
 */
export
const RoleProvider_reseller: RoleProvider = RoleProvider.reseller; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reseller
 * @constant
 * @type {number}
 */
export
const reseller: RoleProvider = RoleProvider.reseller; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoleProvider_integrator
 * @constant
 * @type {number}
 */
export
const RoleProvider_integrator: RoleProvider = RoleProvider.integrator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary integrator
 * @constant
 * @type {number}
 */
export
const integrator: RoleProvider = RoleProvider.integrator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoleProvider_other
 * @constant
 * @type {number}
 */
export
const RoleProvider_other: RoleProvider = RoleProvider.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: RoleProvider = RoleProvider.other; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) RoleProvider
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RoleProvider = $._decodeEnumerated;


/**
 * @summary Encodes a(n) RoleProvider into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleProvider, encoded as an ASN.1 Element.
 */
export const _encode_RoleProvider = $._encodeEnumerated;


/* eslint-enable */
