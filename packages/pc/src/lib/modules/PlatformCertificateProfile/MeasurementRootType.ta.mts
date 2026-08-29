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
 * @summary MeasurementRootType
 * @description
 *
 * Root of Trust for Measurement types implemented as part of the
 * platform TBB. A static RTM is required; a dynamic RTM is
 * optional. TPMs or RTMs might leverage lower-layer RTMs to
 * virtualize platform capabilities. TCG Platform Certificate
 * Profile v1.1 r19 §3.1.1.
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
 * Root of Trust for Measurement types implemented as part of the
 * platform TBB. A static RTM is required; a dynamic RTM is
 * optional. TPMs or RTMs might leverage lower-layer RTMs to
 * virtualize platform capabilities. TCG Platform Certificate
 * Profile v1.1 r19 §3.1.1.
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
 * Root of Trust for Measurement types implemented as part of the
 * platform TBB. A static RTM is required; a dynamic RTM is
 * optional. TPMs or RTMs might leverage lower-layer RTMs to
 * virtualize platform capabilities. TCG Platform Certificate
 * Profile v1.1 r19 §3.1.1.
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
 * @description
 *
 * Static RTM. Required as part of the TBB. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_static_: MeasurementRootType = MeasurementRootType.static_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary static_
 * @description
 *
 * Static RTM. Required as part of the TBB. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const static_: MeasurementRootType = MeasurementRootType.static_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MeasurementRootType_dynamic
 * @description
 *
 * Dynamic RTM. Optional. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_dynamic: MeasurementRootType = MeasurementRootType.dynamic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic
 * @description
 *
 * Dynamic RTM. Optional. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const dynamic: MeasurementRootType = MeasurementRootType.dynamic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MeasurementRootType_nonHost
 * @description
 *
 * Non-host RTM. The profile lists this value but does not define
 * further semantics. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_nonHost: MeasurementRootType = MeasurementRootType.nonHost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonHost
 * @description
 *
 * Non-host RTM. The profile lists this value but does not define
 * further semantics. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const nonHost: MeasurementRootType = MeasurementRootType.nonHost; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MeasurementRootType_hybrid
 * @description
 *
 * Measurement root capable of both static and dynamic. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_hybrid: MeasurementRootType = MeasurementRootType.hybrid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybrid
 * @description
 *
 * Measurement root capable of both static and dynamic. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const hybrid: MeasurementRootType = MeasurementRootType.hybrid; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MeasurementRootType_physical
 * @description
 *
 * Root anchored by a physical TPM. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_physical: MeasurementRootType = MeasurementRootType.physical; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary physical
 * @description
 *
 * Root anchored by a physical TPM. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const physical: MeasurementRootType = MeasurementRootType.physical; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MeasurementRootType_virtual
 * @description
 *
 * TPM is virtualized (possibly running in a VMM). §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_virtual: MeasurementRootType = MeasurementRootType.virtual; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary virtual
 * @description
 *
 * TPM is virtualized (possibly running in a VMM). §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const virtual: MeasurementRootType = MeasurementRootType.virtual; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_MeasurementRootType = $._decodeEnumerated;


export const _encode_MeasurementRootType = $._encodeEnumerated;


/* eslint-enable */
