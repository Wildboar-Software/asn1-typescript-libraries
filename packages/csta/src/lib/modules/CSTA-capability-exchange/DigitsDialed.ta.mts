/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DigitsDialed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitsDialed  ::=  BIT STRING
 * {     servicesPermitted             ( 0),     -- optional parameters
 *     netwCallingDevice             ( 1),     -- optional parameters
 *     netwCalledDevice             ( 2),     -- optional parameters
 *     diallingConnectionInfo             ( 3),     -- optional parameters
 *     callCharacteristics             ( 4),     -- optional parameters
 *     languagePreferences            ( 6),     -- optional parameters
 *     privateData                 ( 5),     -- optional parameters
 *     locationInfoList            ( 7) }
 * ```
 */
export
type DigitsDialed = BIT_STRING;

/**
 * @summary DigitsDialed_servicesPermitted
 * @constant
 */
export
const DigitsDialed_servicesPermitted: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = DigitsDialed_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary DigitsDialed_netwCallingDevice
 * @constant
 */
export
const DigitsDialed_netwCallingDevice: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 */
export
const netwCallingDevice: number = DigitsDialed_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary DigitsDialed_netwCalledDevice
 * @constant
 */
export
const DigitsDialed_netwCalledDevice: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 */
export
const netwCalledDevice: number = DigitsDialed_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary DigitsDialed_diallingConnectionInfo
 * @constant
 */
export
const DigitsDialed_diallingConnectionInfo: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary diallingConnectionInfo
 * @constant
 */
export
const diallingConnectionInfo: number = DigitsDialed_diallingConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary DigitsDialed_callCharacteristics
 * @constant
 */
export
const DigitsDialed_callCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = DigitsDialed_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary DigitsDialed_languagePreferences
 * @constant
 */
export
const DigitsDialed_languagePreferences: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = DigitsDialed_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary DigitsDialed_privateData
 * @constant
 */
export
const DigitsDialed_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DigitsDialed_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DigitsDialed_locationInfoList
 * @constant
 */
export
const DigitsDialed_locationInfoList: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = DigitsDialed_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DigitsDialed: $.ASN1Decoder<DigitsDialed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigitsDialed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigitsDialed (el: _Element): DigitsDialed {
    if (!_cached_decoder_for_DigitsDialed) { _cached_decoder_for_DigitsDialed = $._decodeBitString; }
    return _cached_decoder_for_DigitsDialed(el);
}

let _cached_encoder_for_DigitsDialed: $.ASN1Encoder<DigitsDialed> | null = null;

/**
 * @summary Encodes a(n) DigitsDialed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitsDialed, encoded as an ASN.1 Element.
 */
export
function _encode_DigitsDialed (value: DigitsDialed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigitsDialed) { _cached_encoder_for_DigitsDialed = $._encodeBitString; }
    return _cached_encoder_for_DigitsDialed(value, elGetter);
}


/* eslint-enable */
