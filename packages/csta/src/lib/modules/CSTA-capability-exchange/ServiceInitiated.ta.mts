/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ServiceInitiated
 * @description
 * Capability bitmap for the Service Initiated event (ECMA-269 C.6.17, ECMA-285
 * §9.10). Presence of this entry in `CallControlEvtsList` means the SF supports
 * that event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInitiated  ::=  BIT STRING
 * {     servicesPermitted             ( 0),     -- optional parameters
 *     mediaCallCharacteristics         ( 1),     -- optional parameters
 *     callCharacteristics             ( 2),     -- optional parameters
 *     initiatedConnectionInfo         ( 3),     -- optional parameters
 *     netwCallingDevice             ( 4),     -- optional parameters
 *     netwCalledDevice             ( 5),     -- optional parameters
 *     subjectOfCall                ( 7),     -- optional parameters
 *     messageInfo                ( 8),     -- optional parameters
 *     languagePreferences            ( 9),     -- optional parameters
 *     privateData                 ( 6),     -- optional parameters
 *     calledDevice                (10),     -- optional parameters
 *     locationInfoList            (11) }
 * ```
 */
export
type ServiceInitiated = BIT_STRING;

/**
 * @summary ServiceInitiated_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.17).
 */
export
const ServiceInitiated_servicesPermitted: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `ServiceInitiated_servicesPermitted`.
 */
export
const servicesPermitted: number = ServiceInitiated_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.17).
 */
export
const ServiceInitiated_mediaCallCharacteristics: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `ServiceInitiated_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = ServiceInitiated_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.17).
 */
export
const ServiceInitiated_callCharacteristics: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `ServiceInitiated_callCharacteristics`.
 */
export
const callCharacteristics: number = ServiceInitiated_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_initiatedConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.17).
 */
export
const ServiceInitiated_initiatedConnectionInfo: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary initiatedConnectionInfo
 * @constant
 * @description
 * Alias of `ServiceInitiated_initiatedConnectionInfo`.
 */
export
const initiatedConnectionInfo: number = ServiceInitiated_initiatedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_netwCallingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.17).
 */
export
const ServiceInitiated_netwCallingDevice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 * @description
 * Alias of `ServiceInitiated_netwCallingDevice`.
 */
export
const netwCallingDevice: number = ServiceInitiated_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_netwCalledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.17).
 */
export
const ServiceInitiated_netwCalledDevice: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 * @description
 * Alias of `ServiceInitiated_netwCalledDevice`.
 */
export
const netwCalledDevice: number = ServiceInitiated_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.6.17).
 */
export
const ServiceInitiated_subjectOfCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `ServiceInitiated_subjectOfCall`.
 */
export
const subjectOfCall: number = ServiceInitiated_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_messageInfo
 * @constant
 * @description
 * Bit set means the SF supports the optional `messageInfo` parameter (ECMA-269
 * C.6.17).
 */
export
const ServiceInitiated_messageInfo: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 * @description
 * Alias of `ServiceInitiated_messageInfo`.
 */
export
const messageInfo: number = ServiceInitiated_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.17).
 */
export
const ServiceInitiated_languagePreferences: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `ServiceInitiated_languagePreferences`.
 */
export
const languagePreferences: number = ServiceInitiated_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.17).
 */
export
const ServiceInitiated_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ServiceInitiated_privateData`.
 */
export
const privateData: number = ServiceInitiated_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_calledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.17).
 */
export
const ServiceInitiated_calledDevice: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary calledDevice
 * @constant
 * @description
 * Alias of `ServiceInitiated_calledDevice`.
 */
export
const calledDevice: number = ServiceInitiated_calledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.17).
 */
export
const ServiceInitiated_locationInfoList: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `ServiceInitiated_locationInfoList`.
 */
export
const locationInfoList: number = ServiceInitiated_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ServiceInitiated: $.ASN1Decoder<ServiceInitiated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceInitiated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceInitiated (el: _Element): ServiceInitiated {
    if (!_cached_decoder_for_ServiceInitiated) { _cached_decoder_for_ServiceInitiated = $._decodeBitString; }
    return _cached_decoder_for_ServiceInitiated(el);
}

let _cached_encoder_for_ServiceInitiated: $.ASN1Encoder<ServiceInitiated> | null = null;

/**
 * @summary Encodes a(n) ServiceInitiated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceInitiated, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceInitiated (value: ServiceInitiated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceInitiated) { _cached_encoder_for_ServiceInitiated = $._encodeBitString; }
    return _cached_encoder_for_ServiceInitiated(value, elGetter);
}


/* eslint-enable */
