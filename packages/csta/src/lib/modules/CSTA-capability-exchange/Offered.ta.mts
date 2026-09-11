/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Offered
 * @description
 * Capability bitmap for the Offered event (ECMA-269 C.6.13, ECMA-285 §9.10).
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
 * Offered  ::=  BIT STRING
 * {     originatingNIDConnection         ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     netwCallingDevice             ( 3),     -- optional parameters
 *     netwCalledDevice             ( 4),     -- optional parameters
 *     mediaCallCharacteristics         ( 5),     -- optional parameters
 *     callCharacteristics             ( 6),     -- optional parameters
 *     offeredConnectionInfo             ( 7),     -- optional parameters
 *     subjectOfCall                ( 9),     -- optional parameters
 *     messageInfo                (10),     -- optional parameters
 *     languagePreferences            (11),     -- optional parameters
 *     deciceHistory                (12),     -- optional parameters
 *     privateData                 ( 8),     -- optional parameters
 *     locationInfoList            (13) }
 * ```
 */
export
type Offered = BIT_STRING;

/**
 * @summary Offered_originatingNIDConnection
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.13).
 */
export
const Offered_originatingNIDConnection: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary originatingNIDConnection
 * @constant
 * @description
 * Alias of `Offered_originatingNIDConnection`.
 */
export
const originatingNIDConnection: number = Offered_originatingNIDConnection; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.6.13).
 */
export
const Offered_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `Offered_userData`.
 */
export
const userData: number = Offered_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.13).
 */
export
const Offered_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Offered_servicesPermitted`.
 */
export
const servicesPermitted: number = Offered_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_netwCallingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.13).
 */
export
const Offered_netwCallingDevice: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 * @description
 * Alias of `Offered_netwCallingDevice`.
 */
export
const netwCallingDevice: number = Offered_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_netwCalledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.13).
 */
export
const Offered_netwCalledDevice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 * @description
 * Alias of `Offered_netwCalledDevice`.
 */
export
const netwCalledDevice: number = Offered_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.13).
 */
export
const Offered_mediaCallCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `Offered_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = Offered_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.13).
 */
export
const Offered_callCharacteristics: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `Offered_callCharacteristics`.
 */
export
const callCharacteristics: number = Offered_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_offeredConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.13).
 */
export
const Offered_offeredConnectionInfo: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary offeredConnectionInfo
 * @constant
 * @description
 * Alias of `Offered_offeredConnectionInfo`.
 */
export
const offeredConnectionInfo: number = Offered_offeredConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.6.13).
 */
export
const Offered_subjectOfCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `Offered_subjectOfCall`.
 */
export
const subjectOfCall: number = Offered_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_messageInfo
 * @constant
 * @description
 * Bit set means the SF supports the optional `messageInfo` parameter (ECMA-269
 * C.6.13).
 */
export
const Offered_messageInfo: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 * @description
 * Alias of `Offered_messageInfo`.
 */
export
const messageInfo: number = Offered_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.13).
 */
export
const Offered_languagePreferences: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `Offered_languagePreferences`.
 */
export
const languagePreferences: number = Offered_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_deciceHistory
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.13).
 */
export
const Offered_deciceHistory: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary deciceHistory
 * @constant
 * @description
 * Alias of `Offered_deciceHistory`.
 */
export
const deciceHistory: number = Offered_deciceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.13).
 */
export
const Offered_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Offered_privateData`.
 */
export
const privateData: number = Offered_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Offered_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.13).
 */
export
const Offered_locationInfoList: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `Offered_locationInfoList`.
 */
export
const locationInfoList: number = Offered_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Offered: $.ASN1Decoder<Offered> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Offered
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Offered (el: _Element): Offered {
    if (!_cached_decoder_for_Offered) { _cached_decoder_for_Offered = $._decodeBitString; }
    return _cached_decoder_for_Offered(el);
}

let _cached_encoder_for_Offered: $.ASN1Encoder<Offered> | null = null;

/**
 * @summary Encodes a(n) Offered into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Offered, encoded as an ASN.1 Element.
 */
export
function _encode_Offered (value: Offered, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Offered) { _cached_encoder_for_Offered = $._encodeBitString; }
    return _cached_encoder_for_Offered(value, elGetter);
}


/* eslint-enable */
