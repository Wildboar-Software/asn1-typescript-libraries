/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReferenceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferenceType  ::=  ENUMERATED {
 *   superior(1), subordinate(2), cross(3), nonSpecificSubordinate(4),
 *   supplier(5), master(6), immediateSuperior(7), self(8)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReferenceType {
    superior = 1,
    subordinate = 2,
    cross = 3,
    nonSpecificSubordinate = 4,
    supplier = 5,
    master = 6,
    immediateSuperior = 7,
    self = 8,
}

/**
 * @summary ReferenceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferenceType  ::=  ENUMERATED {
 *   superior(1), subordinate(2), cross(3), nonSpecificSubordinate(4),
 *   supplier(5), master(6), immediateSuperior(7), self(8)}
 * ```
 * 
 * @enum {number}
 */
export
type ReferenceType = _enum_for_ReferenceType;

/**
 * @summary ReferenceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferenceType  ::=  ENUMERATED {
 *   superior(1), subordinate(2), cross(3), nonSpecificSubordinate(4),
 *   supplier(5), master(6), immediateSuperior(7), self(8)}
 * ```
 * 
 * @enum {number}
 */
export
const ReferenceType = _enum_for_ReferenceType;

/**
 * @summary ReferenceType_superior
 * @constant
 * @type {number}
 */
export
const ReferenceType_superior: ReferenceType = ReferenceType.superior; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary superior
 * @constant
 * @type {number}
 */
export
const superior: ReferenceType = ReferenceType.superior; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_subordinate
 * @constant
 * @type {number}
 */
export
const ReferenceType_subordinate: ReferenceType = ReferenceType.subordinate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subordinate
 * @constant
 * @type {number}
 */
export
const subordinate: ReferenceType = ReferenceType.subordinate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_cross
 * @constant
 * @type {number}
 */
export
const ReferenceType_cross: ReferenceType = ReferenceType.cross; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cross
 * @constant
 * @type {number}
 */
export
const cross: ReferenceType = ReferenceType.cross; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_nonSpecificSubordinate
 * @constant
 * @type {number}
 */
export
const ReferenceType_nonSpecificSubordinate: ReferenceType = ReferenceType.nonSpecificSubordinate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonSpecificSubordinate
 * @constant
 * @type {number}
 */
export
const nonSpecificSubordinate: ReferenceType = ReferenceType.nonSpecificSubordinate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_supplier
 * @constant
 * @type {number}
 */
export
const ReferenceType_supplier: ReferenceType = ReferenceType.supplier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supplier
 * @constant
 * @type {number}
 */
export
const supplier: ReferenceType = ReferenceType.supplier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_master
 * @constant
 * @type {number}
 */
export
const ReferenceType_master: ReferenceType = ReferenceType.master; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary master
 * @constant
 * @type {number}
 */
export
const master: ReferenceType = ReferenceType.master; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_immediateSuperior
 * @constant
 * @type {number}
 */
export
const ReferenceType_immediateSuperior: ReferenceType = ReferenceType.immediateSuperior; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediateSuperior
 * @constant
 * @type {number}
 */
export
const immediateSuperior: ReferenceType = ReferenceType.immediateSuperior; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_self
 * @constant
 * @type {number}
 */
export
const ReferenceType_self: ReferenceType = ReferenceType.self; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary self
 * @constant
 * @type {number}
 */
export
const self: ReferenceType = ReferenceType.self; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ReferenceType: $.ASN1Decoder<ReferenceType> = $._decodeEnumerated;

export
const _encode_ReferenceType: $.ASN1Encoder<ReferenceType> = $._encodeEnumerated;

/* eslint-enable */
