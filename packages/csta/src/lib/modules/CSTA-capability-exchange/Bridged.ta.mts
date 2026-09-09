/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Bridged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Bridged  ::=  BIT STRING
 * {     correlatorData                 ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     mediaCallCharacteristics         ( 3),     -- optional parameters
 *     callCharacteristics             ( 4),     -- optional parameters
 *     bridgedConnectionInfo             ( 5),     -- optional parameters
 *     languagePreferences            ( 8),     -- optional parameters
 *     callLinkageData             ( 7),     -- optional parameters
 *     privateData                 ( 6),     -- optional parameters
 *     locationinfoList            ( 9) }
 * ```
 */
export
type Bridged = BIT_STRING;

/**
 * @summary Bridged_correlatorData
 * @constant
 */
export
const Bridged_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = Bridged_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary Bridged_userData
 * @constant
 */
export
const Bridged_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = Bridged_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Bridged_servicesPermitted
 * @constant
 */
export
const Bridged_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Bridged_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Bridged_mediaCallCharacteristics
 * @constant
 */
export
const Bridged_mediaCallCharacteristics: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = Bridged_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Bridged_callCharacteristics
 * @constant
 */
export
const Bridged_callCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = Bridged_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Bridged_bridgedConnectionInfo
 * @constant
 */
export
const Bridged_bridgedConnectionInfo: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary bridgedConnectionInfo
 * @constant
 */
export
const bridgedConnectionInfo: number = Bridged_bridgedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Bridged_languagePreferences
 * @constant
 */
export
const Bridged_languagePreferences: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = Bridged_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Bridged_callLinkageData
 * @constant
 */
export
const Bridged_callLinkageData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageData
 * @constant
 */
export
const callLinkageData: number = Bridged_callLinkageData; /* SHORT_NAMED_BIT */

/**
 * @summary Bridged_privateData
 * @constant
 */
export
const Bridged_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Bridged_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Bridged_locationinfoList
 * @constant
 */
export
const Bridged_locationinfoList: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary locationinfoList
 * @constant
 */
export
const locationinfoList: number = Bridged_locationinfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Bridged: $.ASN1Decoder<Bridged> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Bridged
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Bridged (el: _Element): Bridged {
    if (!_cached_decoder_for_Bridged) { _cached_decoder_for_Bridged = $._decodeBitString; }
    return _cached_decoder_for_Bridged(el);
}

let _cached_encoder_for_Bridged: $.ASN1Encoder<Bridged> | null = null;

/**
 * @summary Encodes a(n) Bridged into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bridged, encoded as an ASN.1 Element.
 */
export
function _encode_Bridged (value: Bridged, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Bridged) { _cached_encoder_for_Bridged = $._encodeBitString; }
    return _cached_encoder_for_Bridged(value, elGetter);
}


/* eslint-enable */
