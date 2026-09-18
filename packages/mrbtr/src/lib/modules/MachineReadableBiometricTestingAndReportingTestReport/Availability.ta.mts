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
 * @summary Availability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Availability  ::=  ENUMERATED {
 *     public      (1),
 *     restricted  (2),
 *     unavailable (3),
 *     superseded  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Availability {
    public_ = 1,
    restricted = 2,
    unavailable = 3,
    superseded = 4,
}

/**
 * @summary Availability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Availability  ::=  ENUMERATED {
 *     public      (1),
 *     restricted  (2),
 *     unavailable (3),
 *     superseded  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Availability = _enum_for_Availability;

/**
 * @summary Availability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Availability  ::=  ENUMERATED {
 *     public      (1),
 *     restricted  (2),
 *     unavailable (3),
 *     superseded  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Availability = _enum_for_Availability;

/**
 * @summary Availability_public_
 * @constant
 * @type {number}
 */
export
const Availability_public_: Availability = Availability.public_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary public_
 * @constant
 * @type {number}
 */
export
const public_: Availability = Availability.public_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Availability_restricted
 * @constant
 * @type {number}
 */
export
const Availability_restricted: Availability = Availability.restricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restricted
 * @constant
 * @type {number}
 */
export
const restricted: Availability = Availability.restricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Availability_unavailable
 * @constant
 * @type {number}
 */
export
const Availability_unavailable: Availability = Availability.unavailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailable
 * @constant
 * @type {number}
 */
export
const unavailable: Availability = Availability.unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Availability_superseded
 * @constant
 * @type {number}
 */
export
const Availability_superseded: Availability = Availability.superseded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary superseded
 * @constant
 * @type {number}
 */
export
const superseded: Availability = Availability.superseded; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) Availability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Availability = $._decodeEnumerated;


/**
 * @summary Encodes a(n) Availability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Availability, encoded as an ASN.1 Element.
 */
export const _encode_Availability = $._encodeEnumerated;


/* eslint-enable */
