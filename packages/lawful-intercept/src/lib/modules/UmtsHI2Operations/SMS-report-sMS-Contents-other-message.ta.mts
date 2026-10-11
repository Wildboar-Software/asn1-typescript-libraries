/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SMS_report_sMS_Contents_other_message {
    yes = 0,
    no = 1,
    undefined = 2,
}

/**
 * @summary SMS_report_sMS_Contents_other_message
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents-other-message ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type SMS_report_sMS_Contents_other_message = _enum_for_SMS_report_sMS_Contents_other_message | ENUMERATED;

/**
 * @summary SMS_report_sMS_Contents_other_message_yes
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_yes: SMS_report_sMS_Contents_other_message = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary yes
 * @constant
 * @type {number}
 */
export
const yes: SMS_report_sMS_Contents_other_message = SMS_report_sMS_Contents_other_message_yes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_other_message_no
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_no: SMS_report_sMS_Contents_other_message = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no
 * @constant
 * @type {number}
 */
export
const no: SMS_report_sMS_Contents_other_message = SMS_report_sMS_Contents_other_message_no; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_other_message_undefined
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_undefined: SMS_report_sMS_Contents_other_message = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export
const undefined: SMS_report_sMS_Contents_other_message = SMS_report_sMS_Contents_other_message_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SMS_report_sMS_Contents_other_message: $.ASN1Decoder<SMS_report_sMS_Contents_other_message> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_report_sMS_Contents_other_message
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_report_sMS_Contents_other_message (el: _Element): SMS_report_sMS_Contents_other_message {
    if (!_cached_decoder_for_SMS_report_sMS_Contents_other_message) { _cached_decoder_for_SMS_report_sMS_Contents_other_message = $._decodeEnumerated; }
    return _cached_decoder_for_SMS_report_sMS_Contents_other_message(el);
}

let _cached_encoder_for_SMS_report_sMS_Contents_other_message: $.ASN1Encoder<SMS_report_sMS_Contents_other_message> | null = null;

/**
 * @summary Encodes a(n) SMS_report_sMS_Contents_other_message into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_report_sMS_Contents_other_message, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_report_sMS_Contents_other_message (value: SMS_report_sMS_Contents_other_message, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_report_sMS_Contents_other_message) { _cached_encoder_for_SMS_report_sMS_Contents_other_message = $._encodeEnumerated; }
    return _cached_encoder_for_SMS_report_sMS_Contents_other_message(value, elGetter);
}


/* eslint-enable */
