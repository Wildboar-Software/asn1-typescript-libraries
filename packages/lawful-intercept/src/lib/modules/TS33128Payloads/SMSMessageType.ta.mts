/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSMessageType
 * @description
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
const SMSMessageType_deliver: SMSMessageType = SMSMessageType.deliver; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliver
 * @constant
 * @type {number}
 */
export
const deliver: SMSMessageType = SMSMessageType.deliver; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_deliverReportAck
 * @constant
 * @type {number}
 */
export
const SMSMessageType_deliverReportAck: SMSMessageType = SMSMessageType.deliverReportAck; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliverReportAck
 * @constant
 * @type {number}
 */
export
const deliverReportAck: SMSMessageType = SMSMessageType.deliverReportAck; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_deliverReportError
 * @constant
 * @type {number}
 */
export
const SMSMessageType_deliverReportError: SMSMessageType = SMSMessageType.deliverReportError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliverReportError
 * @constant
 * @type {number}
 */
export
const deliverReportError: SMSMessageType = SMSMessageType.deliverReportError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_statusReport
 * @constant
 * @type {number}
 */
export
const SMSMessageType_statusReport: SMSMessageType = SMSMessageType.statusReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary statusReport
 * @constant
 * @type {number}
 */
export
const statusReport: SMSMessageType = SMSMessageType.statusReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_command
 * @constant
 * @type {number}
 */
export
const SMSMessageType_command: SMSMessageType = SMSMessageType.command; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary command
 * @constant
 * @type {number}
 */
export
const command: SMSMessageType = SMSMessageType.command; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_submit
 * @constant
 * @type {number}
 */
export
const SMSMessageType_submit: SMSMessageType = SMSMessageType.submit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submit
 * @constant
 * @type {number}
 */
export
const submit: SMSMessageType = SMSMessageType.submit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_submitReportAck
 * @constant
 * @type {number}
 */
export
const SMSMessageType_submitReportAck: SMSMessageType = SMSMessageType.submitReportAck; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitReportAck
 * @constant
 * @type {number}
 */
export
const submitReportAck: SMSMessageType = SMSMessageType.submitReportAck; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_submitReportError
 * @constant
 * @type {number}
 */
export
const SMSMessageType_submitReportError: SMSMessageType = SMSMessageType.submitReportError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitReportError
 * @constant
 * @type {number}
 */
export
const submitReportError: SMSMessageType = SMSMessageType.submitReportError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSMessageType_reserved
 * @constant
 * @type {number}
 */
export
const SMSMessageType_reserved: SMSMessageType = SMSMessageType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: SMSMessageType = SMSMessageType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SMSMessageType: $.ASN1Decoder<SMSMessageType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSMessageType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSMessageType (el: _Element): SMSMessageType {
    if (!_cached_decoder_for_SMSMessageType) { _cached_decoder_for_SMSMessageType = $._decodeEnumerated; }
    return _cached_decoder_for_SMSMessageType(el);
}

let _cached_encoder_for_SMSMessageType: $.ASN1Encoder<SMSMessageType> | null = null;

/**
 * @summary Encodes a(n) SMSMessageType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSMessageType, encoded as an ASN.1 Element.
 */
export
function _encode_SMSMessageType (value: SMSMessageType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSMessageType) { _cached_encoder_for_SMSMessageType = $._encodeEnumerated; }
    return _cached_encoder_for_SMSMessageType(value, elGetter);
}


/* eslint-enable */
