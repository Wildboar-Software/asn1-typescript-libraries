/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SMS_report_sMS_Contents_enhancedContent_character_encoding {
    gsm_7_bit_ascii = 0,
    eight_bit_ascii = 1,
    eight_bit_binary = 2,
    ucs_2 = 3,
    utf_8 = 4,
    utf_16 = 5,
    other = 6,
}

/**
 * @summary SMS_report_sMS_Contents_enhancedContent_character_encoding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents-enhancedContent-character-encoding ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type SMS_report_sMS_Contents_enhancedContent_character_encoding = _enum_for_SMS_report_sMS_Contents_enhancedContent_character_encoding | ENUMERATED;

/**
 * @summary SMS_report_sMS_Contents_enhancedContent_character_encoding_gsm_7_bit_ascii
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_enhancedContent_character_encoding_gsm_7_bit_ascii: SMS_report_sMS_Contents_enhancedContent_character_encoding = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gsm_7_bit_ascii
 * @constant
 * @type {number}
 */
export
const gsm_7_bit_ascii: SMS_report_sMS_Contents_enhancedContent_character_encoding = SMS_report_sMS_Contents_enhancedContent_character_encoding_gsm_7_bit_ascii; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_enhancedContent_character_encoding_eight_bit_ascii
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_enhancedContent_character_encoding_eight_bit_ascii: SMS_report_sMS_Contents_enhancedContent_character_encoding = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eight_bit_ascii
 * @constant
 * @type {number}
 */
export
const eight_bit_ascii: SMS_report_sMS_Contents_enhancedContent_character_encoding = SMS_report_sMS_Contents_enhancedContent_character_encoding_eight_bit_ascii; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_enhancedContent_character_encoding_eight_bit_binary
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_enhancedContent_character_encoding_eight_bit_binary: SMS_report_sMS_Contents_enhancedContent_character_encoding = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eight_bit_binary
 * @constant
 * @type {number}
 */
export
const eight_bit_binary: SMS_report_sMS_Contents_enhancedContent_character_encoding = SMS_report_sMS_Contents_enhancedContent_character_encoding_eight_bit_binary; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_enhancedContent_character_encoding_ucs_2
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_enhancedContent_character_encoding_ucs_2: SMS_report_sMS_Contents_enhancedContent_character_encoding = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ucs_2
 * @constant
 * @type {number}
 */
export
const ucs_2: SMS_report_sMS_Contents_enhancedContent_character_encoding = SMS_report_sMS_Contents_enhancedContent_character_encoding_ucs_2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_enhancedContent_character_encoding_utf_8
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_enhancedContent_character_encoding_utf_8: SMS_report_sMS_Contents_enhancedContent_character_encoding = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary utf_8
 * @constant
 * @type {number}
 */
export
const utf_8: SMS_report_sMS_Contents_enhancedContent_character_encoding = SMS_report_sMS_Contents_enhancedContent_character_encoding_utf_8; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_enhancedContent_character_encoding_utf_16
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_enhancedContent_character_encoding_utf_16: SMS_report_sMS_Contents_enhancedContent_character_encoding = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary utf_16
 * @constant
 * @type {number}
 */
export
const utf_16: SMS_report_sMS_Contents_enhancedContent_character_encoding = SMS_report_sMS_Contents_enhancedContent_character_encoding_utf_16; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_enhancedContent_character_encoding_other
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_enhancedContent_character_encoding_other: SMS_report_sMS_Contents_enhancedContent_character_encoding = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: SMS_report_sMS_Contents_enhancedContent_character_encoding = SMS_report_sMS_Contents_enhancedContent_character_encoding_other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SMS_report_sMS_Contents_enhancedContent_character_encoding: $.ASN1Decoder<SMS_report_sMS_Contents_enhancedContent_character_encoding> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_report_sMS_Contents_enhancedContent_character_encoding
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_report_sMS_Contents_enhancedContent_character_encoding (el: _Element): SMS_report_sMS_Contents_enhancedContent_character_encoding {
    if (!_cached_decoder_for_SMS_report_sMS_Contents_enhancedContent_character_encoding) { _cached_decoder_for_SMS_report_sMS_Contents_enhancedContent_character_encoding = $._decodeEnumerated; }
    return _cached_decoder_for_SMS_report_sMS_Contents_enhancedContent_character_encoding(el);
}

let _cached_encoder_for_SMS_report_sMS_Contents_enhancedContent_character_encoding: $.ASN1Encoder<SMS_report_sMS_Contents_enhancedContent_character_encoding> | null = null;

/**
 * @summary Encodes a(n) SMS_report_sMS_Contents_enhancedContent_character_encoding into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_report_sMS_Contents_enhancedContent_character_encoding, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_report_sMS_Contents_enhancedContent_character_encoding (value: SMS_report_sMS_Contents_enhancedContent_character_encoding, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_report_sMS_Contents_enhancedContent_character_encoding) { _cached_encoder_for_SMS_report_sMS_Contents_enhancedContent_character_encoding = $._encodeEnumerated; }
    return _cached_encoder_for_SMS_report_sMS_Contents_enhancedContent_character_encoding(value, elGetter);
}


/* eslint-enable */
