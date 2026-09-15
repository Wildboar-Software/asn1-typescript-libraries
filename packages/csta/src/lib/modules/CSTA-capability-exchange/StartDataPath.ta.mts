/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StartDataPath
 * @description
 * Capability bitmap for the Start Data Path service (ECMA-269 C.17.11, ECMA-285
 * §9.10). Presence of this entry in `IOServicesServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartDataPath  ::=  BIT STRING
 * {     objectDevice                 ( 0),     -- optional parameters
 *     objectCall                 ( 1),     -- optional parameters
 *     dataPathDirectionCfToObject         ( 2),     -- optional parameters
 *     dataPathDirectionObjectToCf         ( 3),     -- optional parameters
 *     dataPathDirectionBidirectional         ( 4),     -- optional parameters
 *     dataPathTypeText             ( 5),     -- optional parameters
 *     dataPathTypeVoice             ( 6),     -- optional parameters
 *     numberOfCharsToCollect             ( 7),     -- optional parameters
 *     terminationChar             ( 8),     -- optional parameters
 *     timeout                 ( 9),     -- optional parameters
 *     privateData                 (10),     -- optional parameters
 *     numberOfCharsToCollectInAck         (11),     -- optional parameters
 *     terminationCharInAck             (12),     -- optional parameters
 *     timeoutInAck                 (13),     -- optional parameters
 *     privateDataInAck             (14) }
 * ```
 */
export
type StartDataPath = BIT_STRING;

/**
 * @summary StartDataPath_objectDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.11).
 */
export
const StartDataPath_objectDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary objectDevice
 * @constant
 * @description
 * Alias of `StartDataPath_objectDevice`.
 */
export
const objectDevice: number = StartDataPath_objectDevice; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_objectCall
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.11).
 */
export
const StartDataPath_objectCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary objectCall
 * @constant
 * @description
 * Alias of `StartDataPath_objectCall`.
 */
export
const objectCall: number = StartDataPath_objectCall; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_dataPathDirectionCfToObject
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.11).
 */
export
const StartDataPath_dataPathDirectionCfToObject: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dataPathDirectionCfToObject
 * @constant
 * @description
 * Alias of `StartDataPath_dataPathDirectionCfToObject`.
 */
export
const dataPathDirectionCfToObject: number = StartDataPath_dataPathDirectionCfToObject; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_dataPathDirectionObjectToCf
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.11).
 */
export
const StartDataPath_dataPathDirectionObjectToCf: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dataPathDirectionObjectToCf
 * @constant
 * @description
 * Alias of `StartDataPath_dataPathDirectionObjectToCf`.
 */
export
const dataPathDirectionObjectToCf: number = StartDataPath_dataPathDirectionObjectToCf; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_dataPathDirectionBidirectional
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.11).
 */
export
const StartDataPath_dataPathDirectionBidirectional: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary dataPathDirectionBidirectional
 * @constant
 * @description
 * Alias of `StartDataPath_dataPathDirectionBidirectional`.
 */
export
const dataPathDirectionBidirectional: number = StartDataPath_dataPathDirectionBidirectional; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_dataPathTypeText
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.11).
 */
export
const StartDataPath_dataPathTypeText: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary dataPathTypeText
 * @constant
 * @description
 * Alias of `StartDataPath_dataPathTypeText`.
 */
export
const dataPathTypeText: number = StartDataPath_dataPathTypeText; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_dataPathTypeVoice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.11).
 */
export
const StartDataPath_dataPathTypeVoice: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary dataPathTypeVoice
 * @constant
 * @description
 * Alias of `StartDataPath_dataPathTypeVoice`.
 */
export
const dataPathTypeVoice: number = StartDataPath_dataPathTypeVoice; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_numberOfCharsToCollect
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.11).
 */
export
const StartDataPath_numberOfCharsToCollect: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary numberOfCharsToCollect
 * @constant
 * @description
 * Alias of `StartDataPath_numberOfCharsToCollect`.
 */
export
const numberOfCharsToCollect: number = StartDataPath_numberOfCharsToCollect; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_terminationChar
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.11).
 */
export
const StartDataPath_terminationChar: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary terminationChar
 * @constant
 * @description
 * Alias of `StartDataPath_terminationChar`.
 */
export
const terminationChar: number = StartDataPath_terminationChar; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_timeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.11).
 */
export
const StartDataPath_timeout: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary timeout
 * @constant
 * @description
 * Alias of `StartDataPath_timeout`.
 */
export
const timeout: number = StartDataPath_timeout; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.17.11).
 */
export
const StartDataPath_privateData: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `StartDataPath_privateData`.
 */
export
const privateData: number = StartDataPath_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_numberOfCharsToCollectInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `numberOfCharsToCollect` in the
 * acknowledgement (ECMA-269 C.17.11).
 */
export
const StartDataPath_numberOfCharsToCollectInAck: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary numberOfCharsToCollectInAck
 * @constant
 * @description
 * Alias of `StartDataPath_numberOfCharsToCollectInAck`.
 */
export
const numberOfCharsToCollectInAck: number = StartDataPath_numberOfCharsToCollectInAck; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_terminationCharInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `terminationChar` in the
 * acknowledgement (ECMA-269 C.17.11).
 */
export
const StartDataPath_terminationCharInAck: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary terminationCharInAck
 * @constant
 * @description
 * Alias of `StartDataPath_terminationCharInAck`.
 */
export
const terminationCharInAck: number = StartDataPath_terminationCharInAck; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_timeoutInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `timeout` in the acknowledgement
 * (ECMA-269 C.17.11).
 */
export
const StartDataPath_timeoutInAck: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary timeoutInAck
 * @constant
 * @description
 * Alias of `StartDataPath_timeoutInAck`.
 */
export
const timeoutInAck: number = StartDataPath_timeoutInAck; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.17.11).
 */
export
const StartDataPath_privateDataInAck: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `StartDataPath_privateDataInAck`.
 */
export
const privateDataInAck: number = StartDataPath_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StartDataPath: $.ASN1Decoder<StartDataPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartDataPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartDataPath (el: _Element): StartDataPath {
    if (!_cached_decoder_for_StartDataPath) { _cached_decoder_for_StartDataPath = $._decodeBitString; }
    return _cached_decoder_for_StartDataPath(el);
}

let _cached_encoder_for_StartDataPath: $.ASN1Encoder<StartDataPath> | null = null;

/**
 * @summary Encodes a(n) StartDataPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartDataPath, encoded as an ASN.1 Element.
 */
export
function _encode_StartDataPath (value: StartDataPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartDataPath) { _cached_encoder_for_StartDataPath = $._encodeBitString; }
    return _cached_encoder_for_StartDataPath(value, elGetter);
}


/* eslint-enable */
