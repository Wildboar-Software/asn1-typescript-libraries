/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * Role of the provider (Clause 6.4.2.2): `manufacturer`(1) designs or
 * creates the component; `reseller`(2) packages or resells it;
 * `integrator`(3) may combine components into one atomic component;
 * `other`(4).
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
 * Role of the provider (Clause 6.4.2.2): `manufacturer`(1) designs or
 * creates the component; `reseller`(2) packages or resells it;
 * `integrator`(3) may combine components into one atomic component;
 * `other`(4).
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
 * Role of the provider (Clause 6.4.2.2): `manufacturer`(1) designs or
 * creates the component; `reseller`(2) packages or resells it;
 * `integrator`(3) may combine components into one atomic component;
 * `other`(4).
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
const RoleProvider: typeof _enum_for_RoleProvider = _enum_for_RoleProvider;

/**
 * @summary RoleProvider_manufacturer
 * @description
 *
 * Entity responsible for the design or creation of the component
 * (Clause 6.4.2.2).
 *
 * @constant
 * @type {number}
 */
export
const RoleProvider_manufacturer: _enum_for_RoleProvider.manufacturer = RoleProvider.manufacturer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manufacturer
 * @constant
 * @type {number}
 */
export
const manufacturer: _enum_for_RoleProvider.manufacturer = RoleProvider.manufacturer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoleProvider_reseller
 * @description
 *
 * Entity which packages or resells the component (Clause 6.4.2.2).
 *
 * @constant
 * @type {number}
 */
export
const RoleProvider_reseller: _enum_for_RoleProvider.reseller = RoleProvider.reseller; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reseller
 * @constant
 * @type {number}
 */
export
const reseller: _enum_for_RoleProvider.reseller = RoleProvider.reseller; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoleProvider_integrator
 * @description
 *
 * Entity which may combine components into a single atomic component
 * (Clause 6.4.2.2).
 *
 * @constant
 * @type {number}
 */
export
const RoleProvider_integrator: _enum_for_RoleProvider.integrator = RoleProvider.integrator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary integrator
 * @constant
 * @type {number}
 */
export
const integrator: _enum_for_RoleProvider.integrator = RoleProvider.integrator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoleProvider_other
 * @constant
 * @type {number}
 */
export
const RoleProvider_other: _enum_for_RoleProvider.other = RoleProvider.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: _enum_for_RoleProvider.other = RoleProvider.other; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) RoleProvider
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RoleProvider: $.ASN1Decoder<number> = $._decodeEnumerated;


/**
 * @summary Encodes a(n) RoleProvider into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleProvider, encoded as an ASN.1 Element.
 */
export const _encode_RoleProvider: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
