/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Delivered
 * @description
 * Capability bitmap for the Delivered event (ECMA-269 C.6.5, ECMA-285 §9.10).
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
 * Delivered  ::=  BIT STRING
 * {     originatingNIDConnection         ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     netwCallingDevice             ( 3),     -- optional parameters
 *     netwCalledDevice             ( 4),     -- optional parameters
 *     mediaCallCharacteristics         ( 5),     -- optional parameters
 *     callCharacteristics             ( 6),     -- optional parameters
 *     connectionInfo                 ( 7),     -- optional parameters
 *     subjectOfCall                ( 9),     -- optional parameters
 *     messageInfo                (10),     -- optional parameters
 *     languagePreferences            (11),     -- optional parameters
 *     deviceHistory                (12),     -- optional parameters
 *     privateData                 ( 8),     -- optional parameters
 *     locationInfoList            (13) }
 * ```
 */
export
type Delivered = BIT_STRING;

/**
 * @summary Delivered_originatingNIDConnection
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.5).
 */
export
const Delivered_originatingNIDConnection: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary originatingNIDConnection
 * @constant
 * @description
 * Alias of `Delivered_originatingNIDConnection`.
 */
export
const originatingNIDConnection: number = Delivered_originatingNIDConnection; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.6.5).
 */
export
const Delivered_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `Delivered_userData`.
 */
export
const userData: number = Delivered_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.5).
 */
export
const Delivered_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Delivered_servicesPermitted`.
 */
export
const servicesPermitted: number = Delivered_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_netwCallingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.5).
 */
export
const Delivered_netwCallingDevice: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 * @description
 * Alias of `Delivered_netwCallingDevice`.
 */
export
const netwCallingDevice: number = Delivered_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_netwCalledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.5).
 */
export
const Delivered_netwCalledDevice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 * @description
 * Alias of `Delivered_netwCalledDevice`.
 */
export
const netwCalledDevice: number = Delivered_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.5).
 */
export
const Delivered_mediaCallCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `Delivered_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = Delivered_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.5).
 */
export
const Delivered_callCharacteristics: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `Delivered_callCharacteristics`.
 */
export
const callCharacteristics: number = Delivered_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_connectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.5).
 */
export
const Delivered_connectionInfo: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 * @description
 * Alias of `Delivered_connectionInfo`.
 */
export
const connectionInfo: number = Delivered_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.6.5).
 */
export
const Delivered_subjectOfCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `Delivered_subjectOfCall`.
 */
export
const subjectOfCall: number = Delivered_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_messageInfo
 * @constant
 * @description
 * Bit set means the SF supports the optional `messageInfo` parameter (ECMA-269
 * C.6.5).
 */
export
const Delivered_messageInfo: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 * @description
 * Alias of `Delivered_messageInfo`.
 */
export
const messageInfo: number = Delivered_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.5).
 */
export
const Delivered_languagePreferences: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `Delivered_languagePreferences`.
 */
export
const languagePreferences: number = Delivered_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_deviceHistory
 * @constant
 * @description
 * Bit set means the SF supports the optional `deviceHistory` parameter
 * (ECMA-269 C.6.5).
 */
export
const Delivered_deviceHistory: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 * @description
 * Alias of `Delivered_deviceHistory`.
 */
export
const deviceHistory: number = Delivered_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.5).
 */
export
const Delivered_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Delivered_privateData`.
 */
export
const privateData: number = Delivered_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.5).
 */
export
const Delivered_locationInfoList: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `Delivered_locationInfoList`.
 */
export
const locationInfoList: number = Delivered_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Delivered: $.ASN1Decoder<Delivered> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Delivered
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Delivered (el: _Element): Delivered {
    if (!_cached_decoder_for_Delivered) { _cached_decoder_for_Delivered = $._decodeBitString; }
    return _cached_decoder_for_Delivered(el);
}

let _cached_encoder_for_Delivered: $.ASN1Encoder<Delivered> | null = null;

/**
 * @summary Encodes a(n) Delivered into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Delivered, encoded as an ASN.1 Element.
 */
export
function _encode_Delivered (value: Delivered, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Delivered) { _cached_encoder_for_Delivered = $._encodeBitString; }
    return _cached_encoder_for_Delivered(value, elGetter);
}


/* eslint-enable */
