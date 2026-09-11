/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MonitorMediaClass
 * @description
 *
 * Media classes of calls to include when starting a monitor (same bits as
 * `MediaClass`). ECMA-269 §12.2.20; ECMA-285 §9.5.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorMediaClass  ::=  BIT STRING
 * {     voice                 ( 0),
 *     data                 ( 1),
 *     image                 ( 2),
 *     audio                 ( 4),
 *     other                 ( 3),
 *     notKnown             ( 5),
 *     chat                ( 6),
 *     email                ( 7),
 *     message                ( 8),
 *     im                ( 9),
 *     sms                (10),
 *     mms                (11) }
 * ```
 */
export
type MonitorMediaClass = BIT_STRING;

/**
 * @summary MonitorMediaClass_voice
 * @description
 *
 * Speech calls (e.g. standard telephones). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_voice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary voice
 * @constant
 */
export
const voice: number = MonitorMediaClass_voice; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorMediaClass_data
 * @description
 *
 * Digital data (circuit- or packet-switched), e.g. G4 FAX. ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_data: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary data
 * @constant
 */
export
const data: number = MonitorMediaClass_data; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorMediaClass_image
 * @description
 *
 * Imaging or high-speed circuit-switched data (e.g. video telephones, CODECs).
 * ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_image: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary image
 * @constant
 */
export
const image: number = MonitorMediaClass_image; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorMediaClass_audio
 * @description
 *
 * 3.1 kHz audio excluding speech (e.g. G3 FAX). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_audio: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary audio
 * @constant
 */
export
const audio: number = MonitorMediaClass_audio; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorMediaClass_other
 * @description
 *
 * A class not among the specified classes. ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_other: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary other
 * @constant
 */
export
const other: number = MonitorMediaClass_other; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorMediaClass_notKnown
 * @description
 *
 * Media class is not known. ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_notKnown: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary notKnown
 * @constant
 */
export
const notKnown: number = MonitorMediaClass_notKnown; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorMediaClass_chat
 * @description
 *
 * Interactive text messages; Data must also be set. ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_chat: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary chat
 * @constant
 */
export
const chat: number = MonitorMediaClass_chat; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorMediaClass_email
 * @description
 *
 * Non-interactive electronic mail. ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_email: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary email
 * @constant
 */
export
const email: number = MonitorMediaClass_email; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorMediaClass_message
 * @description
 *
 * Non-interactive displayed text (IM, SMS, etc.). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_message: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 */
export
const message: number = MonitorMediaClass_message; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorMediaClass_im
 * @description
 *
 * Instant Message (a Message class). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_im: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary im
 * @constant
 */
export
const im: number = MonitorMediaClass_im; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorMediaClass_sms
 * @description
 *
 * Short Message Service (a Message class). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_sms: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary sms
 * @constant
 */
export
const sms: number = MonitorMediaClass_sms; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorMediaClass_mms
 * @description
 *
 * Multimedia Message Service (a Message class). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MonitorMediaClass_mms: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary mms
 * @constant
 */
export
const mms: number = MonitorMediaClass_mms; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MonitorMediaClass: $.ASN1Decoder<MonitorMediaClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorMediaClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorMediaClass (el: _Element): MonitorMediaClass {
    if (!_cached_decoder_for_MonitorMediaClass) { _cached_decoder_for_MonitorMediaClass = $._decodeBitString; }
    return _cached_decoder_for_MonitorMediaClass(el);
}

let _cached_encoder_for_MonitorMediaClass: $.ASN1Encoder<MonitorMediaClass> | null = null;

/**
 * @summary Encodes a(n) MonitorMediaClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorMediaClass, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorMediaClass (value: MonitorMediaClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorMediaClass) { _cached_encoder_for_MonitorMediaClass = $._encodeBitString; }
    return _cached_encoder_for_MonitorMediaClass(value, elGetter);
}


/* eslint-enable */
