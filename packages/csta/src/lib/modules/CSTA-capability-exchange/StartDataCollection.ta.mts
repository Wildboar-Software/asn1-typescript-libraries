/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StartDataCollection
 * @description
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
 */
export
const StartDataCollection_objectDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary objectDevice
 * @constant
 */
export
const objectDevice: number = StartDataCollection_objectDevice; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_objectCall
 * @constant
 */
export
const StartDataCollection_objectCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary objectCall
 * @constant
 */
export
const objectCall: number = StartDataCollection_objectCall; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_dataCollectionTypeDigits
 * @constant
 */
export
const StartDataCollection_dataCollectionTypeDigits: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dataCollectionTypeDigits
 * @constant
 */
export
const dataCollectionTypeDigits: number = StartDataCollection_dataCollectionTypeDigits; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_dataCollectionTypeTones
 * @constant
 */
export
const StartDataCollection_dataCollectionTypeTones: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dataCollectionTypeTones
 * @constant
 */
export
const dataCollectionTypeTones: number = StartDataCollection_dataCollectionTypeTones; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_digitsReportingCriteriaNumChars
 * @constant
 */
export
const StartDataCollection_digitsReportingCriteriaNumChars: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary digitsReportingCriteriaNumChars
 * @constant
 */
export
const digitsReportingCriteriaNumChars: number = StartDataCollection_digitsReportingCriteriaNumChars; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_digitsReportingCriteriaFlushChar
 * @constant
 */
export
const StartDataCollection_digitsReportingCriteriaFlushChar: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary digitsReportingCriteriaFlushChar
 * @constant
 */
export
const digitsReportingCriteriaFlushChar: number = StartDataCollection_digitsReportingCriteriaFlushChar; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_digitsReportingCriteriaTimeout
 * @constant
 */
export
const StartDataCollection_digitsReportingCriteriaTimeout: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary digitsReportingCriteriaTimeout
 * @constant
 */
export
const digitsReportingCriteriaTimeout: number = StartDataCollection_digitsReportingCriteriaTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_privateData
 * @constant
 */
export
const StartDataCollection_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = StartDataCollection_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataCollection_privateDataInAck
 * @constant
 */
export
const StartDataCollection_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
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
