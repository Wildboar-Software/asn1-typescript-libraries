/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Held
 * @description
 * Capability bitmap for the Held event (ECMA-269 C.6.10, ECMA-285 §9.10).
 * Presence of this entry in `CallControlEvtsList` means the SF supports that
 * event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Held  ::=  BIT STRING
 * {     correlatorData                 ( 0),     -- optional parameters
 *     servicesPermitted             ( 1),     -- optional parameters
 *     mediaCallCharacteristics         ( 2),     -- optional parameters
 *     callCharacteristics             ( 3),     -- optional parameters
 *     heldConnectionInfo             ( 4),     -- optional parameters
 *     callLinkageData             ( 6),     -- optional parameters
 *     languagePreferences            ( 7),     -- optional parameters
 *     privateData                 ( 5),     -- optional parameters
 *     locationInfoList            ( 8) }
 * ```
 */
export
type Held = BIT_STRING;

/**
 * @summary Held_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.6.10).
 */
export
const Held_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `Held_correlatorData`.
 */
export
const correlatorData: number = Held_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary Held_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.10).
 */
export
const Held_servicesPermitted: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Held_servicesPermitted`.
 */
export
const servicesPermitted: number = Held_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Held_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.10).
 */
export
const Held_mediaCallCharacteristics: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `Held_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = Held_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Held_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.10).
 */
export
const Held_callCharacteristics: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `Held_callCharacteristics`.
 */
export
const callCharacteristics: number = Held_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Held_heldConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.10).
 */
export
const Held_heldConnectionInfo: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary heldConnectionInfo
 * @constant
 * @description
 * Alias of `Held_heldConnectionInfo`.
 */
export
const heldConnectionInfo: number = Held_heldConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Held_callLinkageData
 * @constant
 * @description
 * Bit set means the SF supports the optional `callLinkageData` parameter
 * (ECMA-269 C.6.10).
 */
export
const Held_callLinkageData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageData
 * @constant
 * @description
 * Alias of `Held_callLinkageData`.
 */
export
const callLinkageData: number = Held_callLinkageData; /* SHORT_NAMED_BIT */

/**
 * @summary Held_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.10).
 */
export
const Held_languagePreferences: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `Held_languagePreferences`.
 */
export
const languagePreferences: number = Held_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Held_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.10).
 */
export
const Held_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Held_privateData`.
 */
export
const privateData: number = Held_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Held_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.10).
 */
export
const Held_locationInfoList: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `Held_locationInfoList`.
 */
export
const locationInfoList: number = Held_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Held: $.ASN1Decoder<Held> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Held
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Held (el: _Element): Held {
    if (!_cached_decoder_for_Held) { _cached_decoder_for_Held = $._decodeBitString; }
    return _cached_decoder_for_Held(el);
}

let _cached_encoder_for_Held: $.ASN1Encoder<Held> | null = null;

/**
 * @summary Encodes a(n) Held into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Held, encoded as an ASN.1 Element.
 */
export
function _encode_Held (value: Held, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Held) { _cached_encoder_for_Held = $._encodeBitString; }
    return _cached_encoder_for_Held(value, elGetter);
}


/* eslint-enable */
