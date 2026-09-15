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
 * @summary ProgramInvocationState
 * @description
 * 
 * Principal PI states, plus
 * non-existent before creation. idle = ready but not started; running =
 * executing; stopped = paused mid-execution; unrunnable = finished and
 * not reusable. starting/stopping/resuming/resetting are transitory
 * service states. ISO 9506-1:2003 §12.1.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgramInvocationState  ::=  INTEGER {
 *     non-existent            (0),
 *     unrunnable              (1),
 *     idle                    (2),
 *     running                 (3),
 *     stopped                 (4),
 *     starting                (5),
 *     stopping                (6),
 *     resuming                (7),
 *     resetting               (8)
 * } (0..8)
 * ```
 */
export
type ProgramInvocationState = INTEGER;

/**
 * @summary ProgramInvocationState_non_existent
 * @description
 *
 * Before the PI is created. ISO 9506-1:2003 §12.1.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_non_existent: ProgramInvocationState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_non_existent
 * @description
 *
 * Before the PI is created. ISO 9506-1:2003 §12.1.1.2.
 *
 * @constant
 * @type {number}
 */
export
const non_existent: ProgramInvocationState = ProgramInvocationState_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_unrunnable
 * @description
 *
 * May no longer execute but is not yet deleted (non-reusable completion, MMS,
 * or local). ISO 9506-1:2003 §12.1.1.2.1.
 *
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_unrunnable: ProgramInvocationState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_unrunnable
 * @description
 *
 * May no longer execute but is not yet deleted (non-reusable completion, MMS,
 * or local). ISO 9506-1:2003 §12.1.1.2.1.
 *
 * @constant
 * @type {number}
 */
export
const unrunnable: ProgramInvocationState = ProgramInvocationState_unrunnable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_idle
 * @description
 *
 * Ready for execution but not yet started. ISO 9506-1:2003 §12.1.1.2.2.
 *
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_idle: ProgramInvocationState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_idle
 * @description
 *
 * Ready for execution but not yet started. ISO 9506-1:2003 §12.1.1.2.2.
 *
 * @constant
 * @type {number}
 */
export
const idle: ProgramInvocationState = ProgramInvocationState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_running
 * @description
 *
 * Executing; usually changing subordinate Domain contents. ISO 9506-1:2003
 * §12.1.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_running: ProgramInvocationState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_running
 * @description
 *
 * Executing; usually changing subordinate Domain contents. ISO 9506-1:2003
 * §12.1.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const running: ProgramInvocationState = ProgramInvocationState_running; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_stopped
 * @description
 *
 * Paused mid-execution; Domains no longer changing due to this PI. ISO
 * 9506-1:2003 §12.1.1.2.4.
 *
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_stopped: ProgramInvocationState = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_stopped
 * @description
 *
 * Paused mid-execution; Domains no longer changing due to this PI. ISO
 * 9506-1:2003 §12.1.1.2.4.
 *
 * @constant
 * @type {number}
 */
export
const stopped: ProgramInvocationState = ProgramInvocationState_stopped; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_starting
 * @description
 *
 * Transitory idle→running (Start indication until response). ISO 9506-1:2003
 * §12.1.1.2.5.
 *
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_starting: ProgramInvocationState = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_starting
 * @description
 *
 * Transitory idle→running (Start indication until response). ISO 9506-1:2003
 * §12.1.1.2.5.
 *
 * @constant
 * @type {number}
 */
export
const starting: ProgramInvocationState = ProgramInvocationState_starting; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_stopping
 * @description
 *
 * Transitory running→stopped (Stop indication until response). ISO 9506-1:2003
 * §12.1.1.2.6.
 *
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_stopping: ProgramInvocationState = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_stopping
 * @description
 *
 * Transitory running→stopped (Stop indication until response). ISO 9506-1:2003
 * §12.1.1.2.6.
 *
 * @constant
 * @type {number}
 */
export
const stopping: ProgramInvocationState = ProgramInvocationState_stopping; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_resuming
 * @description
 *
 * Transitory stopped→running (Resume indication until response). ISO
 * 9506-1:2003 §12.1.1.2.7.
 *
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_resuming: ProgramInvocationState = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_resuming
 * @description
 *
 * Transitory stopped→running (Resume indication until response). ISO
 * 9506-1:2003 §12.1.1.2.7.
 *
 * @constant
 * @type {number}
 */
export
const resuming: ProgramInvocationState = ProgramInvocationState_resuming; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_resetting
 * @description
 *
 * Transitory stopped→idle (Reset indication until response). ISO 9506-1:2003
 * §12.1.1.2.8.
 *
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_resetting: ProgramInvocationState = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_resetting
 * @description
 *
 * Transitory stopped→idle (Reset indication until response). ISO 9506-1:2003
 * §12.1.1.2.8.
 *
 * @constant
 * @type {number}
 */
export
const resetting: ProgramInvocationState = ProgramInvocationState_resetting; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProgramInvocationState = $._decodeInteger;
export const _encode_ProgramInvocationState = $._encodeInteger;


/* eslint-enable */
