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
 * @summary VMDState
 * @description
 * 
 * csr CBB: operational state of a single complex
 * machine (e.g. a robot) represented by this VMD. idle, loaded, ready,
 * executing, motion-paused, manualInterventionRequired. Related to
 * &logicalStatus and &local-Control (Table 6). ISO 9506-1:2003 §7.2.1.29.
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
 * @description
 *
 * csr operational state idle. ISO 9506-1:2003 §7.2.1.29.
 *
 * @constant
 * @type {number}
 */
export
const VMDState_idle = 0 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_idle
 * @description
 *
 * csr operational state idle. ISO 9506-1:2003 §7.2.1.29.
 *
 * @constant
 * @type {number}
 */
export
const idle = VMDState_idle satisfies VMDState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_loaded
 * @description
 *
 * csr operational state loaded. ISO 9506-1:2003 §7.2.1.29.
 *
 * @constant
 * @type {number}
 */
export
const VMDState_loaded = 1 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_loaded
 * @description
 *
 * csr operational state loaded. ISO 9506-1:2003 §7.2.1.29.
 *
 * @constant
 * @type {number}
 */
export
const loaded = VMDState_loaded satisfies VMDState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_ready
 * @description
 *
 * csr operational state ready. ISO 9506-1:2003 §7.2.1.29.
 *
 * @constant
 * @type {number}
 */
export
const VMDState_ready = 2 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_ready
 * @description
 *
 * csr operational state ready. ISO 9506-1:2003 §7.2.1.29.
 *
 * @constant
 * @type {number}
 */
export
const ready = VMDState_ready satisfies VMDState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_executing
 * @description
 *
 * csr operational state executing. ISO 9506-1:2003 §7.2.1.29.
 *
 * @constant
 * @type {number}
 */
export
const VMDState_executing = 3 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_executing
 * @description
 *
 * csr operational state executing. ISO 9506-1:2003 §7.2.1.29.
 *
 * @constant
 * @type {number}
 */
export
const executing = VMDState_executing satisfies VMDState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_motion_paused
 * @description
 *
 * csr operational state motion-paused. ISO 9506-1:2003 §7.2.1.29.
 *
 * @constant
 * @type {number}
 */
export
const VMDState_motion_paused = 4 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_motion_paused
 * @description
 *
 * csr operational state motion-paused. ISO 9506-1:2003 §7.2.1.29.
 *
 * @constant
 * @type {number}
 */
export
const motion_paused = VMDState_motion_paused satisfies VMDState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_manualInterventionRequired
 * @description
 *
 * csr operational state requiring manual intervention. ISO 9506-1:2003
 * §7.2.1.29, Table 6.
 *
 * @constant
 * @type {number}
 */
export
const VMDState_manualInterventionRequired = 5 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_manualInterventionRequired
 * @description
 *
 * csr operational state requiring manual intervention. ISO 9506-1:2003
 * §7.2.1.29, Table 6.
 *
 * @constant
 * @type {number}
 */
export
const manualInterventionRequired = VMDState_manualInterventionRequired satisfies VMDState; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_VMDState = $._decodeInteger;
export const _encode_VMDState = $._encodeInteger;


/* eslint-enable */
