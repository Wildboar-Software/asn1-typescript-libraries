/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary VoiceUnitServicesC2
 * @description
 *
 * Phase II voice-unit services. Phase II (ECMA-218) compatibility BIT STRING in
 * ACSE user-information. For Phase III and later, use Capability Exchange to
 * learn supported services and events. ECMA-285 §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceUnitServicesC2  ::=  BIT STRING
 *     {concatenateMessage             (0),
 *      deleteMessage                  (1),
 *      playMessage                    (2),
 *      queryVoiceAttribute            (3),
 *      recordMessage              (4),
 *      reposition                     (5),
 *      resume                     (6),
 *      review                         (7),
 *      setVoiceAttribute              (8),
 *      stop                           (9),
 *      suspend                        (10),
 *      synthesizeMessage              (11)    }
 * ```
 */
export
type VoiceUnitServicesC2 = BIT_STRING;

/**
 * @summary VoiceUnitServicesC2_concatenateMessage
 * @description
 * Advertises `concatenateMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_concatenateMessage: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary concatenateMessage
 * @description Alias of {@link VoiceUnitServicesC2_concatenateMessage}.
 * @constant
 */
export
const concatenateMessage: number = VoiceUnitServicesC2_concatenateMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_deleteMessage
 * @description Advertises `deleteMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_deleteMessage: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deleteMessage
 * @description Alias of {@link VoiceUnitServicesC2_deleteMessage}.
 * @constant
 */
export
const deleteMessage: number = VoiceUnitServicesC2_deleteMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_playMessage
 * @description Advertises `playMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_playMessage: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary playMessage
 * @description Alias of {@link VoiceUnitServicesC2_playMessage}.
 * @constant
 */
export
const playMessage: number = VoiceUnitServicesC2_playMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_queryVoiceAttribute
 * @description
 * Advertises `queryVoiceAttribute` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_queryVoiceAttribute: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary queryVoiceAttribute
 * @description Alias of {@link VoiceUnitServicesC2_queryVoiceAttribute}.
 * @constant
 */
export
const queryVoiceAttribute: number = VoiceUnitServicesC2_queryVoiceAttribute; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_recordMessage
 * @description Advertises `recordMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_recordMessage: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary recordMessage
 * @description Alias of {@link VoiceUnitServicesC2_recordMessage}.
 * @constant
 */
export
const recordMessage: number = VoiceUnitServicesC2_recordMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_reposition
 * @description Advertises `reposition` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_reposition: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary reposition
 * @description Alias of {@link VoiceUnitServicesC2_reposition}.
 * @constant
 */
export
const reposition: number = VoiceUnitServicesC2_reposition; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_resume
 * @description Advertises `resume` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_resume: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary resume
 * @description Alias of {@link VoiceUnitServicesC2_resume}.
 * @constant
 */
export
const resume: number = VoiceUnitServicesC2_resume; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_review
 * @description Advertises `review` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_review: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary review
 * @description Alias of {@link VoiceUnitServicesC2_review}.
 * @constant
 */
export
const review: number = VoiceUnitServicesC2_review; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_setVoiceAttribute
 * @description
 * Advertises `setVoiceAttribute` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_setVoiceAttribute: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary setVoiceAttribute
 * @description Alias of {@link VoiceUnitServicesC2_setVoiceAttribute}.
 * @constant
 */
export
const setVoiceAttribute: number = VoiceUnitServicesC2_setVoiceAttribute; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_stop
 * @description Advertises `stop` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_stop: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary stop
 * @description Alias of {@link VoiceUnitServicesC2_stop}.
 * @constant
 */
export
const stop: number = VoiceUnitServicesC2_stop; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_suspend
 * @description Advertises `suspend` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_suspend: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary suspend
 * @description Alias of {@link VoiceUnitServicesC2_suspend}.
 * @constant
 */
export
const suspend: number = VoiceUnitServicesC2_suspend; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_synthesizeMessage
 * @description
 * Advertises `synthesizeMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitServicesC2_synthesizeMessage: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary synthesizeMessage
 * @description Alias of {@link VoiceUnitServicesC2_synthesizeMessage}.
 * @constant
 */
export
const synthesizeMessage: number = VoiceUnitServicesC2_synthesizeMessage; /* SHORT_NAMED_BIT */

let _cached_decoder_for_VoiceUnitServicesC2: $.ASN1Decoder<VoiceUnitServicesC2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceUnitServicesC2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceUnitServicesC2 (el: _Element): VoiceUnitServicesC2 {
    if (!_cached_decoder_for_VoiceUnitServicesC2) { _cached_decoder_for_VoiceUnitServicesC2 = $._decodeBitString; }
    return _cached_decoder_for_VoiceUnitServicesC2(el);
}

let _cached_encoder_for_VoiceUnitServicesC2: $.ASN1Encoder<VoiceUnitServicesC2> | null = null;

/**
 * @summary Encodes a(n) VoiceUnitServicesC2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceUnitServicesC2, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceUnitServicesC2 (value: VoiceUnitServicesC2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceUnitServicesC2) { _cached_encoder_for_VoiceUnitServicesC2 = $._encodeBitString; }
    return _cached_encoder_for_VoiceUnitServicesC2(value, elGetter);
}


/* eslint-enable */
