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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary MeasurementRootType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MeasurementRootType  ::=  ENUMERATED {
 *     static (0),
 *     dynamic (1),
 *     nonHost (2),
 *     hybrid (3),
 *     physical (4),
 *     virtual (5) }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_MeasurementRootType {
    static_ = 0,
    dynamic = 1,
    nonHost = 2,
    hybrid = 3,
    physical = 4,
    virtual = 5,
}

/**
 * @summary MeasurementRootType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MeasurementRootType  ::=  ENUMERATED {
 *     static (0),
 *     dynamic (1),
 *     nonHost (2),
 *     hybrid (3),
 *     physical (4),
 *     virtual (5) }
 * ```
 *
 * @enum {number}
 */
export
type MeasurementRootType = _enum_for_MeasurementRootType;

/**
 * @summary MeasurementRootType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MeasurementRootType  ::=  ENUMERATED {
 *     static (0),
 *     dynamic (1),
 *     nonHost (2),
 *     hybrid (3),
 *     physical (4),
 *     virtual (5) }
 * ```
 *
 * @enum {number}
 */
export
const MeasurementRootType = _enum_for_MeasurementRootType;

/**
 * @summary MeasurementRootType_static_
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_static_: MeasurementRootType = MeasurementRootType.static_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary static_
 * @constant
 * @type {number}
 */
export
const static_: MeasurementRootType = MeasurementRootType.static_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MeasurementRootType_dynamic
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_dynamic: MeasurementRootType = MeasurementRootType.dynamic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic
 * @constant
 * @type {number}
 */
export
const dynamic: MeasurementRootType = MeasurementRootType.dynamic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MeasurementRootType_nonHost
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_nonHost: MeasurementRootType = MeasurementRootType.nonHost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonHost
 * @constant
 * @type {number}
 */
export
const nonHost: MeasurementRootType = MeasurementRootType.nonHost; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MeasurementRootType_hybrid
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_hybrid: MeasurementRootType = MeasurementRootType.hybrid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybrid
 * @constant
 * @type {number}
 */
export
const hybrid: MeasurementRootType = MeasurementRootType.hybrid; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MeasurementRootType_physical
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_physical: MeasurementRootType = MeasurementRootType.physical; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary physical
 * @constant
 * @type {number}
 */
export
const physical: MeasurementRootType = MeasurementRootType.physical; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MeasurementRootType_virtual
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_virtual: MeasurementRootType = MeasurementRootType.virtual; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary virtual
 * @constant
 * @type {number}
 */
export
const virtual: MeasurementRootType = MeasurementRootType.virtual; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_MeasurementRootType = $._decodeEnumerated;


export const _encode_MeasurementRootType = $._encodeEnumerated;


/* eslint-enable */
