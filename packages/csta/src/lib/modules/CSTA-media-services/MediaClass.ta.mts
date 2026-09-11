/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MediaClass
 * @description
 *
 * Media class of a CSTA call. A call belongs to at least one class. Chat
 * requires Data as well. IM, SMS, and MMS are specific Message classes.
 * ECMA-269 §12.2.20.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaClass  ::=  BIT STRING
 * {     voice                     ( 0),
 *     data                     ( 1),
 *     image                     ( 2),
 *     audio                     ( 4),
 *     other                     ( 3),
 *     notKnown                 ( 5),
 *     chat                    ( 6),
 *     email                    ( 7),
 *     message                    ( 8),
 *     im                    ( 9),
 *     sms                    (10),
 *     mms                    (11) }
 * ```
 */
export
type MediaClass = BIT_STRING;

/**
 * @summary MediaClass_voice
 * @description
 *
 * Speech calls (e.g. standard telephones). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_voice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary voice
 * @constant
 */
export
const voice: number = MediaClass_voice; /* SHORT_NAMED_BIT */

/**
 * @summary MediaClass_data
 * @description
 *
 * Digital data (circuit- or packet-switched), e.g. G4 FAX. ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_data: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary data
 * @constant
 */
export
const data: number = MediaClass_data; /* SHORT_NAMED_BIT */

/**
 * @summary MediaClass_image
 * @description
 *
 * Imaging or high-speed circuit-switched data (e.g. video telephones, CODECs).
 * ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_image: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary image
 * @constant
 */
export
const image: number = MediaClass_image; /* SHORT_NAMED_BIT */

/**
 * @summary MediaClass_audio
 * @description
 *
 * 3.1 kHz audio excluding speech (e.g. G3 FAX). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_audio: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary audio
 * @constant
 */
export
const audio: number = MediaClass_audio; /* SHORT_NAMED_BIT */

/**
 * @summary MediaClass_other
 * @description
 *
 * A class not among the specified classes. ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_other: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary other
 * @constant
 */
export
const other: number = MediaClass_other; /* SHORT_NAMED_BIT */

/**
 * @summary MediaClass_notKnown
 * @description
 *
 * Media class is not known. ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_notKnown: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary notKnown
 * @constant
 */
export
const notKnown: number = MediaClass_notKnown; /* SHORT_NAMED_BIT */

/**
 * @summary MediaClass_chat
 * @description
 *
 * Interactive text messages; Data must also be set. ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_chat: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary chat
 * @constant
 */
export
const chat: number = MediaClass_chat; /* SHORT_NAMED_BIT */

/**
 * @summary MediaClass_email
 * @description
 *
 * Non-interactive electronic mail. ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_email: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary email
 * @constant
 */
export
const email: number = MediaClass_email; /* SHORT_NAMED_BIT */

/**
 * @summary MediaClass_message
 * @description
 *
 * Non-interactive displayed text (IM, SMS, etc.). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_message: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 */
export
const message: number = MediaClass_message; /* SHORT_NAMED_BIT */

/**
 * @summary MediaClass_im
 * @description
 *
 * Instant Message (a Message class). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_im: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary im
 * @constant
 */
export
const im: number = MediaClass_im; /* SHORT_NAMED_BIT */

/**
 * @summary MediaClass_sms
 * @description
 *
 * Short Message Service (a Message class). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_sms: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary sms
 * @constant
 */
export
const sms: number = MediaClass_sms; /* SHORT_NAMED_BIT */

/**
 * @summary MediaClass_mms
 * @description
 *
 * Multimedia Message Service (a Message class). ECMA-269 §12.2.20.
 *
 * @constant
 */
export
const MediaClass_mms: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary mms
 * @constant
 */
export
const mms: number = MediaClass_mms; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MediaClass: $.ASN1Decoder<MediaClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaClass (el: _Element): MediaClass {
    if (!_cached_decoder_for_MediaClass) { _cached_decoder_for_MediaClass = $._decodeBitString; }
    return _cached_decoder_for_MediaClass(el);
}

let _cached_encoder_for_MediaClass: $.ASN1Encoder<MediaClass> | null = null;

/**
 * @summary Encodes a(n) MediaClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaClass, encoded as an ASN.1 Element.
 */
export
function _encode_MediaClass (value: MediaClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaClass) { _cached_encoder_for_MediaClass = $._encodeBitString; }
    return _cached_encoder_for_MediaClass(value, elGetter);
}


/* eslint-enable */
