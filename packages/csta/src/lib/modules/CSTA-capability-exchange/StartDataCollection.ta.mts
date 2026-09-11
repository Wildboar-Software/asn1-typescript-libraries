/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StartDataCollection
 * @description
 * Capability bitmap for the Start Data Collection service (ECMA-269 C.18.5,
 * ECMA-285 §9.10). Presence of this entry in `DataCollectionServList` means the
 * SF supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartDataCollection  ::=  BIT STRING
 * {     objectDevice                 ( 0),     -- optional parameters
 *     objectCall                 ( 1),     -- optional parameters
 *     dataCollectionTypeDigits         ( 2),     -- optional parameters
 *     dataCollectionTypeTones         ( 3),     -- optional parameters
 *     digitsReportingCriteriaNumChars     ( 4),     -- optional parameters
 *     digitsReportingCriteriaFlushChar     ( 5),     -- optional parameters
 *     digitsReportingCriteriaTimeout         ( 6),     -- optional parameters
 *     privateData                 ( 7),     -- optional parameters
 *     privateDataInAck             ( 8) }
 * ```
 */
export
type StartDataCollection = BIT_STRING;

/**
 * @summary StartDataCollection_objectDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.18.5).
 */
export
const StartDataCollection_objectDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary objectDevice
 * @constant
 * @description
 * Alias of `StartDataCollection_objectDevice`.
 */
export
const objectDevice: number = StartDataCollection_objectDevice; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_objectCall
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.18.5).
 */
export
const StartDataCollection_objectCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary objectCall
 * @constant
 * @description
 * Alias of `StartDataCollection_objectCall`.
 */
export
const objectCall: number = StartDataCollection_objectCall; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_dataCollectionTypeDigits
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.18.5).
 */
export
const StartDataCollection_dataCollectionTypeDigits: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dataCollectionTypeDigits
 * @constant
 * @description
 * Alias of `StartDataCollection_dataCollectionTypeDigits`.
 */
export
const dataCollectionTypeDigits: number = StartDataCollection_dataCollectionTypeDigits; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_dataCollectionTypeTones
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.18.5).
 */
export
const StartDataCollection_dataCollectionTypeTones: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dataCollectionTypeTones
 * @constant
 * @description
 * Alias of `StartDataCollection_dataCollectionTypeTones`.
 */
export
const dataCollectionTypeTones: number = StartDataCollection_dataCollectionTypeTones; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_digitsReportingCriteriaNumChars
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.18.5).
 */
export
const StartDataCollection_digitsReportingCriteriaNumChars: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary digitsReportingCriteriaNumChars
 * @constant
 * @description
 * Alias of `StartDataCollection_digitsReportingCriteriaNumChars`.
 */
export
const digitsReportingCriteriaNumChars: number = StartDataCollection_digitsReportingCriteriaNumChars; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_digitsReportingCriteriaFlushChar
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.18.5).
 */
export
const StartDataCollection_digitsReportingCriteriaFlushChar: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary digitsReportingCriteriaFlushChar
 * @constant
 * @description
 * Alias of `StartDataCollection_digitsReportingCriteriaFlushChar`.
 */
export
const digitsReportingCriteriaFlushChar: number = StartDataCollection_digitsReportingCriteriaFlushChar; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_digitsReportingCriteriaTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.18.5).
 */
export
const StartDataCollection_digitsReportingCriteriaTimeout: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary digitsReportingCriteriaTimeout
 * @constant
 * @description
 * Alias of `StartDataCollection_digitsReportingCriteriaTimeout`.
 */
export
const digitsReportingCriteriaTimeout: number = StartDataCollection_digitsReportingCriteriaTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.18.5).
 */
export
const StartDataCollection_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `StartDataCollection_privateData`.
 */
export
const privateData: number = StartDataCollection_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.18.5).
 */
export
const StartDataCollection_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `StartDataCollection_privateDataInAck`.
 */
export
const privateDataInAck: number = StartDataCollection_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StartDataCollection: $.ASN1Decoder<StartDataCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartDataCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartDataCollection (el: _Element): StartDataCollection {
    if (!_cached_decoder_for_StartDataCollection) { _cached_decoder_for_StartDataCollection = $._decodeBitString; }
    return _cached_decoder_for_StartDataCollection(el);
}

let _cached_encoder_for_StartDataCollection: $.ASN1Encoder<StartDataCollection> | null = null;

/**
 * @summary Encodes a(n) StartDataCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartDataCollection, encoded as an ASN.1 Element.
 */
export
function _encode_StartDataCollection (value: StartDataCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartDataCollection) { _cached_encoder_for_StartDataCollection = $._encodeBitString; }
    return _cached_encoder_for_StartDataCollection(value, elGetter);
}


/* eslint-enable */
