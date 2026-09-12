/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OperationState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationState  ::=  INTEGER {
 *    idle                             (0),
 *    loaded                           (1),
 *    ready                            (2),
 *    executing                        (3),
 *    motion-paused                    (4),
 *    manualInterventionRequired       (5) } (0..5)
 * ```
 */
export
type OperationState = INTEGER;

/**
 * @summary OperationState_idle
 * @constant
 * @type {number}
 */
export
const OperationState_idle: OperationState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_idle
 * @constant
 * @type {number}
 */
export
const idle: OperationState = OperationState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_loaded
 * @constant
 * @type {number}
 */
export
const OperationState_loaded: OperationState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_loaded
 * @constant
 * @type {number}
 */
export
const loaded: OperationState = OperationState_loaded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_ready
 * @constant
 * @type {number}
 */
export
const OperationState_ready: OperationState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_ready
 * @constant
 * @type {number}
 */
export
const ready: OperationState = OperationState_ready; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_executing
 * @constant
 * @type {number}
 */
export
const OperationState_executing: OperationState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_executing
 * @constant
 * @type {number}
 */
export
const executing: OperationState = OperationState_executing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_motion_paused
 * @constant
 * @type {number}
 */
export
const OperationState_motion_paused: OperationState = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_motion_paused
 * @constant
 * @type {number}
 */
export
const motion_paused: OperationState = OperationState_motion_paused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_manualInterventionRequired
 * @constant
 * @type {number}
 */
export
const OperationState_manualInterventionRequired: OperationState = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_manualInterventionRequired
 * @constant
 * @type {number}
 */
export
const manualInterventionRequired: OperationState = OperationState_manualInterventionRequired; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_OperationState = $._decodeInteger;
export const _encode_OperationState = $._encodeInteger;


/* eslint-enable */
