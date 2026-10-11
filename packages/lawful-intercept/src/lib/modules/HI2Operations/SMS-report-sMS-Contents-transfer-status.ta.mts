/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SMS_report_sMS_Contents_transfer_status {
    succeed_transfer = 0,
    not_succeed_transfer = 1,
    undefined = 2,
}

/**
 * @summary SMS_report_sMS_Contents_transfer_status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents-transfer-status ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type SMS_report_sMS_Contents_transfer_status = _enum_for_SMS_report_sMS_Contents_transfer_status | ENUMERATED;

/**
 * @summary SMS_report_sMS_Contents_transfer_status_succeed_transfer
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_transfer_status_succeed_transfer: SMS_report_sMS_Contents_transfer_status = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary succeed_transfer
 * @constant
 * @type {number}
 */
export
const succeed_transfer: SMS_report_sMS_Contents_transfer_status = SMS_report_sMS_Contents_transfer_status_succeed_transfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_transfer_status_not_succeed_transfer
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_transfer_status_not_succeed_transfer: SMS_report_sMS_Contents_transfer_status = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_succeed_transfer
 * @constant
 * @type {number}
 */
export
const not_succeed_transfer: SMS_report_sMS_Contents_transfer_status = SMS_report_sMS_Contents_transfer_status_not_succeed_transfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_transfer_status_undefined
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_transfer_status_undefined: SMS_report_sMS_Contents_transfer_status = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export
const undefined: SMS_report_sMS_Contents_transfer_status = SMS_report_sMS_Contents_transfer_status_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SMS_report_sMS_Contents_transfer_status: $.ASN1Decoder<SMS_report_sMS_Contents_transfer_status> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_report_sMS_Contents_transfer_status
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_report_sMS_Contents_transfer_status (el: _Element): SMS_report_sMS_Contents_transfer_status {
    if (!_cached_decoder_for_SMS_report_sMS_Contents_transfer_status) { _cached_decoder_for_SMS_report_sMS_Contents_transfer_status = $._decodeEnumerated; }
    return _cached_decoder_for_SMS_report_sMS_Contents_transfer_status(el);
}

let _cached_encoder_for_SMS_report_sMS_Contents_transfer_status: $.ASN1Encoder<SMS_report_sMS_Contents_transfer_status> | null = null;

/**
 * @summary Encodes a(n) SMS_report_sMS_Contents_transfer_status into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_report_sMS_Contents_transfer_status, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_report_sMS_Contents_transfer_status (value: SMS_report_sMS_Contents_transfer_status, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_report_sMS_Contents_transfer_status) { _cached_encoder_for_SMS_report_sMS_Contents_transfer_status = $._encodeEnumerated; }
    return _cached_encoder_for_SMS_report_sMS_Contents_transfer_status(value, elGetter);
}


/* eslint-enable */
