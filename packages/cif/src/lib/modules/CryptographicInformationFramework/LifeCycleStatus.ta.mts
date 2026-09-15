/* eslint-disable */
import {
    ENUMERATED,
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



export
enum _enum_for_LifeCycleStatus {
    creation = 0,
    init = 1,
    op_activated = 2,
    op_deactivated = 3,
    termination = 4,
    proprietary = 5,
}

/**
 * @summary LifeCycleStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LifeCycleStatus  ::=  ENUMERATED {
 *     creation(0),
 *     init(1),
 *     op-activated(2),
 *     op-deactivated(3),
 *     termination(4),
 *     proprietary(5),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LifeCycleStatus = _enum_for_LifeCycleStatus | ENUMERATED;

/**
 * @summary LifeCycleStatus_creation
 * @constant
 * @type {number}
 */
export
const LifeCycleStatus_creation: LifeCycleStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary creation
 * @constant
 * @type {number}
 */
export
const creation: LifeCycleStatus = LifeCycleStatus_creation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LifeCycleStatus_init
 * @constant
 * @type {number}
 */
export
const LifeCycleStatus_init: LifeCycleStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary init
 * @constant
 * @type {number}
 */
export
const init: LifeCycleStatus = LifeCycleStatus_init; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LifeCycleStatus_op_activated
 * @constant
 * @type {number}
 */
export
const LifeCycleStatus_op_activated: LifeCycleStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary op_activated
 * @constant
 * @type {number}
 */
export
const op_activated: LifeCycleStatus = LifeCycleStatus_op_activated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LifeCycleStatus_op_deactivated
 * @constant
 * @type {number}
 */
export
const LifeCycleStatus_op_deactivated: LifeCycleStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary op_deactivated
 * @constant
 * @type {number}
 */
export
const op_deactivated: LifeCycleStatus = LifeCycleStatus_op_deactivated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LifeCycleStatus_termination
 * @constant
 * @type {number}
 */
export
const LifeCycleStatus_termination: LifeCycleStatus = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termination
 * @constant
 * @type {number}
 */
export
const termination: LifeCycleStatus = LifeCycleStatus_termination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LifeCycleStatus_proprietary
 * @constant
 * @type {number}
 */
export
const LifeCycleStatus_proprietary: LifeCycleStatus = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proprietary
 * @constant
 * @type {number}
 */
export
const proprietary: LifeCycleStatus = LifeCycleStatus_proprietary; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_LifeCycleStatus = $._decodeEnumerated;
export const _encode_LifeCycleStatus = $._encodeEnumerated;


/* eslint-enable */
