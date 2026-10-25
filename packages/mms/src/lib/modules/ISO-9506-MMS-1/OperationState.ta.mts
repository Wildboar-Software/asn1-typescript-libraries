/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * Companion-standard Operation State (`csr`): VMD `&operationState` for systems
 * (e.g. robots) where the VMD is a single complex machine. Present in Status
 * Response only if `csr` has been negotiated. Named values are those of
 * `VMDState`; ISO 9506-1:2003 does not define
 * idle/loaded/ready/executing/motion-paused individually beyond listing them.
 * VMDStop sets this to `manualInterventionRequired`. ISO 9506-1:2003 §7.2.1.29,
 * §10.2.4, §10.9.2; ISO 9506-2:2003 §10.2.2.
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
 * @description
 *
 * Named value of `VMDState` / OperationState. ISO 9506-1:2003 does not define
 * this enumerant beyond listing it in §7.2.1.29; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const OperationState_idle: 0 = 0 satisfies OperationState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_idle
 * @description
 *
 * Named value of `VMDState` / OperationState. ISO 9506-1:2003 does not define
 * this enumerant beyond listing it in §7.2.1.29; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const idle: 0 = OperationState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_loaded
 * @description
 *
 * Named value of `VMDState` / OperationState. ISO 9506-1:2003 does not define
 * this enumerant beyond listing it in §7.2.1.29; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const OperationState_loaded: 1 = 1 satisfies OperationState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_loaded
 * @description
 *
 * Named value of `VMDState` / OperationState. ISO 9506-1:2003 does not define
 * this enumerant beyond listing it in §7.2.1.29; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const loaded: 1 = OperationState_loaded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_ready
 * @description
 *
 * Named value of `VMDState` / OperationState. ISO 9506-1:2003 does not define
 * this enumerant beyond listing it in §7.2.1.29; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const OperationState_ready: 2 = 2 satisfies OperationState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_ready
 * @description
 *
 * Named value of `VMDState` / OperationState. ISO 9506-1:2003 does not define
 * this enumerant beyond listing it in §7.2.1.29; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const ready: 2 = OperationState_ready; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_executing
 * @description
 *
 * Named value of `VMDState` / OperationState. ISO 9506-1:2003 does not define
 * this enumerant beyond listing it in §7.2.1.29; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const OperationState_executing: 3 = 3 satisfies OperationState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_executing
 * @description
 *
 * Named value of `VMDState` / OperationState. ISO 9506-1:2003 does not define
 * this enumerant beyond listing it in §7.2.1.29; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const executing: 3 = OperationState_executing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_motion_paused
 * @description
 *
 * Named value of `VMDState` / OperationState. ISO 9506-1:2003 does not define
 * this enumerant beyond listing it in §7.2.1.29; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const OperationState_motion_paused: 4 = 4 satisfies OperationState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_motion_paused
 * @description
 *
 * Named value of `VMDState` / OperationState. ISO 9506-1:2003 does not define
 * this enumerant beyond listing it in §7.2.1.29; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const motion_paused: 4 = OperationState_motion_paused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_manualInterventionRequired
 * @description
 *
 * VMDStop sets `&operationState` to this value and requires manual
 * intervention. ISO 9506-1:2003 §7.2.1.29, §10.9.2; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const OperationState_manualInterventionRequired: 5 = 5 satisfies OperationState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_manualInterventionRequired
 * @description
 *
 * VMDStop sets `&operationState` to this value and requires manual
 * intervention. ISO 9506-1:2003 §7.2.1.29, §10.9.2; ISO 9506-2:2003 §10.2.2.
 *
 * @constant
 * @type {number}
 */
export
const manualInterventionRequired: 5 = OperationState_manualInterventionRequired; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_OperationState: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_OperationState: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
