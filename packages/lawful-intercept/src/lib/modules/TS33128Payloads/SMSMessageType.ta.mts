/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSMessageType
 * @description
 * 
 * See table 6.2.5.3-4.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSMessageType  ::=  ENUMERATED
 * {
 *     deliver(1),
 *     deliverReportAck(2),
 *     deliverReportError(3),
 *     statusReport(4),
 *     command(5),
 *     submit(6),
 *     submitReportAck(7),
 *     submitReportError(8),
 *     reserved(9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMSMessageType {
    deliver = 1,
    deliverReportAck = 2,
    deliverReportError = 3,
    statusReport = 4,
    command = 5,
    submit = 6,
    submitReportAck = 7,
    submitReportError = 8,
    reserved = 9,
}

/**
 * @summary SMSMessageType
 * @description
 * 
 * See table 6.2.5.3-4.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSMessageType  ::=  ENUMERATED
 * {
 *     deliver(1),
 *     deliverReportAck(2),
 *     deliverReportError(3),
 *     statusReport(4),
 *     command(5),
 *     submit(6),
 *     submitReportAck(7),
 *     submitReportError(8),
 *     reserved(9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMSMessageType = _enum_for_SMSMessageType;

/**
 * @summary SMSMessageType
 * @description
 * 
 * See table 6.2.5.3-4.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSMessageType  ::=  ENUMERATED
 * {
 *     deliver(1),
 *     deliverReportAck(2),
 *     deliverReportError(3),
 *     statusReport(4),
 *     command(5),
 *     submit(6),
 *     submitReportAck(7),
 *     submitReportError(8),
 *     reserved(9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMSMessageType: typeof _enum_for_SMSMessageType = _enum_for_SMSMessageType;

/**
 * @summary SMSMessageType_deliver
 * @constant
 * @type {number}
 */
export
const SMSMessageType_deliver: _enum_for_SMSMessageType.deliver = SMSMessageType.deliver; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliver
 * @constant
 * @type {number}
 */
export
const deliver: _enum_for_SMSMessageType.deliver = SMSMessageType.deliver; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_deliverReportAck
 * @constant
 * @type {number}
 */
export
const SMSMessageType_deliverReportAck: _enum_for_SMSMessageType.deliverReportAck = SMSMessageType.deliverReportAck; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliverReportAck
 * @constant
 * @type {number}
 */
export
const deliverReportAck: _enum_for_SMSMessageType.deliverReportAck = SMSMessageType.deliverReportAck; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_deliverReportError
 * @constant
 * @type {number}
 */
export
const SMSMessageType_deliverReportError: _enum_for_SMSMessageType.deliverReportError = SMSMessageType.deliverReportError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliverReportError
 * @constant
 * @type {number}
 */
export
const deliverReportError: _enum_for_SMSMessageType.deliverReportError = SMSMessageType.deliverReportError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_statusReport
 * @constant
 * @type {number}
 */
export
const SMSMessageType_statusReport: _enum_for_SMSMessageType.statusReport = SMSMessageType.statusReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary statusReport
 * @constant
 * @type {number}
 */
export
const statusReport: _enum_for_SMSMessageType.statusReport = SMSMessageType.statusReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_command
 * @constant
 * @type {number}
 */
export
const SMSMessageType_command: _enum_for_SMSMessageType.command = SMSMessageType.command; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary command
 * @constant
 * @type {number}
 */
export
const command: _enum_for_SMSMessageType.command = SMSMessageType.command; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_submit
 * @constant
 * @type {number}
 */
export
const SMSMessageType_submit: _enum_for_SMSMessageType.submit = SMSMessageType.submit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submit
 * @constant
 * @type {number}
 */
export
const submit: _enum_for_SMSMessageType.submit = SMSMessageType.submit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_submitReportAck
 * @constant
 * @type {number}
 */
export
const SMSMessageType_submitReportAck: _enum_for_SMSMessageType.submitReportAck = SMSMessageType.submitReportAck; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitReportAck
 * @constant
 * @type {number}
 */
export
const submitReportAck: _enum_for_SMSMessageType.submitReportAck = SMSMessageType.submitReportAck; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_submitReportError
 * @constant
 * @type {number}
 */
export
const SMSMessageType_submitReportError: _enum_for_SMSMessageType.submitReportError = SMSMessageType.submitReportError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitReportError
 * @constant
 * @type {number}
 */
export
const submitReportError: _enum_for_SMSMessageType.submitReportError = SMSMessageType.submitReportError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_reserved
 * @constant
 * @type {number}
 */
export
const SMSMessageType_reserved: _enum_for_SMSMessageType.reserved = SMSMessageType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: _enum_for_SMSMessageType.reserved = SMSMessageType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMSMessageType: $.ASN1Decoder<SMSMessageType> = $._decodeEnumerated;
export const _encode_SMSMessageType: $.ASN1Encoder<SMSMessageType> = $._encodeEnumerated;


/* eslint-enable */
