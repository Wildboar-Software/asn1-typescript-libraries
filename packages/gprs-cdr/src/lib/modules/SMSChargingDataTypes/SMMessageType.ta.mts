/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMMessageType
 * @description
 *
 * The message that triggered generation of this charging information (table
 * 6.3.1.2.1). Clause 5.1.3 lists the service events an operator may configure
 * as triggers: simple submission, enhanced submission, origination retry,
 * delivery, delivery report, termination, termination retry, SM service
 * request, and the T4 events of clause 5.1.4.
 *
 * On an SC-SMO-T4 CDR the field indicates MO-SMS via T4 submission (table
 * 6.1.3.6.1). TS 32.274 does not say which enumerated value that indication
 * is.
 *
 * 3GPP TS 32.274 V19.1.0 clause 5.1.3 and table 6.3.1.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMMessageType  ::=  ENUMERATED {
 *    submission          ( 0 ),
 *    deliveryReport      ( 1 ),
 *    sMServiceRequest    ( 2 ),
 *    delivery            ( 3 ),
 *    t4DeviceTrigger     ( 4 ),
 *    sMDeviceTrigger     ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMMessageType {
    submission = 0,
    deliveryReport = 1,
    sMServiceRequest = 2,
    delivery = 3,
    t4DeviceTrigger = 4,
    sMDeviceTrigger = 5,
}

/**
 * @summary SMMessageType
 * @description
 *
 * The message that triggered generation of this charging information (table
 * 6.3.1.2.1). Clause 5.1.3 lists the service events an operator may configure
 * as triggers: simple submission, enhanced submission, origination retry,
 * delivery, delivery report, termination, termination retry, SM service
 * request, and the T4 events of clause 5.1.4.
 *
 * On an SC-SMO-T4 CDR the field indicates MO-SMS via T4 submission (table
 * 6.1.3.6.1). TS 32.274 does not say which enumerated value that indication
 * is.
 *
 * 3GPP TS 32.274 V19.1.0 clause 5.1.3 and table 6.3.1.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMMessageType  ::=  ENUMERATED {
 *    submission          ( 0 ),
 *    deliveryReport      ( 1 ),
 *    sMServiceRequest    ( 2 ),
 *    delivery            ( 3 ),
 *    t4DeviceTrigger     ( 4 ),
 *    sMDeviceTrigger     ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SMMessageType = _enum_for_SMMessageType;

/**
 * @summary SMMessageType
 * @description
 *
 * The message that triggered generation of this charging information (table
 * 6.3.1.2.1). Clause 5.1.3 lists the service events an operator may configure
 * as triggers: simple submission, enhanced submission, origination retry,
 * delivery, delivery report, termination, termination retry, SM service
 * request, and the T4 events of clause 5.1.4.
 *
 * On an SC-SMO-T4 CDR the field indicates MO-SMS via T4 submission (table
 * 6.1.3.6.1). TS 32.274 does not say which enumerated value that indication
 * is.
 *
 * 3GPP TS 32.274 V19.1.0 clause 5.1.3 and table 6.3.1.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMMessageType  ::=  ENUMERATED {
 *    submission          ( 0 ),
 *    deliveryReport      ( 1 ),
 *    sMServiceRequest    ( 2 ),
 *    delivery            ( 3 ),
 *    t4DeviceTrigger     ( 4 ),
 *    sMDeviceTrigger     ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SMMessageType: typeof _enum_for_SMMessageType = _enum_for_SMMessageType;

/**
 * @summary SMMessageType_submission
 * @description
 *
 * Submission. Clause 5.1.3 charges simple submission on reception at the SMS
 * node, enhanced submission on completion of handling at the SMS node, and an
 * origination retry after a failed first handling.
 *
 * @constant
 * @type {number}
 */
export
const SMMessageType_submission: _enum_for_SMMessageType.submission = SMMessageType.submission; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submission
 * @constant
 * @type {number}
 */
export
const submission: _enum_for_SMMessageType.submission = SMMessageType.submission; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMMessageType_deliveryReport
 * @description
 *
 * A delivery report. Clause 5.2.2.3 uses the SMS-delivery procedures, because
 * the report is carried in a new short message. Message reference, SM status,
 * and discharge time apply to delivery-report charging.
 *
 * @constant
 * @type {number}
 */
export
const SMMessageType_deliveryReport: _enum_for_SMMessageType.deliveryReport = SMMessageType.deliveryReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliveryReport
 * @constant
 * @type {number}
 */
export
const deliveryReport: _enum_for_SMMessageType.deliveryReport = SMMessageType.deliveryReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMMessageType_sMServiceRequest
 * @description
 *
 * An SM service request, such as forwarding or SM copy, carried in an
 * SM-Submit or a MAP-Forward-SM. Clause 5.3.2.9 charges that service with its
 * own debit, independent of authorization for the submission. The SM Service
 * Type element of table 6.3.1.2.1 is a different field and is unsupported on
 * the offline CDRs (table 6.3.1A.1).
 *
 * @constant
 * @type {number}
 */
export
const SMMessageType_sMServiceRequest: _enum_for_SMMessageType.sMServiceRequest = SMMessageType.sMServiceRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMServiceRequest
 * @constant
 * @type {number}
 */
export
const sMServiceRequest: _enum_for_SMMessageType.sMServiceRequest = SMMessageType.sMServiceRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMMessageType_delivery
 * @description
 *
 * Delivery from the SMS node, including a retry of a previously failed and
 * stored short message (clauses 5.1.3 and 5.2.2.2). Termination and
 * termination retry are the application-to-person cases of the same delivery
 * (clause 5.1.3).
 *
 * @constant
 * @type {number}
 */
export
const SMMessageType_delivery: _enum_for_SMMessageType.delivery = SMMessageType.delivery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery
 * @constant
 * @type {number}
 */
export
const delivery: _enum_for_SMMessageType.delivery = SMMessageType.delivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMMessageType_t4DeviceTrigger
 * @description
 *
 * Named for a T4 device trigger (clause 5.1.4). SC-SMO-T4 requires the message
 * type to indicate MO-SMS via T4 submission, and TS 32.274 does not say
 * whether this value is that indication.
 *
 * @constant
 * @type {number}
 */
export
const SMMessageType_t4DeviceTrigger: _enum_for_SMMessageType.t4DeviceTrigger = SMMessageType.t4DeviceTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t4DeviceTrigger
 * @constant
 * @type {number}
 */
export
const t4DeviceTrigger: _enum_for_SMMessageType.t4DeviceTrigger = SMMessageType.t4DeviceTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMMessageType_sMDeviceTrigger
 * @description
 *
 * Named for an SM device trigger. Clause 5.2.2.4.2 requires the delivery
 * charging event to include a device-triggering indication. TS 32.274 does not
 * say that this value is that indication.
 *
 * @constant
 * @type {number}
 */
export
const SMMessageType_sMDeviceTrigger: _enum_for_SMMessageType.sMDeviceTrigger = SMMessageType.sMDeviceTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMDeviceTrigger
 * @constant
 * @type {number}
 */
export
const sMDeviceTrigger: _enum_for_SMMessageType.sMDeviceTrigger = SMMessageType.sMDeviceTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMMessageType: $.ASN1Decoder<SMMessageType> = $._decodeEnumerated;

export
const _encode_SMMessageType: $.ASN1Encoder<SMMessageType> = $._encodeEnumerated;

/* eslint-enable */
