/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SMS_report_sMS_Contents_sms_initiator {
    target = 0,
    server = 1,
    undefined_party = 2,
}

/**
 * @summary SMS_report_sMS_Contents_sms_initiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents-sms-initiator ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type SMS_report_sMS_Contents_sms_initiator = _enum_for_SMS_report_sMS_Contents_sms_initiator | ENUMERATED;

/**
 * @summary SMS_report_sMS_Contents_sms_initiator_target
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_target: SMS_report_sMS_Contents_sms_initiator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary target
 * @constant
 * @type {number}
 */
export
const target: SMS_report_sMS_Contents_sms_initiator = SMS_report_sMS_Contents_sms_initiator_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_sms_initiator_server
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_server: SMS_report_sMS_Contents_sms_initiator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary server
 * @constant
 * @type {number}
 */
export
const server: SMS_report_sMS_Contents_sms_initiator = SMS_report_sMS_Contents_sms_initiator_server; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_sms_initiator_undefined_party
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_undefined_party: SMS_report_sMS_Contents_sms_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_party
 * @constant
 * @type {number}
 */
export
const undefined_party: SMS_report_sMS_Contents_sms_initiator = SMS_report_sMS_Contents_sms_initiator_undefined_party; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SMS_report_sMS_Contents_sms_initiator: $.ASN1Decoder<SMS_report_sMS_Contents_sms_initiator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_report_sMS_Contents_sms_initiator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_report_sMS_Contents_sms_initiator (el: _Element): SMS_report_sMS_Contents_sms_initiator {
    if (!_cached_decoder_for_SMS_report_sMS_Contents_sms_initiator) { _cached_decoder_for_SMS_report_sMS_Contents_sms_initiator = $._decodeEnumerated; }
    return _cached_decoder_for_SMS_report_sMS_Contents_sms_initiator(el);
}

let _cached_encoder_for_SMS_report_sMS_Contents_sms_initiator: $.ASN1Encoder<SMS_report_sMS_Contents_sms_initiator> | null = null;

/**
 * @summary Encodes a(n) SMS_report_sMS_Contents_sms_initiator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_report_sMS_Contents_sms_initiator, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_report_sMS_Contents_sms_initiator (value: SMS_report_sMS_Contents_sms_initiator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_report_sMS_Contents_sms_initiator) { _cached_encoder_for_SMS_report_sMS_Contents_sms_initiator = $._encodeEnumerated; }
    return _cached_encoder_for_SMS_report_sMS_Contents_sms_initiator(value, elGetter);
}


/* eslint-enable */
