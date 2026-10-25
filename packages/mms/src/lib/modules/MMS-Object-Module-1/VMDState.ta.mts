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
const VMDState_idle: 0 = 0 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

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
const idle: 0 = VMDState_idle; /* SHORT_NAMED_INTEGER_VALUE */

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
const VMDState_loaded: 1 = 1 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

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
const loaded: 1 = VMDState_loaded; /* SHORT_NAMED_INTEGER_VALUE */

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
const VMDState_ready: 2 = 2 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

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
const ready: 2 = VMDState_ready; /* SHORT_NAMED_INTEGER_VALUE */

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
const VMDState_executing: 3 = 3 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

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
const executing: 3 = VMDState_executing; /* SHORT_NAMED_INTEGER_VALUE */

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
const VMDState_motion_paused: 4 = 4 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

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
const motion_paused: 4 = VMDState_motion_paused; /* SHORT_NAMED_INTEGER_VALUE */

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
const VMDState_manualInterventionRequired: 5 = 5 satisfies VMDState; /* LONG_NAMED_INTEGER_VALUE */

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
const manualInterventionRequired: 5 = VMDState_manualInterventionRequired; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_VMDState: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_VMDState: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
