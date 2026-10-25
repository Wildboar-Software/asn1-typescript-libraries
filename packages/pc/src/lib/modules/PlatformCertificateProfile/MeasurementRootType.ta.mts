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
const _enum_for_MeasurementRootType = {
    static_: 0,
    dynamic: 1,
    nonHost: 2,
    hybrid: 3,
    physical: 4,
    virtual: 5,
} as const;

export
type _enum_for_MeasurementRootType = (typeof _enum_for_MeasurementRootType)[keyof typeof _enum_for_MeasurementRootType];

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
const MeasurementRootType_static_ = MeasurementRootType.static_ satisfies MeasurementRootType; /* LONG_NAMED_ENUMERATED_VALUE */

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
const static_ = MeasurementRootType.static_ satisfies MeasurementRootType; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const MeasurementRootType_dynamic = MeasurementRootType.dynamic satisfies MeasurementRootType; /* LONG_NAMED_ENUMERATED_VALUE */

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
const dynamic = MeasurementRootType.dynamic satisfies MeasurementRootType; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const MeasurementRootType_nonHost = MeasurementRootType.nonHost satisfies MeasurementRootType; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nonHost = MeasurementRootType.nonHost satisfies MeasurementRootType; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const MeasurementRootType_hybrid = MeasurementRootType.hybrid satisfies MeasurementRootType; /* LONG_NAMED_ENUMERATED_VALUE */

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
const hybrid = MeasurementRootType.hybrid satisfies MeasurementRootType; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const MeasurementRootType_physical = MeasurementRootType.physical satisfies MeasurementRootType; /* LONG_NAMED_ENUMERATED_VALUE */

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
const physical = MeasurementRootType.physical satisfies MeasurementRootType; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const MeasurementRootType_virtual = MeasurementRootType.virtual satisfies MeasurementRootType; /* LONG_NAMED_ENUMERATED_VALUE */

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
const virtual = MeasurementRootType.virtual satisfies MeasurementRootType; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_MeasurementRootType(el: _Element): MeasurementRootType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case MeasurementRootType.static_: return MeasurementRootType.static_;
        case MeasurementRootType.dynamic: return MeasurementRootType.dynamic;
        case MeasurementRootType.nonHost: return MeasurementRootType.nonHost;
        case MeasurementRootType.hybrid: return MeasurementRootType.hybrid;
        case MeasurementRootType.physical: return MeasurementRootType.physical;
        case MeasurementRootType.virtual: return MeasurementRootType.virtual;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for MeasurementRootType.",
                el,
            );
    }
}


export const _encode_MeasurementRootType: $.ASN1Encoder<MeasurementRootType> = $._encodeEnumerated as $.ASN1Encoder<MeasurementRootType>;


/* eslint-enable */
