/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AmpCallProgInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmpCallProgInd  ::=  ENUMERATED{
 *         callProgressVoiceAnnouncements(0),
 *         callProgressTextMessages(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AmpCallProgInd {
    callProgressVoiceAnnouncements = 0,
    callProgressTextMessages = 1,
}

/**
 * @summary AmpCallProgInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmpCallProgInd  ::=  ENUMERATED{
 *         callProgressVoiceAnnouncements(0),
 *         callProgressTextMessages(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type AmpCallProgInd = _enum_for_AmpCallProgInd;

/**
 * @summary AmpCallProgInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmpCallProgInd  ::=  ENUMERATED{
 *         callProgressVoiceAnnouncements(0),
 *         callProgressTextMessages(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const AmpCallProgInd = _enum_for_AmpCallProgInd;

/**
 * @summary AmpCallProgInd_callProgressVoiceAnnouncements
 * @constant
 * @type {number}
 */
export
const AmpCallProgInd_callProgressVoiceAnnouncements: AmpCallProgInd = AmpCallProgInd.callProgressVoiceAnnouncements; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callProgressVoiceAnnouncements
 * @constant
 * @type {number}
 */
export
const callProgressVoiceAnnouncements: AmpCallProgInd = AmpCallProgInd.callProgressVoiceAnnouncements; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AmpCallProgInd_callProgressTextMessages
 * @constant
 * @type {number}
 */
export
const AmpCallProgInd_callProgressTextMessages: AmpCallProgInd = AmpCallProgInd.callProgressTextMessages; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callProgressTextMessages
 * @constant
 * @type {number}
 */
export
const callProgressTextMessages: AmpCallProgInd = AmpCallProgInd.callProgressTextMessages; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AmpCallProgInd: $.ASN1Decoder<AmpCallProgInd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AmpCallProgInd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AmpCallProgInd (el: _Element): AmpCallProgInd {
    if (!_cached_decoder_for_AmpCallProgInd) { _cached_decoder_for_AmpCallProgInd = $._decodeEnumerated; }
    return _cached_decoder_for_AmpCallProgInd(el);
}

let _cached_encoder_for_AmpCallProgInd: $.ASN1Encoder<AmpCallProgInd> | null = null;

/**
 * @summary Encodes a(n) AmpCallProgInd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AmpCallProgInd, encoded as an ASN.1 Element.
 */
export
function _encode_AmpCallProgInd (value: AmpCallProgInd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AmpCallProgInd) { _cached_encoder_for_AmpCallProgInd = $._encodeEnumerated; }
    return _cached_encoder_for_AmpCallProgInd(value, elGetter);
}


/* eslint-enable */
