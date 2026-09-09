/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ServiceCompletionFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceCompletionFailure  ::=  BIT STRING
 * {     primaryCallConnectionInfo         ( 0),     -- optional parameters
 *     secondaryCallConnectionInfo         ( 1),     -- optional parameters
 *     otherDevicesPrimaryCallList         ( 2),     -- optional parameters
 *     otherDevicesSecondaryCallList         ( 3),     -- optional parameters
 *     mediaCallCharacteristics         ( 4),     -- optional parameters
 *     privateData                 ( 5) }
 * ```
 */
export
type ServiceCompletionFailure = BIT_STRING;

/**
 * @summary ServiceCompletionFailure_primaryCallConnectionInfo
 * @constant
 */
export
const ServiceCompletionFailure_primaryCallConnectionInfo: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary primaryCallConnectionInfo
 * @constant
 */
export
const primaryCallConnectionInfo: number = ServiceCompletionFailure_primaryCallConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceCompletionFailure_secondaryCallConnectionInfo
 * @constant
 */
export
const ServiceCompletionFailure_secondaryCallConnectionInfo: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary secondaryCallConnectionInfo
 * @constant
 */
export
const secondaryCallConnectionInfo: number = ServiceCompletionFailure_secondaryCallConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceCompletionFailure_otherDevicesPrimaryCallList
 * @constant
 */
export
const ServiceCompletionFailure_otherDevicesPrimaryCallList: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary otherDevicesPrimaryCallList
 * @constant
 */
export
const otherDevicesPrimaryCallList: number = ServiceCompletionFailure_otherDevicesPrimaryCallList; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceCompletionFailure_otherDevicesSecondaryCallList
 * @constant
 */
export
const ServiceCompletionFailure_otherDevicesSecondaryCallList: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary otherDevicesSecondaryCallList
 * @constant
 */
export
const otherDevicesSecondaryCallList: number = ServiceCompletionFailure_otherDevicesSecondaryCallList; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceCompletionFailure_mediaCallCharacteristics
 * @constant
 */
export
const ServiceCompletionFailure_mediaCallCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = ServiceCompletionFailure_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceCompletionFailure_privateData
 * @constant
 */
export
const ServiceCompletionFailure_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ServiceCompletionFailure_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ServiceCompletionFailure: $.ASN1Decoder<ServiceCompletionFailure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceCompletionFailure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceCompletionFailure (el: _Element): ServiceCompletionFailure {
    if (!_cached_decoder_for_ServiceCompletionFailure) { _cached_decoder_for_ServiceCompletionFailure = $._decodeBitString; }
    return _cached_decoder_for_ServiceCompletionFailure(el);
}

let _cached_encoder_for_ServiceCompletionFailure: $.ASN1Encoder<ServiceCompletionFailure> | null = null;

/**
 * @summary Encodes a(n) ServiceCompletionFailure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceCompletionFailure, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceCompletionFailure (value: ServiceCompletionFailure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceCompletionFailure) { _cached_encoder_for_ServiceCompletionFailure = $._encodeBitString; }
    return _cached_encoder_for_ServiceCompletionFailure(value, elGetter);
}


/* eslint-enable */
