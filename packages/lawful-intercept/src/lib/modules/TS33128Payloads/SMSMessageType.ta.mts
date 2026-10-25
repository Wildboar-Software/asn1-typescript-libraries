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
const SMSMessageType = _enum_for_SMSMessageType;

/**
 * @summary SMSMessageType_deliver
 * @constant
 * @type {number}
 */
export
const SMSMessageType_deliver = SMSMessageType.deliver satisfies SMSMessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliver
 * @constant
 * @type {number}
 */
export
const deliver = SMSMessageType.deliver satisfies SMSMessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_deliverReportAck
 * @constant
 * @type {number}
 */
export
const SMSMessageType_deliverReportAck = SMSMessageType.deliverReportAck satisfies SMSMessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliverReportAck
 * @constant
 * @type {number}
 */
export
const deliverReportAck = SMSMessageType.deliverReportAck satisfies SMSMessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_deliverReportError
 * @constant
 * @type {number}
 */
export
const SMSMessageType_deliverReportError = SMSMessageType.deliverReportError satisfies SMSMessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliverReportError
 * @constant
 * @type {number}
 */
export
const deliverReportError = SMSMessageType.deliverReportError satisfies SMSMessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_statusReport
 * @constant
 * @type {number}
 */
export
const SMSMessageType_statusReport = SMSMessageType.statusReport satisfies SMSMessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary statusReport
 * @constant
 * @type {number}
 */
export
const statusReport = SMSMessageType.statusReport satisfies SMSMessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_command
 * @constant
 * @type {number}
 */
export
const SMSMessageType_command = SMSMessageType.command satisfies SMSMessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary command
 * @constant
 * @type {number}
 */
export
const command = SMSMessageType.command satisfies SMSMessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_submit
 * @constant
 * @type {number}
 */
export
const SMSMessageType_submit = SMSMessageType.submit satisfies SMSMessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submit
 * @constant
 * @type {number}
 */
export
const submit = SMSMessageType.submit satisfies SMSMessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_submitReportAck
 * @constant
 * @type {number}
 */
export
const SMSMessageType_submitReportAck = SMSMessageType.submitReportAck satisfies SMSMessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitReportAck
 * @constant
 * @type {number}
 */
export
const submitReportAck = SMSMessageType.submitReportAck satisfies SMSMessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_submitReportError
 * @constant
 * @type {number}
 */
export
const SMSMessageType_submitReportError = SMSMessageType.submitReportError satisfies SMSMessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitReportError
 * @constant
 * @type {number}
 */
export
const submitReportError = SMSMessageType.submitReportError satisfies SMSMessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_reserved
 * @constant
 * @type {number}
 */
export
const SMSMessageType_reserved = SMSMessageType.reserved satisfies SMSMessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved = SMSMessageType.reserved satisfies SMSMessageType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMSMessageType: $.ASN1Decoder<SMSMessageType> = $._decodeEnumerated;
export const _encode_SMSMessageType: $.ASN1Encoder<SMSMessageType> = $._encodeEnumerated;


/* eslint-enable */
