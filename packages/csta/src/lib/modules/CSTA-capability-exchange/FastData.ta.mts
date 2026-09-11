/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary FastData
 * @description
 * Capability bitmap for the Fast Data service (ECMA-269 C.17.6, ECMA-285
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
 * FastData  ::=  BIT STRING
 * {     objectDevice                 ( 0),     -- optional parameters
 *     objectCall                 ( 1),     -- optional parameters
 *     dataPathTypeText             ( 2),     -- optional parameters
 *     dataPathTypeVoice             ( 3),     -- optional parameters
 *     displayAttribPhyBaseRowNumber         ( 4),     -- optional parameters
 *     displayAttribPhyBaseColumnNumber     ( 5),     -- optional parameters
 *     displayAttribOffset             ( 6),     -- optional parameters
 *     privateData                 ( 7),     -- optional parameters
 *     privateDataInAck             ( 8),     -- optional parameters
 *     supportsModifyingPosition         ( 9) }
 * ```
 */
export
type FastData = BIT_STRING;

/**
 * @summary FastData_objectDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.6).
 */
export
const FastData_objectDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary objectDevice
 * @constant
 * @description
 * Alias of `FastData_objectDevice`.
 */
export
const objectDevice: number = FastData_objectDevice; /* SHORT_NAMED_BIT */

/**
 * @summary FastData_objectCall
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.6).
 */
export
const FastData_objectCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary objectCall
 * @constant
 * @description
 * Alias of `FastData_objectCall`.
 */
export
const objectCall: number = FastData_objectCall; /* SHORT_NAMED_BIT */

/**
 * @summary FastData_dataPathTypeText
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.6).
 */
export
const FastData_dataPathTypeText: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dataPathTypeText
 * @constant
 * @description
 * Alias of `FastData_dataPathTypeText`.
 */
export
const dataPathTypeText: number = FastData_dataPathTypeText; /* SHORT_NAMED_BIT */

/**
 * @summary FastData_dataPathTypeVoice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.6).
 */
export
const FastData_dataPathTypeVoice: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dataPathTypeVoice
 * @constant
 * @description
 * Alias of `FastData_dataPathTypeVoice`.
 */
export
const dataPathTypeVoice: number = FastData_dataPathTypeVoice; /* SHORT_NAMED_BIT */

/**
 * @summary FastData_displayAttribPhyBaseRowNumber
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.6).
 */
export
const FastData_displayAttribPhyBaseRowNumber: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseRowNumber
 * @constant
 * @description
 * Alias of `FastData_displayAttribPhyBaseRowNumber`.
 */
export
const displayAttribPhyBaseRowNumber: number = FastData_displayAttribPhyBaseRowNumber; /* SHORT_NAMED_BIT */

/**
 * @summary FastData_displayAttribPhyBaseColumnNumber
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.6).
 */
export
const FastData_displayAttribPhyBaseColumnNumber: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseColumnNumber
 * @constant
 * @description
 * Alias of `FastData_displayAttribPhyBaseColumnNumber`.
 */
export
const displayAttribPhyBaseColumnNumber: number = FastData_displayAttribPhyBaseColumnNumber; /* SHORT_NAMED_BIT */

/**
 * @summary FastData_displayAttribOffset
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.6).
 */
export
const FastData_displayAttribOffset: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribOffset
 * @constant
 * @description
 * Alias of `FastData_displayAttribOffset`.
 */
export
const displayAttribOffset: number = FastData_displayAttribOffset; /* SHORT_NAMED_BIT */

/**
 * @summary FastData_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.17.6).
 */
export
const FastData_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `FastData_privateData`.
 */
export
const privateData: number = FastData_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary FastData_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.17.6).
 */
export
const FastData_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `FastData_privateDataInAck`.
 */
export
const privateDataInAck: number = FastData_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary FastData_supportsModifyingPosition
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.6).
 */
export
const FastData_supportsModifyingPosition: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary supportsModifyingPosition
 * @constant
 * @description
 * Alias of `FastData_supportsModifyingPosition`.
 */
export
const supportsModifyingPosition: number = FastData_supportsModifyingPosition; /* SHORT_NAMED_BIT */

let _cached_decoder_for_FastData: $.ASN1Decoder<FastData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FastData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FastData (el: _Element): FastData {
    if (!_cached_decoder_for_FastData) { _cached_decoder_for_FastData = $._decodeBitString; }
    return _cached_decoder_for_FastData(el);
}

let _cached_encoder_for_FastData: $.ASN1Encoder<FastData> | null = null;

/**
 * @summary Encodes a(n) FastData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FastData, encoded as an ASN.1 Element.
 */
export
function _encode_FastData (value: FastData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FastData) { _cached_encoder_for_FastData = $._encodeBitString; }
    return _cached_encoder_for_FastData(value, elGetter);
}


/* eslint-enable */
