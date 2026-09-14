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
 * @summary AlarmAckRule
 * @description
 * 
 * Acknowledgement required for
 * EventNotifications from a notification enrollment on a monitored
 * condition. none/simple = ack allowed not required; ack-active =
 * required for transitions to active; ack-all = required for active and
 * idle. ISO 9506-1:2003 §21.1.1.13.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmAckRule  ::=  INTEGER {
 *     none             (0),
 *     simple           (1),
 *     ack-active       (2),
 *     ack-all          (3)
 * } (0..3)
 * ```
 */
export
type AlarmAckRule = INTEGER;

/**
 * @summary AlarmAckRule_none
 * @description
 *
 * Ack allowed, not required; received ack does not change &ackState. ISO
 * 9506-1:2003 §21.1.1.13.1.
 *
 * @constant
 * @type {number}
 */
export
const AlarmAckRule_none: AlarmAckRule = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_none
 * @description
 *
 * Ack allowed, not required; received ack does not change &ackState. ISO
 * 9506-1:2003 §21.1.1.13.1.
 *
 * @constant
 * @type {number}
 */
export
const none: AlarmAckRule = AlarmAckRule_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_simple
 * @description
 *
 * Ack allowed, not required; ack of a transition to active updates &ackState.
 * ISO 9506-1:2003 §21.1.1.13.2.
 *
 * @constant
 * @type {number}
 */
export
const AlarmAckRule_simple: AlarmAckRule = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_simple
 * @description
 *
 * Ack allowed, not required; ack of a transition to active updates &ackState.
 * ISO 9506-1:2003 §21.1.1.13.2.
 *
 * @constant
 * @type {number}
 */
export
const simple: AlarmAckRule = AlarmAckRule_simple; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_ack_active
 * @description
 *
 * Ack required for transitions to active; optional otherwise. ISO 9506-1:2003
 * §21.1.1.13.3.
 *
 * @constant
 * @type {number}
 */
export
const AlarmAckRule_ack_active: AlarmAckRule = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_ack_active
 * @description
 *
 * Ack required for transitions to active; optional otherwise. ISO 9506-1:2003
 * §21.1.1.13.3.
 *
 * @constant
 * @type {number}
 */
export
const ack_active: AlarmAckRule = AlarmAckRule_ack_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_ack_all
 * @description
 *
 * Ack required; acks of active or idle transitions update &ackState. ISO
 * 9506-1:2003 §21.1.1.13.4.
 *
 * @constant
 * @type {number}
 */
export
const AlarmAckRule_ack_all: AlarmAckRule = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_ack_all
 * @description
 *
 * Ack required; acks of active or idle transitions update &ackState. ISO
 * 9506-1:2003 §21.1.1.13.4.
 *
 * @constant
 * @type {number}
 */
export
const ack_all: AlarmAckRule = AlarmAckRule_ack_all; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AlarmAckRule = $._decodeInteger;
export const _encode_AlarmAckRule = $._encodeInteger;


/* eslint-enable */
