/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Originated
 * @description
 * Capability bitmap for the Originated event (ECMA-269 C.6.14, ECMA-285 §9.10).
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
 * Originated  ::=  BIT STRING
 * {     originatingDevice             ( 0),     -- optional parameters
 *     servicesPermitted             ( 1),     -- optional parameters
 *     netwCallingDevice             ( 2),     -- optional parameters
 *     netwCalledDevice             ( 3),     -- optional parameters
 *     mediaCallCharacteristics         ( 4),     -- optional parameters
 *     callCharacteristics             ( 5),     -- optional parameters
 *     originatedConnectionInfo         ( 6),     -- optional parameters
 *     subjectOfCall                ( 8),     -- optional parameters
 *     messageInfo                ( 9),     -- optional parameters
 *     languagePreferences            (10),     -- optional parameters
 *     privateData                 ( 7),     -- optional parameters
 *     locationInfoList            (11) }
 * ```
 */
export
type Originated = BIT_STRING;

/**
 * @summary Originated_originatingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.14).
 */
export
const Originated_originatingDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary originatingDevice
 * @constant
 * @description
 * Alias of `Originated_originatingDevice`.
 */
export
const originatingDevice: number = Originated_originatingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.14).
 */
export
const Originated_servicesPermitted: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Originated_servicesPermitted`.
 */
export
const servicesPermitted: number = Originated_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_netwCallingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.14).
 */
export
const Originated_netwCallingDevice: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 * @description
 * Alias of `Originated_netwCallingDevice`.
 */
export
const netwCallingDevice: number = Originated_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_netwCalledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.14).
 */
export
const Originated_netwCalledDevice: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 * @description
 * Alias of `Originated_netwCalledDevice`.
 */
export
const netwCalledDevice: number = Originated_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.14).
 */
export
const Originated_mediaCallCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `Originated_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = Originated_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.14).
 */
export
const Originated_callCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `Originated_callCharacteristics`.
 */
export
const callCharacteristics: number = Originated_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_originatedConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.14).
 */
export
const Originated_originatedConnectionInfo: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary originatedConnectionInfo
 * @constant
 * @description
 * Alias of `Originated_originatedConnectionInfo`.
 */
export
const originatedConnectionInfo: number = Originated_originatedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.6.14).
 */
export
const Originated_subjectOfCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `Originated_subjectOfCall`.
 */
export
const subjectOfCall: number = Originated_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_messageInfo
 * @constant
 * @description
 * Bit set means the SF supports the optional `messageInfo` parameter (ECMA-269
 * C.6.14).
 */
export
const Originated_messageInfo: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 * @description
 * Alias of `Originated_messageInfo`.
 */
export
const messageInfo: number = Originated_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.14).
 */
export
const Originated_languagePreferences: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `Originated_languagePreferences`.
 */
export
const languagePreferences: number = Originated_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.14).
 */
export
const Originated_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Originated_privateData`.
 */
export
const privateData: number = Originated_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.14).
 */
export
const Originated_locationInfoList: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `Originated_locationInfoList`.
 */
export
const locationInfoList: number = Originated_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Originated: $.ASN1Decoder<Originated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Originated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Originated (el: _Element): Originated {
    if (!_cached_decoder_for_Originated) { _cached_decoder_for_Originated = $._decodeBitString; }
    return _cached_decoder_for_Originated(el);
}

let _cached_encoder_for_Originated: $.ASN1Encoder<Originated> | null = null;

/**
 * @summary Encodes a(n) Originated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Originated, encoded as an ASN.1 Element.
 */
export
function _encode_Originated (value: Originated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Originated) { _cached_encoder_for_Originated = $._encodeBitString; }
    return _cached_encoder_for_Originated(value, elGetter);
}


/* eslint-enable */
