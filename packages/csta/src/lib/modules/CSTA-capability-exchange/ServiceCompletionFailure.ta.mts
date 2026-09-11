/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ServiceCompletionFailure
 * @description
 * Capability bitmap for the Service Completion Failure event (ECMA-269 C.8.5,
 * ECMA-285 §9.10). Presence of this entry in `CallAssociatedEvtsList` means the
 * SF supports that event. Each set bit is an optional parameter, enumerated
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.5).
 */
export
const ServiceCompletionFailure_primaryCallConnectionInfo: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary primaryCallConnectionInfo
 * @constant
 * @description
 * Alias of `ServiceCompletionFailure_primaryCallConnectionInfo`.
 */
export
const primaryCallConnectionInfo: number = ServiceCompletionFailure_primaryCallConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceCompletionFailure_secondaryCallConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.5).
 */
export
const ServiceCompletionFailure_secondaryCallConnectionInfo: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary secondaryCallConnectionInfo
 * @constant
 * @description
 * Alias of `ServiceCompletionFailure_secondaryCallConnectionInfo`.
 */
export
const secondaryCallConnectionInfo: number = ServiceCompletionFailure_secondaryCallConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceCompletionFailure_otherDevicesPrimaryCallList
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.5).
 */
export
const ServiceCompletionFailure_otherDevicesPrimaryCallList: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary otherDevicesPrimaryCallList
 * @constant
 * @description
 * Alias of `ServiceCompletionFailure_otherDevicesPrimaryCallList`.
 */
export
const otherDevicesPrimaryCallList: number = ServiceCompletionFailure_otherDevicesPrimaryCallList; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceCompletionFailure_otherDevicesSecondaryCallList
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.5).
 */
export
const ServiceCompletionFailure_otherDevicesSecondaryCallList: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary otherDevicesSecondaryCallList
 * @constant
 * @description
 * Alias of `ServiceCompletionFailure_otherDevicesSecondaryCallList`.
 */
export
const otherDevicesSecondaryCallList: number = ServiceCompletionFailure_otherDevicesSecondaryCallList; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceCompletionFailure_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.8.5).
 */
export
const ServiceCompletionFailure_mediaCallCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `ServiceCompletionFailure_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = ServiceCompletionFailure_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceCompletionFailure_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.8.5).
 */
export
const ServiceCompletionFailure_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ServiceCompletionFailure_privateData`.
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
