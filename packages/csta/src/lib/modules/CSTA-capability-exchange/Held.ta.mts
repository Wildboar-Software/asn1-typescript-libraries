/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Held
 * @description
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
 */
export
const Held_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = Held_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary Held_servicesPermitted
 * @constant
 */
export
const Held_servicesPermitted: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Held_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Held_mediaCallCharacteristics
 * @constant
 */
export
const Held_mediaCallCharacteristics: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = Held_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Held_callCharacteristics
 * @constant
 */
export
const Held_callCharacteristics: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = Held_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Held_heldConnectionInfo
 * @constant
 */
export
const Held_heldConnectionInfo: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary heldConnectionInfo
 * @constant
 */
export
const heldConnectionInfo: number = Held_heldConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Held_callLinkageData
 * @constant
 */
export
const Held_callLinkageData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageData
 * @constant
 */
export
const callLinkageData: number = Held_callLinkageData; /* SHORT_NAMED_BIT */

/**
 * @summary Held_languagePreferences
 * @constant
 */
export
const Held_languagePreferences: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = Held_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Held_privateData
 * @constant
 */
export
const Held_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Held_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Held_locationInfoList
 * @constant
 */
export
const Held_locationInfoList: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
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
