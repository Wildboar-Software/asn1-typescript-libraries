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
 * @summary VMDState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VMDState  ::=  INTEGER {
 *     idle                                         (0),
 *     loaded                                       (1),
 *     ready                                        (2),
 *     executing                                    (3),
 *     motion-paused                                (4),
 *     manualInterventionRequired                   (5)
 * } (0..5)
 * ```
 */
export
type VMDState = INTEGER;

/**
 * @summary VMDState_idle
 * @constant
 * @type {number}
 */
export
const VMDState_idle: VMDState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_idle
 * @constant
 * @type {number}
 */
export
const idle: VMDState = VMDState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_loaded
 * @constant
 * @type {number}
 */
export
const VMDState_loaded: VMDState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_loaded
 * @constant
 * @type {number}
 */
export
const loaded: VMDState = VMDState_loaded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_ready
 * @constant
 * @type {number}
 */
export
const VMDState_ready: VMDState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_ready
 * @constant
 * @type {number}
 */
export
const ready: VMDState = VMDState_ready; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_executing
 * @constant
 * @type {number}
 */
export
const VMDState_executing: VMDState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_executing
 * @constant
 * @type {number}
 */
export
const executing: VMDState = VMDState_executing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_motion_paused
 * @constant
 * @type {number}
 */
export
const VMDState_motion_paused: VMDState = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_motion_paused
 * @constant
 * @type {number}
 */
export
const motion_paused: VMDState = VMDState_motion_paused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_manualInterventionRequired
 * @constant
 * @type {number}
 */
export
const VMDState_manualInterventionRequired: VMDState = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_manualInterventionRequired
 * @constant
 * @type {number}
 */
export
const manualInterventionRequired: VMDState = VMDState_manualInterventionRequired; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_VMDState = (el: _Element): VMDState => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 5) {
        throw new ASN1OverflowError("VMDState violates INTEGER range constraint");
    }
    return value;
};
export const _encode_VMDState = $._encodeInteger;


/* eslint-enable */
