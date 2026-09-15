/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary VoiceUnitServices
 * @description
 *
 * Voice-unit services. BIT STRING advertised in ACSE user-information listing
 * which CSTA services or events this association will use. ECMA-285 §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceUnitServices  ::=  BIT STRING
 * {    activate                        (12),
 *         clear                            (13),
 *         concatenateMessage                    ( 0),
 *         deactivate                        (14),
 *         deleteMessage                        ( 1),
 *         playMessage                        ( 2),
 *         queryVoiceAttribute                    ( 3),
 *         recordMessage                        ( 4),
 *         reposition                        ( 5),
 *         resume                            ( 6),
 *         review                            ( 7),
 *         setVoiceAttribute                    ( 8),
 *         stop                            ( 9),
 *         suspend                            (10),
 *         synthesizeMessage                    (11) }
 * ```
 */
export
type VoiceUnitServices = BIT_STRING;

/**
 * @summary VoiceUnitServices_activate
 * @description Advertises `activate` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_activate: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary activate
 * @description Alias of {@link VoiceUnitServices_activate}.
 * @constant
 */
export
const activate: number = VoiceUnitServices_activate; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_clear
 * @description Advertises `clear` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_clear: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary clear
 * @description Alias of {@link VoiceUnitServices_clear}.
 * @constant
 */
export
const clear: number = VoiceUnitServices_clear; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_concatenateMessage
 * @description
 * Advertises `concatenateMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_concatenateMessage: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary concatenateMessage
 * @description Alias of {@link VoiceUnitServices_concatenateMessage}.
 * @constant
 */
export
const concatenateMessage: number = VoiceUnitServices_concatenateMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_deactivate
 * @description Advertises `deactivate` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_deactivate: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary deactivate
 * @description Alias of {@link VoiceUnitServices_deactivate}.
 * @constant
 */
export
const deactivate: number = VoiceUnitServices_deactivate; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_deleteMessage
 * @description Advertises `deleteMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_deleteMessage: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deleteMessage
 * @description Alias of {@link VoiceUnitServices_deleteMessage}.
 * @constant
 */
export
const deleteMessage: number = VoiceUnitServices_deleteMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_playMessage
 * @description Advertises `playMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_playMessage: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary playMessage
 * @description Alias of {@link VoiceUnitServices_playMessage}.
 * @constant
 */
export
const playMessage: number = VoiceUnitServices_playMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_queryVoiceAttribute
 * @description
 * Advertises `queryVoiceAttribute` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_queryVoiceAttribute: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary queryVoiceAttribute
 * @description Alias of {@link VoiceUnitServices_queryVoiceAttribute}.
 * @constant
 */
export
const queryVoiceAttribute: number = VoiceUnitServices_queryVoiceAttribute; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_recordMessage
 * @description Advertises `recordMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_recordMessage: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary recordMessage
 * @description Alias of {@link VoiceUnitServices_recordMessage}.
 * @constant
 */
export
const recordMessage: number = VoiceUnitServices_recordMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_reposition
 * @description Advertises `reposition` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_reposition: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary reposition
 * @description Alias of {@link VoiceUnitServices_reposition}.
 * @constant
 */
export
const reposition: number = VoiceUnitServices_reposition; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_resume
 * @description Advertises `resume` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_resume: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary resume
 * @description Alias of {@link VoiceUnitServices_resume}.
 * @constant
 */
export
const resume: number = VoiceUnitServices_resume; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_review
 * @description Advertises `review` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_review: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary review
 * @description Alias of {@link VoiceUnitServices_review}.
 * @constant
 */
export
const review: number = VoiceUnitServices_review; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_setVoiceAttribute
 * @description
 * Advertises `setVoiceAttribute` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_setVoiceAttribute: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary setVoiceAttribute
 * @description Alias of {@link VoiceUnitServices_setVoiceAttribute}.
 * @constant
 */
export
const setVoiceAttribute: number = VoiceUnitServices_setVoiceAttribute; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_stop
 * @description Advertises `stop` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_stop: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary stop
 * @description Alias of {@link VoiceUnitServices_stop}.
 * @constant
 */
export
const stop: number = VoiceUnitServices_stop; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_suspend
 * @description Advertises `suspend` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_suspend: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary suspend
 * @description Alias of {@link VoiceUnitServices_suspend}.
 * @constant
 */
export
const suspend: number = VoiceUnitServices_suspend; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServices_synthesizeMessage
 * @description
 * Advertises `synthesizeMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServices_synthesizeMessage: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary synthesizeMessage
 * @description Alias of {@link VoiceUnitServices_synthesizeMessage}.
 * @constant
 */
export
const synthesizeMessage: number = VoiceUnitServices_synthesizeMessage; /* SHORT_NAMED_BIT */

let _cached_decoder_for_VoiceUnitServices: $.ASN1Decoder<VoiceUnitServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceUnitServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceUnitServices (el: _Element): VoiceUnitServices {
    if (!_cached_decoder_for_VoiceUnitServices) { _cached_decoder_for_VoiceUnitServices = $._decodeBitString; }
    return _cached_decoder_for_VoiceUnitServices(el);
}

let _cached_encoder_for_VoiceUnitServices: $.ASN1Encoder<VoiceUnitServices> | null = null;

/**
 * @summary Encodes a(n) VoiceUnitServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceUnitServices, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceUnitServices (value: VoiceUnitServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceUnitServices) { _cached_encoder_for_VoiceUnitServices = $._encodeBitString; }
    return _cached_encoder_for_VoiceUnitServices(value, elGetter);
}


/* eslint-enable */
