/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Conferenced
 * @description
 * Capability bitmap for the Conferenced event (ECMA-269 C.6.3, ECMA-285 §9.10).
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
 * Conferenced  ::=  BIT STRING
 * {     confereceConnectionsEndpointDeviceID         ( 0),     -- optional parameters
 *     confereceConnectionsresultingConnectionInfo     ( 1),     -- optional parameters
 *     userData                     ( 2),     -- optional parameters
 *     servicesPermitted                 ( 3),     -- optional parameters
 *     mediaCallCharacteristics             ( 4),     -- optional parameters
 *     callCharacteristics                 ( 5),     -- optional parameters
 *     bridgedConnectionInfo                 ( 6),     -- optional parameters
 *     lannguagePreferences                ( 8),     -- optional parameters
 *     deviceHistory                    ( 9),     -- optional parameters
 *     privateData                     ( 7),     -- optional parameters
 *     locationInfoList                (10) }
 * ```
 */
export
type Conferenced = BIT_STRING;

/**
 * @summary Conferenced_confereceConnectionsEndpointDeviceID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.3).
 */
export
const Conferenced_confereceConnectionsEndpointDeviceID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary confereceConnectionsEndpointDeviceID
 * @constant
 * @description
 * Alias of `Conferenced_confereceConnectionsEndpointDeviceID`.
 */
export
const confereceConnectionsEndpointDeviceID: number = Conferenced_confereceConnectionsEndpointDeviceID; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_confereceConnectionsresultingConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.3).
 */
export
const Conferenced_confereceConnectionsresultingConnectionInfo: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary confereceConnectionsresultingConnectionInfo
 * @constant
 * @description
 * Alias of `Conferenced_confereceConnectionsresultingConnectionInfo`.
 */
export
const confereceConnectionsresultingConnectionInfo: number = Conferenced_confereceConnectionsresultingConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.6.3).
 */
export
const Conferenced_userData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `Conferenced_userData`.
 */
export
const userData: number = Conferenced_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.3).
 */
export
const Conferenced_servicesPermitted: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Conferenced_servicesPermitted`.
 */
export
const servicesPermitted: number = Conferenced_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.3).
 */
export
const Conferenced_mediaCallCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `Conferenced_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = Conferenced_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.3).
 */
export
const Conferenced_callCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `Conferenced_callCharacteristics`.
 */
export
const callCharacteristics: number = Conferenced_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_bridgedConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.3).
 */
export
const Conferenced_bridgedConnectionInfo: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary bridgedConnectionInfo
 * @constant
 * @description
 * Alias of `Conferenced_bridgedConnectionInfo`.
 */
export
const bridgedConnectionInfo: number = Conferenced_bridgedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_lannguagePreferences
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.3).
 */
export
const Conferenced_lannguagePreferences: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary lannguagePreferences
 * @constant
 * @description
 * Alias of `Conferenced_lannguagePreferences`.
 */
export
const lannguagePreferences: number = Conferenced_lannguagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_deviceHistory
 * @constant
 * @description
 * Bit set means the SF supports the optional `deviceHistory` parameter
 * (ECMA-269 C.6.3).
 */
export
const Conferenced_deviceHistory: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 * @description
 * Alias of `Conferenced_deviceHistory`.
 */
export
const deviceHistory: number = Conferenced_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.3).
 */
export
const Conferenced_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Conferenced_privateData`.
 */
export
const privateData: number = Conferenced_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.3).
 */
export
const Conferenced_locationInfoList: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `Conferenced_locationInfoList`.
 */
export
const locationInfoList: number = Conferenced_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Conferenced: $.ASN1Decoder<Conferenced> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Conferenced
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Conferenced (el: _Element): Conferenced {
    if (!_cached_decoder_for_Conferenced) { _cached_decoder_for_Conferenced = $._decodeBitString; }
    return _cached_decoder_for_Conferenced(el);
}

let _cached_encoder_for_Conferenced: $.ASN1Encoder<Conferenced> | null = null;

/**
 * @summary Encodes a(n) Conferenced into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conferenced, encoded as an ASN.1 Element.
 */
export
function _encode_Conferenced (value: Conferenced, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Conferenced) { _cached_encoder_for_Conferenced = $._encodeBitString; }
    return _cached_encoder_for_Conferenced(value, elGetter);
}


/* eslint-enable */
